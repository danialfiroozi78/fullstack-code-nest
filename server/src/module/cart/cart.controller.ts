import { Request, Response } from "express";
import {
  addItemToCartService,
  getCartService,
  removeItemFromCartItemService,
} from "./cart.service";

export const getCartController = async (
  req: Request & {
    user?: {
      id: number;
    };
  },
  res: Response,
) => {
  const userId = req.user?.id;
  const result = await getCartService(Number(userId));

  return res.status(200).json({
    success: true,
    statusCode: 200,
    message: "سبد خرید شما با موفقیت دریافت شد",
    data: { cart: result },
  });
};

export const addItemToCartController = async (
  req: Request & {
    user?: {
      id: number;
    };
  },
  res: Response,
) => {
  const userId = req.user?.id;
  const courseId = req.body.courseId;

  const result = await addItemToCartService(Number(userId), courseId);

  return res.status(200).json({
    success: true,
    statusCode: 200,
    message: "دوره مورد نظر با موفقیت به سبد خرید اضافه شد",
    data: { cart: result },
  });
};

export const removeItemFromCartController = async (
  req: Request & {
    user?: {
      id: number;
    };
  },
  res: Response,
) => {
  const courseId = req.params.courseId;
  const userId = req?.user?.id;

  const result = await removeItemFromCartItemService(
    Number(courseId),
    Number(userId),
  );

  return res.status(200).json({
    success: true,
    statusCode: 200,
    message: result.message,
  });
};
