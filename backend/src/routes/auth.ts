import { Router } from "express";
import {
  register,
  login,
  refresh,
  logout,
  onboarding,
} from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = Router();

// Auth routes
router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refresh);
router.post("/logout", logout);
router.put("/onboarding", protect, onboarding);

export default router;
