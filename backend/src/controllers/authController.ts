import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { prisma } from "../db.js";
import logger from "../utils/logger.js";
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

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    // Hash password and create user with OTP
    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashed,
        otp,
        otpExpiry,
        isVerified: false,
      },
      select: {
        id: true,
        username: true,
        email: true,
        isVerified: true,
      },
    });

    // Send OTP Email
    const emailSent = await sendOTP({ email, username, otp });

    if (!emailSent) {
      // If email fails, delete the user so they can try again
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

    if (!user.otp || user.otp !== otp) {
      return res.status(400).json(errorResponse("Invalid OTP", 400));
    }

    if (!user.otpExpiry || new Date() > user.otpExpiry) {
      return res.status(400).json(errorResponse("OTP expired", 400));
    }

    // Verify user
    await prisma.user.update({
      where: { id: user.id },
      data: {
        isVerified: true,
        otp: null,
        otpExpiry: null,
      },
    });

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

    await prisma.user.update({
      where: { id: user.id },
      data: { otp, otpExpiry },
    });

    const emailSent = await sendOTP({ email, username: user.username, otp });

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
