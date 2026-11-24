import { UserProfileModel } from "./panel.model";
import { UserModel } from "../user/user.model";
import { UserCourseModel } from "../userCourse/userCourse.model";
import { OrderModel } from "../order/order.model";
import createHttpError from "http-errors";
import { CourseModel } from "../course/course.model";
import { CategoryModel } from "../category/category.model";
import { InstructorModel } from "../instructor/instructor.model";
import { OrderItemModel } from "../orderItem/orderItem.model";

export const getProfileService = async (userId: number) => {
  return await UserModel.findByPk(userId, {
    include: {
      model: UserProfileModel,
      as: "profile",
      required: false,
    },
  });
};

export const getDashboardService = async (userId: number) => {
  const user = await UserModel.findByPk(userId, {
    attributes: ["firstName", "lastName", "phoneNumber"],
    include: {
      model: UserProfileModel,
      as: "profile",
      attributes: ["userName", "email", "birthday"],
      required: false,
    },
  });

  if (!user) {
    throw createHttpError(404, "کاربر یافت نشد");
  }

  const courseCount = await UserCourseModel.count({
    where: { userId },
  });

  const orderCount = await OrderModel.count({
    where: { userId },
  });

  const totalAmounts = await OrderModel.sum("totalAmount", {
    where: { userId },
  });

  const data = user.get({ plain: true });

  const fields = {
    firstName: data.firstName ?? null,
    lastName: data.lastName ?? null,
    phoneNumber: data.phoneNumber ?? null,
    userName: data.profile?.userName ?? null,
    email: data.profile?.email ?? null,
    birthday: data.profile?.birthday ?? null,
  };

  const recentOrders = (
    await OrderModel.findAll({
      where: { userId },
      attributes: ["id", "totalAmount", "status", "createdAt"],
      order: [["createdAt", "DESC"]],
      limit: 3,
      raw: true,
    })
  ).map((item) => ({
    ...item,
    createdAt: new Intl.DateTimeFormat("fa-IR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(item.createdAt)),
  }));

  return {
    user: fields,
    courseCount,
    orderCount,
    totalAmounts,
    recentOrders,
  };
};

export const getMyCourseService = async (userId: number) => {
  const userCourses = await UserCourseModel.findAll({
    where: { userId },
    attributes: [],
    include: {
      model: CourseModel,
      as: "course",
      attributes: [
        "id",
        "title",
        "thumbnailImage",
        "duration",
        "lessons",
        "slug",
      ],
      include: [
        {
          model: CategoryModel,
          as: "category",
          attributes: {
            exclude: ["slug"],
          },
        },
        {
          model: InstructorModel,
          as: "instructor",
          attributes: {
            exclude: ["description"],
          },
        },
      ],
    },
  });

  return userCourses.map((item) => item.get("course"));
};

export const getMyOrdersService = async (userId: number) => {
  const orders = await OrderModel.findAll({
    where: { userId },
    attributes: {
      exclude: ["userId"],
    },
    include: [
      {
        model: OrderItemModel,
        as: "items",
        attributes: {
          exclude: ["courseId", "orderId"],
        },
        include: {
          model: CourseModel,
          as: "course",
          attributes: ["id", "title"],
        },
      },
    ],
    order: [["createdAt", "DESC"]],
  });

  return orders.map((item) => {
    const order = item.toJSON();

    return {
      ...order,
      createdAt: new Intl.DateTimeFormat("fa-IR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        timeZone: "Asia/Tehran",
      }).format(new Date(order.createdAt)),
    };
  });
};
