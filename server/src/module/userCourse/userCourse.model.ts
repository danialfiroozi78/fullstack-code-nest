import { sequelize } from "../../config/db.config";
import { DataTypes } from "@sequelize/core";
import { UserModel } from "../user/user.model";
import { OrderModel } from "../order/order.model";
import { CourseModel } from "../course/course.model";

export const UserCourseModel = sequelize.define(
  "userCourse",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserModel,
        key: "id",
      },
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: OrderModel,
        key: "id",
      },
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: CourseModel,
        key: "id",
      },
    },
  },
  { tableName: "userCourse", timestamps: false },
);
