import { DataTypes, Model, sql } from "@sequelize/core";
import { sequelize } from "../../config/db.config";

export const UserModel = sequelize.define<Model & { id: number }>(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.ENUM("student", "instructor", "admin"),
      allowNull: false,
      defaultValue: "student",
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    joinedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sql.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    tableName: "user",
    timestamps: false,
  },
);
