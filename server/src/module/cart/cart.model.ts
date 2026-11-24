import { sequelize } from "../../config/db.config";
import { UserModel } from "../user/user.model";
import { DataTypes, Model } from "@sequelize/core";

type CourseInstance = Model & {
  id: number;
  title: string;
  price: number;
  discount: number;
  activeDiscount: boolean;
};

type CartItemInstance = Model & {
  id: number;
  cartId: number;
  courseId: number;

  // اطلاعات دوره از طریق include
  course?: CourseInstance;
};

type CartInstance = Model & {
  id: number;
  userId: number;

  // آیتم‌های سبد خرید از طریق include
  items?: CartItemInstance[];
};

export const CartModel = sequelize.define<CartInstance>(
  "cart",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: UserModel,
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    timestamps: false,
    tableName: "cart",
  },
);
