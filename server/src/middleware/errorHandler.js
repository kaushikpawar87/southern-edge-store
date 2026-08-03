export function notFoundHandler(req, res) {
  return res.status(404).json({
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
}

export function errorHandler(error, req, res, next) {
  void next; // This line is added to avoid the "next is defined but never used" warning
  console.error(error);

  return res.status(error.status || 500).json({
    message: error.message || "Internal server error",
  });
}
