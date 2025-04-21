export const validateOtp = (req, res, next) => {
  const { otp } = req.body;

  if (!otp) {
    return res.status(400).json({
      success: false,
      error: "OTP is required",
    });
  }

  if (otp.length !== 6) {
    return res.status(400).json({
      success: false,
      error: "OTP must be 6 digits",
    });
  }

  if (!/^\d+$/.test(otp)) {
    return res.status(400).json({
      success: false,
      error: "OTP must contain only digits",
    });
  }

  next();
};
