import { sequelize } from "../../config/db.config";
import { DataTypes } from "@sequelize/core";

export const InstructorModel = sequelize.define(
  "Instructor",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "instructor",
  },
);
