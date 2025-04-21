export const config = {
  port: process.env.PORT || 8000,
  env: process.env.NODE_ENV || "development",
  corsOptions: {
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  },
};
