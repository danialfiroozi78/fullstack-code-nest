import { sequelize } from "../../config/db.config";
import { DataTypes } from "@sequelize/core";

export const CategoryModel = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
  },
  { timestamps: false, tableName: "category" },
);
