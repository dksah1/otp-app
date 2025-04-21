export const errorHandler = (err, req, res, next) => {
  console.error(`Error: ${err.message}`);

  const statusCode = res.statusCode;

  res.status(statusCode).json({
    success: false,
    error: err.message || "something went wrong",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
