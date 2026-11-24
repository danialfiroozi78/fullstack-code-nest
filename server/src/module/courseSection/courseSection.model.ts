import { sequelize } from "../../config/db.config";
import { DataTypes } from "@sequelize/core";
import { CourseModel } from "../course/course.model";

export const CourseSectionModel = sequelize.define(
  "CourseSectionModel",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: CourseModel,
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "courseSection",
  },
);
