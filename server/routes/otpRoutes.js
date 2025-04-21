import express from "express";
import { verifyOtpController } from "../controllers/otpController.js";
import { validateOtp } from "../middleware/validator.js";

const router = express.Router();

router.post(
  "/verify",

  validateOtp,
  verifyOtpController
);

export default router;
