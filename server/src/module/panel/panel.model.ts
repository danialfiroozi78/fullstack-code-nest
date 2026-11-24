import { DataTypes, sql } from "@sequelize/core";
import { sequelize } from "../../config/db.config";
import { UserModel } from "../user/user.model";

export const UserProfileModel = sequelize.define(
  "userProfile",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: UserModel,
        key: "id",
      },
    },
    userName: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sql.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    tableName: "userProfile",
    timestamps: false,
  },
);
