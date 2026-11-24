import { Router } from "express";
import { completeRegistrationController, sendOtpController, verifyOtpController } from "./auth.controller";

const router = Router();

router.post("/send-otp", sendOtpController);
router.post("/verify-otp", verifyOtpController);
router.post("/complete-registration", completeRegistrationController);

export default router;
