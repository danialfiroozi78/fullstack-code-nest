import { sequelize } from "../../config/db.config";
import { DataTypes } from "@sequelize/core";
import { CourseSectionModel } from "../courseSection/courseSection.model";

export const CourseLessonModel = sequelize.define(
  "CourseLessonModel",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sectionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: CourseSectionModel,
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    videoUrl: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    isFree: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "courseLesson",
    timestamps: false,
  },
);
