import { sequelize } from "../../config/db.config";
import { DataTypes } from "@sequelize/core";
import { CourseModel } from "../course/course.model";

export const CourseDetailModel = sequelize.define(
  "coursesDetail",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: CourseModel,
        key: "id",
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    requirements: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    learningOutcomes: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: [],
    },
    targetAudience: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: [],
    },
  },
  {
    timestamps: false,
    tableName: "coursesDetail",
  },
);
