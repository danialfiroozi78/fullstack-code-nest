import { sequelize } from "../../config/db.config";
import { CartModel } from "../cart/cart.model";
import { CartItemModel } from "../cartItem/cartItem.model";
import { CourseModel } from "../course/course.model";
import createHttpError from "http-errors";
import { UserCourseModel } from "../userCourse/userCourse.model";
import { Op } from "@sequelize/core";
import { OrderModel } from "./order.model";
import { OrderItemModel } from "../orderItem/orderItem.model";

export const orderCheckoutService = async (userId: number) => {
  // Step 1: Get cart
  return sequelize.transaction(async (transaction) => {
    const cart = await CartModel.findOne({
      where: { userId },
      include: [
        {
          model: CartItemModel,
          as: "items",
          include: { model: CourseModel, as: "course" },
        },
      ],
    });

    if (!cart) throw createHttpError(400, "سبد خرید شما یافت نشد");

    if (!cart?.items?.length)
      throw createHttpError(400, "شما هنوز دوره ای انتخاب نکرده اید");

    // get ids of courses which are in my basket
    const courseIds = cart.items.map((item) => item.id);

    const alreadyPurchased = await UserCourseModel.findOne({
      where: {
        userId,
        courseId: {
          [Op.in]: courseIds,
        },
      },
    });

    if (alreadyPurchased) {
      throw createHttpError(
        409,
        "یکی از دوره‌های سبد خرید قبلاً خریداری شده است",
      );
    }

    const orderItems = cart.items!.map((item) => {
      const course = item.course;

      if (!course) {
        throw createHttpError(400, "اطلاعات یکی از دوره‌ها یافت نشد");
      }

      const price = course.price;

      const discount = course.activeDiscount ? course.discount : 0;

      const discountAmount = Math.round((price * discount) / 100);

      const finalPrice = price - discountAmount;

      return {
        courseId: course.id,
        price,
        discountAmount,
        finalPrice,
      };
    });

    const subtotal = orderItems.reduce((total, item) => total + item.price, 0);

    const totalDiscount = orderItems.reduce(
      (total, item) => total + item.discountAmount,
      0,
    );

    const totalAmount = subtotal - totalDiscount;

    const order = await OrderModel.create(
      {
        userId,
        totalAmount,
        status: "completed",
      },
      { transaction },
    );

    const items = orderItems.map((item) => ({
      ...item,
      orderId: order.id,
    }));

    await OrderItemModel.bulkCreate(items, { transaction });

    const userCourses = orderItems.map((item) => ({
      userId,
      courseId: item.courseId,
      orderId: order.id,
    }));

    await UserCourseModel.bulkCreate(userCourses, {
      transaction,
    });

    await CartItemModel.destroy({
      where: {
        cartId: cart.id,
      },
      transaction,
    });

    return {
      orderId: order.id,
      totalAmount,
      message: "سفارش شما با موفقیت ثبت شد",
    };
  });
};
