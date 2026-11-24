import { CourseModel } from "../module/course/course.model";
import { CourseDetailModel } from "../module/courseDetail/courseDetail.model";
import { CourseSectionModel } from "../module/courseSection/courseSection.model";
import { CourseLessonModel } from "../module/courseLesson/courseLesson.model";
import { InstructorModel } from "../module/instructor/instructor.model";
import { CategoryModel } from "../module/category/category.model";

CategoryModel.hasMany(CourseModel, {
  foreignKey: "categoryId",
  as: "courses",
});

CourseModel.belongsTo(CategoryModel, {
  foreignKey: "categoryId",
  as: "category",
});

InstructorModel.hasMany(CourseModel, {
  foreignKey: "instructorId",
  as: "courses",
});

CourseModel.belongsTo(InstructorModel, {
  foreignKey: "instructorId",
  as: "instructor",
});

CourseModel.hasOne(CourseDetailModel, {
  foreignKey: "courseId",
  as: "details",
});

CourseDetailModel.belongsTo(CourseModel, {
  foreignKey: "courseId",
  as: "course",
});

// Course -> Sections
CourseModel.hasMany(CourseSectionModel, {
  foreignKey: "courseId",
  as: "sections",
});

CourseSectionModel.belongsTo(CourseModel, {
  foreignKey: "courseId",
  as: "course",
});

// Section -> Lessons
CourseSectionModel.hasMany(CourseLessonModel, {
  foreignKey: "sectionId",
  as: "lessons",
});

CourseLessonModel.belongsTo(CourseSectionModel, {
  foreignKey: "sectionId",
  as: "section",
});
