import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { config } from "./config/config.js";
import otpRoutes from "./routes/otpRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

app.use(cors(config.corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/otp", otpRoutes);

app.get("/", (req, res) => {
  res.send("OTP Verification API - Up and Running");
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Endpoint not found",
  });
});

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running in ${config.env} mode on port ${config.port}`);
});
