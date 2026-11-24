import { UserModel } from "../module/user/user.model";
import { UserCourseModel } from "../module/userCourse/userCourse.model";
import { CourseModel } from "../module/course/course.model";
import { OrderModel } from "../module/order/order.model";
import { OrderItemModel } from "../module/orderItem/orderItem.model";

UserModel.hasMany(UserCourseModel, {
  foreignKey: "userId",
  as: "enrollments",
});

UserCourseModel.belongsTo(UserModel, {
  foreignKey: "userId",
  as: "user",
});

CourseModel.hasMany(UserCourseModel, {
  foreignKey: "courseId",
  as: "enrollments",
});

UserCourseModel.belongsTo(CourseModel, {
  foreignKey: "courseId",
  as: "course",
});

OrderModel.hasMany(OrderItemModel, {
  foreignKey: "orderId",
  as: "items",
});

OrderItemModel.belongsTo(OrderModel, {
  foreignKey: "orderId",
  as: "order",
});

CourseModel.hasMany(OrderItemModel, {
  foreignKey: "courseId",
  as: "orderItems",
});

OrderItemModel.belongsTo(CourseModel, {
  foreignKey: "courseId",
  as: "course",
});
