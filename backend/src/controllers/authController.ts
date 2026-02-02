import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import logger from "../utils/logger.js";
import { OtpType } from "../../generated/prisma/client"; // import enum from generated client

import { successResponse, errorResponse } from "../utils/apiResponse.js";
import { sendOTP } from "../utils/email.js";

// Helper functions
const createAccessToken = (id: number) =>
  jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: "15m" });

const createRefreshToken = (id: number) =>
  jwt.sign({ id }, process.env.REFRESH_SECRET!, { expiresIn: "7d" });

// Register a new user
export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists (by email or username)
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      return res.status(400).json(errorResponse("User already exists", 400));
    }

    // Hash password and create user
    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashed,
        isVerified: false,
      },
      select: {
        id: true,
        username: true,
        email: true,
        isVerified: true,
      },
    });

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    // Create OTP Token
    await prisma.otpToken.create({
      data: {
        userId: user.id,
        code: otp,
        type: OtpType.VERIFY_EMAIL,
        expiresAt: otpExpiry,
      },
    });

    // Send OTP Email
    const emailSent = await sendOTP({
      email,
      username,
      otp,
      type: "verification",
    });

    if (!emailSent) {
      // If email fails, delete the user (will cascade delete otpToken)
      await prisma.user.delete({ where: { id: user.id } });
      return res
        .status(500)
        .json(errorResponse("Failed to send verification email", 500));
    }

    // Generate tokens immediately after registration
    const accessToken = createAccessToken(user.id);
    const refreshToken = createRefreshToken(user.id);

    // Set refresh token as httpOnly cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
      path: "/auth/refresh",
    });

    res
      .status(201)
      .json(
        successResponse(
          { user, accessToken },
          "User registered. Please verify your email.",
        ),
      );
  } catch (error) {
    logger.error({ err: error, email: req.body.email }, "Register failed");
    res.status(500).json(errorResponse("Server error", 500));
  }
};

// Login user
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json(errorResponse("User not found", 400));
    }

    // Verify password
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json(errorResponse("Invalid credentials", 401));
    }

    // Generate tokens
    const accessToken = createAccessToken(user.id);
    const refreshToken = createRefreshToken(user.id);

    // Set refresh token as httpOnly cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
      path: "/auth/refresh",
    });

    res.json(successResponse({ accessToken }, "Login successful"));
  } catch (error) {
    logger.error({ err: error, email: req.body.email }, "Login failed");
    res.status(500).json(errorResponse("Server error", 500));
  }
};

// Refresh access token
export const refresh = (req: Request, res: Response) => {
  const token = req.cookies.refreshToken;
  if (!token) {
    return res.status(401).json(errorResponse("No refresh token", 401));
  }

  try {
    const payload = jwt.verify(token, process.env.REFRESH_SECRET!) as {
      id: number;
    };
    const accessToken = createAccessToken(payload.id);
    res.json(successResponse({ accessToken }, "Token refreshed"));
  } catch {
    res.status(403).json(errorResponse("Invalid refresh token", 403));
  }
};

// Logout user
export const logout = (_req: Request, res: Response) => {
  res.clearCookie("refreshToken", { path: "/auth/refresh" });
  res.json(successResponse(null, "Logged out successfully"));
};

// Complete Onboarding
export const onboarding = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const { firstName, lastName, phone } = req.body;

    if (!firstName || !lastName) {
      return res
        .status(400)
        .json(errorResponse("First name and last name are required", 400));
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        firstName,
        lastName,
        phone,
        isOnboardingComplete: true,
      },
      select: {
        id: true,
        username: true,
        email: true,
        firstName: true,
        lastName: true,
        isOnboardingComplete: true,
      },
    });

    res
      .status(200)
      .json(successResponse(updatedUser, "Onboarding completed successfully"));
  } catch (error) {
    logger.error(
      { err: error, userId: (req as any).user?.id },
      "Onboarding failed",
    );
    res.status(500).json(errorResponse("Server error", 500));
  }
};

// Verify Email with OTP
export const verifyEmail = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(404).json(errorResponse("User not found", 404));
    }

    if (user.isVerified) {
      return res.status(400).json(errorResponse("Email already verified", 400));
    }

    // Find valid OTP
    const validOtp = await prisma.otpToken.findFirst({
      where: {
        userId: user.id,
        code: otp,
        type: OtpType.VERIFY_EMAIL,
        expiresAt: { gt: new Date() },
        usedAt: null,
      },
    });

    if (!validOtp) {
      return res.status(400).json(errorResponse("Invalid or expired OTP", 400));
    }

    // Verify user and mark OTP used
    await prisma.$transaction([
      prisma.user.update({
        where: { id: user.id },
        data: { isVerified: true },
      }),
      prisma.otpToken.update({
        where: { id: validOtp.id },
        data: { usedAt: new Date() },
      }),
    ]);

    res.json(successResponse(null, "Email verified successfully"));
  } catch (error) {
    logger.error({ err: error, email: req.body.email }, "Verification failed");
    res.status(500).json(errorResponse("Server error", 500));
  }
};

// Resend OTP
export const resendOTP = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(404).json(errorResponse("User not found", 404));
    }

    if (user.isVerified) {
      return res.status(400).json(errorResponse("Email already verified", 400));
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date(Date.now() + 15 * 60 * 1000);

    // Create new OTP Token
    await prisma.otpToken.create({
      data: {
        userId: user.id,
        code: otp,
        type: OtpType.VERIFY_EMAIL,
        expiresAt: otpExpiry,
      },
    });

    const emailSent = await sendOTP({
      email,
      username: user.username,
      otp,
      type: "verification",
    });

    if (!emailSent) {
      return res
        .status(500)
        .json(errorResponse("Failed to send verification email", 500));
    }

    const responseData: any = {};
    if (process.env.NODE_ENV !== "production") {
      responseData.devOtp = otp;
    }

    res.json(successResponse(responseData, "OTP resent successfully"));
  } catch (error) {
    logger.error({ err: error, email: req.body.email }, "Resend OTP failed");
    res.status(500).json(errorResponse("Server error", 500));
  }
};

// Forgot Password
export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(404).json(errorResponse("User not found", 404));
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date(Date.now() + 15 * 60 * 1000);

    // Create new OTP Token
    await prisma.otpToken.create({
      data: {
        userId: user.id,
        code: otp,
        type: OtpType.RESET_PASSWORD,
        expiresAt: otpExpiry,
      },
    });

    const emailSent = await sendOTP({
      email,
      username: user.username,
      otp,
      type: "reset",
    });

    if (!emailSent) {
      return res
        .status(500)
        .json(errorResponse("Failed to send reset email", 500));
    }

    const responseData: any = {};
    if (process.env.NODE_ENV !== "production") {
      responseData.devOtp = otp;
    }

    res.json(successResponse(responseData, "Reset OTP sent successfully"));
  } catch (error) {
    logger.error(
      { err: error, email: req.body.email },
      "Forgot Password failed",
    );
    res.status(500).json(errorResponse("Server error", 500));
  }
};

// Verify Reset OTP
export const verifyResetOTP = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(404).json(errorResponse("User not found", 404));
    }

    const validOtp = await prisma.otpToken.findFirst({
      where: {
        userId: user.id,
        code: otp,
        type: OtpType.RESET_PASSWORD,
        expiresAt: { gt: new Date() },
        usedAt: null,
      },
    });

    if (!validOtp) {
      return res.status(400).json(errorResponse("Invalid or expired OTP", 400));
    }

    res.json(successResponse(null, "OTP verified successfully"));
  } catch (error) {
    logger.error(
      { err: error, email: req.body.email },
      "Verify Reset OTP failed",
    );
    res.status(500).json(errorResponse("Server error", 500));
  }
};

// Reset Password
export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { email, otp, newPassword } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(404).json(errorResponse("User not found", 404));
    }

    const validOtp = await prisma.otpToken.findFirst({
      where: {
        userId: user.id,
        code: otp,
        type: OtpType.RESET_PASSWORD,
        expiresAt: { gt: new Date() },
        usedAt: null,
      },
    });

    if (!validOtp) {
      return res.status(400).json(errorResponse("Invalid or expired OTP", 400));
    }

    const hashed = await bcrypt.hash(newPassword, 10);

    // Update password and mark OTP used
    await prisma.$transaction([
      prisma.user.update({
        where: { id: user.id },
        data: { password: hashed },
      }),
      prisma.otpToken.update({
        where: { id: validOtp.id },
        data: { usedAt: new Date() },
      }),
    ]);

    res.json(successResponse(null, "Password reset successfully"));
  } catch (error) {
    logger.error(
      { err: error, email: req.body.email },
      "Reset Password failed",
    );
    res.status(500).json(errorResponse("Server error", 500));
  }
};

// Get current user profile
export const getMe = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        isOnboardingComplete: true,
        isVerified: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(404).json(errorResponse("User not found", 404));
    }

    res.json(successResponse(user, "User profile retrieved successfully"));
  } catch (error) {
    logger.error(
      { err: error, userId: (req as any).user?.id },
      "Get profile failed",
    );
    res.status(500).json(errorResponse("Server error", 500));
  }
};
