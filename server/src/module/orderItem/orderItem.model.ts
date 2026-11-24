import { sequelize } from "../../config/db.config";
import { DataTypes } from "@sequelize/core";
import { CourseModel } from "../course/course.model";
import { OrderModel } from "../order/order.model";

export const OrderItemModel = sequelize.define(
  "orderItem",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
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
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discountAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    finalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { tableName: "orderItem", timestamps: false },
);
