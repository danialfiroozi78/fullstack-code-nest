"use client";

import {
  BookOpen,
  Clock3,
  Code2,
  GraduationCap,
  PlayCircle,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/common/Button";
import { CourseDetailsResType } from "@/types/response.type";
import { useAddCartItemMutation } from "@/api/mutation/cart.mutation";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useGetCartQuery } from "@/api/query/cart.query";

export default function CoursePreview({
  courseDetails,
  isAuthorized,
}: {
  courseDetails: CourseDetailsResType;
  isAuthorized: boolean;
}) {
  const calculateFinalPrice = (
    price: number,
    discount: number,
    activeDiscount: boolean,
  ): number => {
    if (!activeDiscount) return price;

    return Math.round(price * (1 - discount / 100));
  };

  const [addCartItemMutation, { isLoading }] = useAddCartItemMutation();

  const { data: cartData } = useGetCartQuery(null, {
    skip: !isAuthorized,
  });

  const hasThisCourse = !!cartData?.data?.cart?.items?.find(
    (item) => item.id === courseDetails.id,
  );

  const { push } = useRouter();

  return (
    <aside className="min-w-0 lg:sticky lg:top-28">
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-xl shadow-zinc-900/5">
        <div className="relative flex h-52 items-center justify-center overflow-hidden bg-footer">
          <div className="absolute size-52 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative flex size-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-rose-300">
            <PlayCircle size={48} strokeWidth={1.5} />
          </div>

          <span className="absolute bottom-4 text-xs font-semibold text-white/80">
            پیش‌ نمایش دوره
          </span>
        </div>

        <div className="p-6">
          {courseDetails.price === 0 ? (
            <p className="text-2xl font-extrabold text-success">رایگان</p>
          ) : (
            <div>
              {courseDetails.price === 0 ? (
                <p className="text-lg font-extrabold text-success">رایگان</p>
              ) : (
                <div className="flex justify-between items-center">
                  <p className="text-3xl font-extrabold text-primary">
                    {courseDetails.activeDiscount
                      ? calculateFinalPrice(
                          courseDetails.price,
                          courseDetails.discount,
                          courseDetails.activeDiscount,
                        ).toLocaleString()
                      : courseDetails.price.toLocaleString()}
                    <span className="mr-1 text-sm font-medium">تومان</span>
                  </p>
                  {courseDetails.activeDiscount &&
                    courseDetails.discount > 0 && (
                      <del className="text-sm">
                        {courseDetails.price.toLocaleString("fa-IR")} تومان
                      </del>
                    )}
                </div>
              )}
            </div>
          )}

          <div className="mt-6">
            {hasThisCourse ? (
              <div className="text-center text-sm p-3 mb-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 font-medium flex items-center gap-2 justify-center">
                <ShoppingCart size={19} />
                این دوره در سبد خرید شما موجود است
              </div>
            ) : (
              <Button
                fullWidth
                loading={isLoading}
                onClick={() =>
                  addCartItemMutation({ courseId: courseDetails.id }).then(
                    ({ data }) => {
                      if (data?.success) {
                        toast.success(data?.message);
                        push("/cart");
                      }
                    },
                  )
                }
              >
                <ShoppingCart size={19} />
                {isAuthorized ? "ثبت نام در دوره" : "ورود به حساب کاربری"}
              </Button>
            )}
          </div>
          {!isAuthorized && (
            <p className="text-center mt-2 text-sm">
              برای ثبت نام در دوره، ابتدا وارد حساب کاربری خود شوید.
            </p>
          )}
          <div className="my-6 h-px bg-border" />
          <h3 className="mb-5 text-sm font-extrabold">این دوره شامل:</h3>
          <div className="space-y-5 text-sm text-text-secondary">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Clock3 size={18} className="text-primary" />
                مدت آموزش
              </span>
              <span className="font-bold text-text-primary">
                {courseDetails.duration.toLocaleString()} دقیقه
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <BookOpen size={18} className="text-primary" />
                تعداد جلسات
              </span>
              <span className="font-bold text-text-primary">
                {courseDetails.lessons.toLocaleString("fa-IR")}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <GraduationCap size={18} className="text-primary" />
                سطح دوره
              </span>
              <span className="font-bold text-text-primary">
                {courseDetails.level}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Code2 size={18} className="text-primary" />
                دسته‌بندی
              </span>
              <span className="font-bold text-text-primary">
                {courseDetails.category.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
