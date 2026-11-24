import { sequelize } from "../../config/db.config";
import { DataTypes, sql } from "@sequelize/core";
import { CategoryModel } from "../category/category.model";
import { InstructorModel } from "../instructor/instructor.model";

export const CourseModel = sequelize.define(
  "CourseModel",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: CategoryModel,
        key: "id",
      },
    },
    instructorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: InstructorModel,
        key: "id",
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    activeDiscount: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    lessons: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    rating: {
      type: DataTypes.DECIMAL(3, 2),
      allowNull: false,
      defaultValue: 0,
    },
    students: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    level: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    thumbnailImage: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    publishedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sql.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    tableName: "course",
    timestamps: false,
  },
);
