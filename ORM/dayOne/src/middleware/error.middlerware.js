
export const golbalErrorHandler = (err, req, res, next) => {
  return res.status(err.status || 500).json({
    error_message: err.message,
    error: err.error,
    stack: err.stack,
  });
};


