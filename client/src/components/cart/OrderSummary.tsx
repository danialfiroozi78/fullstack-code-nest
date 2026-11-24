"use client";

import { CartResType } from "@/types/response.type";
import { Button } from "@/components/common/Button";
import { ShoppingBag } from "lucide-react";
import { useCheckoutMutation } from "@/api/mutation/order.mutation";
import Modal from "@/components/common/Modal";
import { useState } from "react";
import Link from "next/link";

export default function OrderSummary({
  data,
}: {
  data: CartResType | undefined;
}) {
  const [checkoutMutation, { isLoading }] = useCheckoutMutation();

  const [open, setOpen] = useState<boolean>(false);

  return (
    <aside className="rounded-2xl border border-border bg-white p-6 lg:sticky lg:top-28 order-1 md:order-2">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        variant="success"
        centered
        size="sm"
        title="سفارش شما با موفقیت ثبت شد!"
        description="دوره‌های خریداری‌شده به حساب کاربری شما اضافه شدند و از همین حالا می‌توانید یادگیری را شروع کنید."
        footer={
          <Link className="w-full" href="/profile/my-courses">
            <Button fullWidth>مشاهده دوره‌های من</Button>
          </Link>
        }
      />

      <h2 className="text-lg font-extrabold">خلاصه سفارش</h2>

      <div className="mt-7 space-y-5">
        <div className="flex items-center justify-between gap-3 text-sm">
          <span className="text-text-secondary">قیمت اصلی دوره‌ها:</span>
          <span className="font-semibold text-lg">
            {data?.cart?.summary?.subtotal.toLocaleString()}
            <span className="mr-1 text-xs font-normal">تومان</span>
          </span>
        </div>

        <div className="flex items-center justify-between gap-3 text-sm">
          <span className="text-text-secondary">تخفیف دوره‌ها:</span>
          {data?.cart?.summary?.totalDiscount == 0 ? (
            <span>بدون تخفیف</span>
          ) : (
            <span className="font-semibold text-success text-lg">
              {data?.cart?.summary?.totalDiscount.toLocaleString()}-
              <span className="mr-1 text-xs text-success font-normal">
                تومان
              </span>
            </span>
          )}
        </div>
      </div>

      <div className="my-7 h-px bg-border" />

      <div className="flex items-center justify-between gap-3">
        <span className="font-bold">مبلغ قابل پرداخت:</span>

        <div className="text-left">
          <strong className="text-2xl text-primary font-extrabold">
            {data?.cart?.summary?.total.toLocaleString()}
          </strong>
          <span className="mr-1 text-xs text-primary">تومان</span>
        </div>
      </div>

      <Button
        className="mt-7"
        fullWidth
        loading={isLoading}
        onClick={() =>
          checkoutMutation(null).then(({ data }) => {
            if (data?.success) {
              setOpen(true);
            }
          })
        }
      >
        <ShoppingBag size={18} />
        ثبت سفارش
      </Button>
    </aside>
  );
}
