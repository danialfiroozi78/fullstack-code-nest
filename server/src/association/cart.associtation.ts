import { CartModel } from "../module/cart/cart.model";
import { CartItemModel } from "../module/cartItem/cartItem.model";
import { CourseModel } from "../module/course/course.model";

CartModel.hasMany(CartItemModel, {
  foreignKey: "cartId",
  as: "items",
});

CartItemModel.belongsTo(CartModel, {
  foreignKey: "cartId",
  as: "cart",
});

CourseModel.hasMany(CartItemModel, {
  foreignKey: "courseId",
  as: "cartItems",
});

CartItemModel.belongsTo(CourseModel, {
  foreignKey: "courseId",
  as: "course",
});
