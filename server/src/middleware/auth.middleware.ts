import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import jwt from "jsonwebtoken";
import { UserModel } from "../module/user/user.model";
import { Model } from "@sequelize/core";

export const authMiddleware = async (
  req: Request & {
    user?: {
      id: number;
    };
  },
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies?.access_token;

    if (!token) {
      throw createHttpError(
        401,
        "توکن منقضی شده یا پیدا نشد. لطفاً دوباره وارد شوید",
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    if (typeof decoded === "string" || typeof decoded.id !== "number")
      throw createHttpError(401, "توکن نامعتبر است");

    let user = await UserModel.findByPk(decoded.id);
    user = user?.get({ plain: true });

    if (!user)
      throw createHttpError(401, "حساب کاربری پیدا نشد. لطفاً دوباره وارد شوید");

    req.user = {
      id: user.id,
    };

    next();
  } catch (error) {
    next(error);
  }
};
