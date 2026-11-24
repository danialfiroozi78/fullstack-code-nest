import { Router } from "express";
import {
  completeRegistrationController,
  logoutController,
  sendOtpController,
  verifyOtpController,
} from "./auth.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

const router = Router();

router.post("/send-otp", sendOtpController);
router.post("/verify-otp", verifyOtpController);
router.post("/complete-registration", completeRegistrationController);
router.post("/logout", authMiddleware, logoutController);

export default router;
