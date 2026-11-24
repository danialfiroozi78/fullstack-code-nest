import { CartModel } from "./cart.model";
import { CartItemModel } from "../cartItem/cartItem.model";
import { CourseModel } from "../course/course.model";
import { InstructorModel } from "../instructor/instructor.model";
import { CategoryModel } from "../category/category.model";
import createHttpError from "http-errors";
import { async } from "rxjs";

type CartWithItems = {
  id: number;
  items: {
    course: {
      price: number;
      discount: number;
      activeDiscount: boolean;
    };
  }[];
};

export const getCartService = async (userId: number) => {
  const [cart] = await CartModel.findOrCreate({
    where: { userId },
    attributes: ["id"],
    include: [
      {
        model: CartItemModel,
        as: "items",
        attributes: ["id"],
        include: [
          {
            model: CourseModel,
            as: "course",
            attributes: [
              "id",
              "slug",
              "title",
              "price",
              "discount",
              "activeDiscount",
              "thumbnailImage",
            ],
            include: [
              {
                model: InstructorModel,
                as: "instructor",
                attributes: ["id", "name"],
              },
              {
                model: CategoryModel,
                as: "category",
                attributes: ["id", "name"],
              },
            ],
          },
        ],
      },
    ],
  });

  const plainCart = cart?.get({ plain: true }) as CartWithItems;

  const summary = plainCart?.items?.reduce(
    (acc, item) => {
      const { price, discount, activeDiscount } = item.course;

      const discountAmount = activeDiscount
        ? Math.round((price * discount) / 100)
        : 0;

      acc.subtotal += price;
      acc.totalDiscount += discountAmount;
      acc.total += price - discountAmount;

      return acc;
    },
    {
      subtotal: 0,
      totalDiscount: 0,
      total: 0,
    },
  );

  return {
    id: plainCart.id,
    summary,
    items: plainCart.items.map((item: any) => ({
      ...item.course,
      cartItemId: item.id,
    })),
  };
};

export const addItemToCartService = async (
  userId: number,
  courseId: number,
) => {
  const course = await CourseModel.findByPk(courseId);

  if (!course) {
    throw createHttpError(404, "دوره مورد نظر یافت نشد");
  }

  const [cart] = await CartModel.findOrCreate({
    where: { userId },
    defaults: { userId },
  });

  const [item, created] = await CartItemModel.findOrCreate({
    where: {
      cartId: cart.id,
      courseId,
    },
    defaults: {
      cartId: cart.id,
      courseId,
    },
  });

  return {
    item,
    created,
    message: created
      ? "دوره با موفقیت به سبد خرید اضافه شد"
      : "این دوره قبلاً به سبد خرید اضافه شده است",
  };
};

export const removeItemFromCartItemService = async (
  courseId: number,
  userId: number,
) => {
  const item = await CartItemModel.findOne({
    where: { courseId },
    include: [
      {
        model: CartModel,
        as: "cart",
        where: { userId },
        required: true,
      },
    ],
  });

  if (!item) throw createHttpError(404, "دوره در سبد خرید شما یافت نشد");

  await item.destroy();

  return {
    message: "دوره با موفقیت از سبد خرید حذف شد",
  };
};
