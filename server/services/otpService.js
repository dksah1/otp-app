export const otpServrice = (otp) => {
  if (otp.charAt(otp.length - 1) === "7") {
    throw new Error("Invalid OTP number");
  }

  return { verified: true, message: "OTP verified successfully" };
};
