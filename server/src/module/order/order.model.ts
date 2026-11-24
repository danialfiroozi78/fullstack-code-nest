import { sequelize } from "../../config/db.config";
import { DataTypes, Model, sql } from "@sequelize/core";
import { UserModel } from "../user/user.model";

export type OrderInstance = Model & {
  id: number;
  userId: number;
  totalAmount: number;
  status: "pending" | "completed";
};

export const OrderModel = sequelize.define<OrderInstance>(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserModel,
        key: "id",
      },
    },
    totalAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "completed"),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sql.fn("NOW"),
    },
  },
  { tableName: "order", timestamps: false },
);
