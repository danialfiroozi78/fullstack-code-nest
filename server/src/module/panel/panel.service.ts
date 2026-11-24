import { UserProfileModel } from "./panel.model";
import { UserModel } from "../user/user.model";
import { UserCourseModel } from "../userCourse/userCourse.model";
import { OrderModel } from "../order/order.model";
import createHttpError from "http-errors";

export const getProfileService = async (userId: number) => {
  const user = await UserModel.findByPk(userId, {
    include: {
      model: UserProfileModel,
      as: "profile",
      required: false,
    },
  });

  return user;
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

  return {
    user: fields,
    courseCount,
    orderCount,
    totalAmounts,
  };
};
