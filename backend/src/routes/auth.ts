import { Router } from "express";
import {
  register,
  login,
  refresh,
  logout,
  onboarding,
  verifyEmail,
  resendOTP,
} from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = Router();

// Auth routes
router.post("/register", register);
router.post("/verify-email", verifyEmail);
router.post("/resend-otp", resendOTP);
router.post("/login", login);
router.post("/refresh", refresh);
router.post("/logout", logout);
router.put("/onboarding", protect, onboarding);

export default router;
