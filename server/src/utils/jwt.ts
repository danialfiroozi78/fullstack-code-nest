import createHttpError from "http-errors";
import jwt from "jsonwebtoken";

export const generateAccessToken = (userId: number) => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw createHttpError(404, "JWT_SECRET is missing");
  }

  return jwt.sign({ id: userId }, secret, {
    algorithm: "HS256",
    expiresIn: "7d",
  });
};
