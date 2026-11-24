"use client";

import { BookOpen, CircleCheck, ReceiptText } from "lucide-react";
import useMyOrders from "@/hooks/useMyOrders";
import MyOrdersSkeleton from "@/components/panel/loading/MyOrdersSkeleton";

export default function OrdersPage() {
  const { data, isLoading } = useMyOrders();

  if (isLoading) return <MyOrdersSkeleton count={6} />;

  return (
    <div>
      <div className="mb-8">
        <span className="text-xs font-bold text-primary">
          تاریخچه تراکنش‌ها
        </span>

        <h1 className="mt-2 flex items-center gap-3 text-2xl font-extrabold">
          <ReceiptText size={28} className="text-primary" />
          سفارش‌های من
        </h1>

        <p className="mt-4 text-sm leading-8 text-text-secondary">
          لیست سفارش‌ها و وضعیت پرداخت دوره‌های آموزشی رو اینجا مشاهده کن.
        </p>
      </div>

      <div className="w-full min-w-0 md:overflow-hidden md:rounded-2xl md:border md:border-border md:bg-white">
        <table className="block w-full text-right text-sm md:table">
          <thead className="hidden bg-zinc-50 text-xs text-text-secondary md:table-header-group">
            <tr>
              <th className="px-5 py-5 font-semibold">شماره سفارش</th>

              <th className="px-5 py-5 font-semibold">دوره‌ها</th>

              <th className="px-5 py-5 font-semibold">مبلغ سفارش</th>

              <th className="px-5 py-5 font-semibold">وضعیت</th>
            </tr>
          </thead>

          <tbody className="flex flex-col gap-4 md:table-row-group md:divide-y md:divide-border">
            {data?.data?.map((order) => (
              <tr
                key={order.id}
                className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] rounded-2xl border border-border bg-white p-4 transition-colors md:table-row md:rounded-none md:border-0 md:p-0 md:hover:bg-zinc-50/60"
              >
                <td className="col-start-1 row-start-1 min-w-0 md:px-5 md:py-6">
                  <div className="flex items-center gap-2">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-box text-primary">
                      <ReceiptText size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-extrabold text-text-primary sm:text-sm">
                        <span className="md:hidden">سفارش </span>#{order.id}
                      </p>

                      <p className="mt-1 text-[11px] text-text-muted">
                        {order.createdAt}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="col-span-2 row-start-2 mt-4 min-w-0 border-t border-border pt-4 md:mt-0 md:max-w-80 md:border-0 md:px-5 md:py-6">
                  <div className="mb-3 flex items-center justify-between md:hidden">
                    <span className="text-xs font-semibold text-text-muted">
                      دوره‌های خریداری شده
                    </span>

                    <span className="rounded-md bg-box px-2 py-1 text-[10px] font-bold text-primary">
                      {order.items.length} دوره
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {order.items.map((item) => (
                      <li
                        key={item.id}
                        className="flex min-w-0 items-start gap-2.5"
                      >
                        <BookOpen
                          size={15}
                          className="mt-1 shrink-0 text-primary"
                        />

                        <span className="min-w-0 wrap-break-word text-xs leading-6 text-text-secondary">
                          {item.course.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </td>

                <td className="col-span-2 row-start-3 mt-4 flex items-center justify-between gap-2 border-t border-border pt-4 md:table-cell md:mt-0 md:border-0 md:px-5 md:py-6">
                  <span className="text-xs font-medium text-text-muted md:hidden">
                    مبلغ سفارش
                  </span>

                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <span className="text-sm font-extrabold text-text-primary">
                      {Number(order.totalAmount).toLocaleString("fa-IR")}
                    </span>

                    <span className="text-[11px] text-text-muted">تومان</span>
                  </div>
                </td>

                <td className="col-start-2 row-start-1 self-center md:px-5 md:py-6">
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-success/10 px-2.5 py-2 text-[10px] font-bold text-success">
                    <CircleCheck size={14} className="shrink-0" />
                    پرداخت شده
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
