import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { pool } from "../db.js";
import logger from "../utils/logger.js";
import { successResponse, errorResponse } from "../utils/apiResponse.js";

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
    const existingUser = await pool.query(
      "SELECT id FROM users WHERE email = $1 OR username = $2",
      [email, username],
    );
    if (existingUser.rows.length) {
      return res.status(400).json(errorResponse("User already exists", 400));
    }

    // Hash password and create user
    const hashed = await bcrypt.hash(password, 10);
    const user = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email",
      [username, email, hashed],
    );

    res
      .status(201)
      .json(successResponse(user.rows[0], "User registered successfully"));
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
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (!result.rows.length) {
      return res.status(400).json(errorResponse("User not found", 400));
    }

    // Verify password
    const user = result.rows[0];
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
