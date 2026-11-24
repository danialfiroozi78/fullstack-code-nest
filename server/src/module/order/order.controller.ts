import { Request, Response } from "express";
import { orderCheckoutService } from "./order.service";

export const orderCheckoutController = async (
  req: Request & {
    user?: {
      id: number;
    };
  },
  res: Response,
) => {
  const userId = Number(req.user?.id);
  const result = await orderCheckoutService(userId);

  return res.status(200).json({
    success: true,
    statusCode: 200,
    data: result,
  });
};
