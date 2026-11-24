// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from "express";
import createHttpError, { isHttpError } from "http-errors";
import { ZodError } from "zod";

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (res.headersSent) return next(err);

  // zod error handling
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: err.issues.map((item) => item.message),
    });
  }

  // http error handling
  const isKnown = isHttpError(err);
  const statusCode = isKnown ? err.statusCode : 500;
  const message = isKnown ? err.message : "خطای داخلی سرور";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    ...(process.env.NODE_ENV !== "production" && err instanceof Error
      ? { stack: err.stack }
      : {}),
  });
};

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  next(createHttpError.NotFound(`مسیر ${req.originalUrl} پیدا نشد`));
};
