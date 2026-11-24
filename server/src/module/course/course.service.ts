import { CourseModel } from "./course.model";
import { CategoryModel } from "../category/category.model";
import { InstructorModel } from "../instructor/instructor.model";
import { Op, Order } from "@sequelize/core";
import { async } from "rxjs";
import { CourseDetailModel } from "../courseDetail/courseDetail.model";
import { CourseSectionModel } from "../courseSection/courseSection.model";
import { CourseLessonModel } from "../courseLesson/courseLesson.model";
import createHttpError from "http-errors";

export const getCourseService = async (
  categories: string[],
  search: string,
  sort: number,
) => {
  let order: Order = [["publishedAt", "DESC"]];

  switch (sort) {
    case 2: // popular
      order = [["students", "DESC"]];
      break;
    case 3: // cheap
      order = [["price", "ASC"]];
      break;
    case 4: // expensive
      order = [["price", "DESC"]];
      break;
  }

  const courses = await CourseModel.findAll({
    where: {
      ...(search && {
        title: {
          [Op.iLike]: `%${search}%`,
        },
      }),
    },
    attributes: {
      exclude: ["categoryId", "instructorId"],
    },
    include: [
      {
        model: CategoryModel,
        as: "category",
        where:
          categories.length > 0
            ? {
                slug: {
                  [Op.in]: categories,
                },
              }
            : undefined,
        required: true,
      },
      {
        model: InstructorModel,
        as: "instructor",
      },
    ],
    order,
  });

  return courses?.map((course) => {
    const coursesPlained = course.get({ plain: true });
    return {
      ...coursesPlained,
      publishedAt: new Intl.DateTimeFormat("fa-IR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date(coursesPlained.publishedAt)),
    };
  });
};

export const getCourseDetailsService = async (slug: string) => {
  const details = await CourseModel.findOne({
    where: {
      slug,
    },
    attributes: {
      exclude: ["categoryId", "instructorId"],
    },
    include: [
      { model: CourseDetailModel, as: "details" },
      {
        model: CategoryModel,
        as: "category",
      },
      {
        model: InstructorModel,
        as: "instructor",
      },
      {
        model: CourseSectionModel,
        as: "sections",
        attributes: { exclude: ["courseId"] },
        include: {
          model: CourseLessonModel,
          as: "lessons",
          attributes: {
            exclude: ["sectionId"],
          },
        },
      },
    ],
  });

  if (!details) throw createHttpError.NotFound("دوره مورد نظر یافت نشد!");

  return details;
};
