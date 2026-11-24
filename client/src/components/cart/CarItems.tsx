"use client";

import { Button } from "@/components/common/Button";
import { ArrowLeft, CheckCircle2, ShoppingBag, Trash2 } from "lucide-react";
import Link from "next/link";
import { useDeleteCartItemMutation } from "@/api/mutation/cart.mutation";
import { useState } from "react";
import { CartResType } from "@/types/response.type";
import OrderSummary from "@/components/cart/OrderSummary";
import Image from "next/image";
import toast from "react-hot-toast";
import Modal from "@/components/common/Modal";

export default function CarItems({
  data,
  isAuthorized,
}: {
  data: CartResType | undefined;
  isAuthorized: boolean;
}) {
  const [deleteCartItemMutation, { isLoading: deleteCartItemLoading }] =
    useDeleteCartItemMutation();
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState<CartResType["cart"]["items"][0] | null>(
    null,
  );

  const calculateFinalPrice = (
    price: number,
    discount: number,
    activeDiscount: boolean,
  ): number => {
    if (!activeDiscount) return price;

    return Math.round(price * (1 - discount / 100));
  };

  return (
    <section>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="حذف دوره از سبد خرید"
        description={`آیا مطمئن هستید که می‌خواهید دوره «${course?.title}» را از سبد خرید حذف کنید؟`}
        centered
        variant="danger"
        size="md"
        footer={
          <>
            <Button
              disabled={deleteCartItemLoading}
              onClick={() => setOpen(false)}
            >
              انصراف
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                deleteCartItemMutation({
                  courseId: Number(course?.id),
                }).then(({ data }) => {
                  toast.success(data?.message as string);
                  setOpen(false);
                })
              }
              loading={deleteCartItemLoading}
            >
              بله، حذف شود
            </Button>
          </>
        }
      />

      {!data?.cart?.items.length ? (
        <div className="flex flex-col items-center rounded-3xl border border-border bg-white px-5 py-20 text-center">
          <div className="mb-7 flex size-24 items-center justify-center rounded-3xl bg-box text-primary">
            <ShoppingBag size={43} strokeWidth={1.5} />
          </div>

          {isAuthorized ? (
            <>
              {" "}
              <h2 className="text-2xl font-extrabold">سبد خریدت خالیه!</h2>
              <p className="mt-4 max-w-md text-sm leading-8 text-text-secondary">
                هنوز دوره‌ای به سبد خریدت اضافه نکردی. می‌تونی دوره‌های آموزشی
                رو بررسی کنی و یادگیری رو از همین امروز شروع کنی.
              </p>
              <Link
                href="/courses"
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-7 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
              >
                مشاهده دوره‌های آموزشی
                <ArrowLeft size={18} />
              </Link>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-extrabold">
                هنوز وارد حساب کاربریت نشدی!
              </h2>
              <p className="mt-4 mb-8 max-w-md text-sm leading-8 text-text-secondary">
                برای اینکه بتونی دوره‌های موردعلاقه‌ات رو به سبد خرید اضافه کنی
                و یادگیری رو شروع کنی، اول باید وارد حساب کاربریت بشی.
              </p>
              <Link href="/auth">
                <Button className="px-5">
                  ورود | ثبت نام
                  <ArrowLeft size={18} />
                </Button>
              </Link>
            </>
          )}
        </div>
      ) : (
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_370px]">
          {/* Course list */}
          <div className="space-y-5 order-2 md:order-1">
            <div className="flex items-center justify-between rounded-2xl border border-border bg-white px-6 py-5">
              <h1 className="font-extrabold text-2xl"> سبد خرید شما </h1>

              <span className="rounded-full bg-box px-3 py-1 text-sm font-bold text-primary">
                {data?.cart?.items?.length} دوره انتخاب شده
              </span>
            </div>

            {data?.cart?.items?.map((item) => {
              return (
                <article
                  key={item.id}
                  className="rounded-2xl border border-border bg-white p-5 transition-colors hover:border-primary/25 sm:p-6"
                >
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <Link
                      href={`/courses/${item.slug}`}
                      className="flex h-40 w-full shrink-0 items-center justify-center rounded-2xl sm:h-36 sm:w-56 overflow-hidden"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_SERVER_URL}${item?.thumbnailImage}`}
                        alt={item?.title}
                        width={1600}
                        height={900}
                        unoptimized
                        className="h-full w-full hover:scale-110 duration-300"
                      />
                    </Link>

                    <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
                      <div>
                        <span className="mb-2 inline-flex rounded-lg bg-box px-2.5 py-1 text-xs font-semibold text-primary">
                          {item.category.name}
                        </span>

                        <Link
                          href={`/courses/${item.slug}`}
                          className="block text-base leading-8 font-bold text-text-primary transition-colors hover:text-primary"
                        >
                          {item.title}
                        </Link>

                        <p className="mt-2 text-xs text-text-secondary">
                          مدرس: {item.instructor.name}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-end justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <p className="text-2xl font-extrabold text-primary">
                            {item.activeDiscount
                              ? calculateFinalPrice(
                                  item.price,
                                  item.discount,
                                  item.activeDiscount,
                                ).toLocaleString()
                              : item.price.toLocaleString()}
                            <span className="mr-1 text-xs font-medium">
                              تومان
                            </span>
                          </p>

                          {item.activeDiscount && item.discount > 0 && (
                            <del className="text-sm text-text-secondary">
                              {item.price.toLocaleString()} تومان
                            </del>
                          )}
                        </div>

                        <Button
                          variant="outline"
                          onClick={() => {
                            setOpen(true);
                            setCourse(item);
                          }}
                        >
                          <Trash2 size={16} />
                          حذف دوره
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

            <div className="flex items-start gap-3 rounded-2xl border border-success/15 bg-emerald-50 p-5">
              <CheckCircle2 size={22} className="shrink-0 text-success" />
              <div>
                <h3 className="text-sm font-bold text-success">
                  دسترسی آنلاین به دوره‌ها
                </h3>
                <p className="mt-2 text-xs leading-7 text-text-secondary">
                  بعد از تکمیل موفق خرید، دوره‌های خریداری‌شده به حساب کاربری
                  شما اضافه خواهند شد.
                </p>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <OrderSummary data={data} />
        </div>
      )}
    </section>
  );
}
