import { sequelize } from "../../config/db.config";
import { CartModel } from "../cart/cart.model";
import { DataTypes } from "@sequelize/core";
import { CourseModel } from "../course/course.model";

export const CartItemModel = sequelize.define(
  "cartItem",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: CartModel,
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: CourseModel,
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    tableName: "cartItem",
    timestamps: false,
  },
);
