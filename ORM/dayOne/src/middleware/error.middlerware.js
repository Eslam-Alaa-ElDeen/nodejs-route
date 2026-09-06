
export const golbalErrorHandler = (error, req, res, next) => {
  return res.status(error.case?.status || 500).json({
    error_message: error.message||'server error',
    error,
    stack: error.stack,
  });
};


