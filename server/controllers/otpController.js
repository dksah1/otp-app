import { otpServrice } from "../services/otpService.js";
import { formatResponse } from "../utils/responseFormatter.js";

export const verifyOtpController = async (req, res, next) => {
  try {
    const { otp } = req.body;

    const result = otpServrice(otp);

    res.status(200).json(formatResponse(true, result));
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
