import { CategoryModel } from "./category.model";
import { col, fn } from "@sequelize/core";
import { CourseModel } from "../course/course.model";

export const getCategoriesService = async () => {
  return await CategoryModel.findAll({
    attributes: {
      include: [[fn("COUNT", col("courses.id")), "coursesCount"]],
    },
    include: [
      {
        model: CourseModel,
        as: "courses",
        attributes: [],
        required: false,
      },
    ],
    group: [col(`${CategoryModel.name}.id`)],
    order: [["id", "DESC"]],
  });
};
