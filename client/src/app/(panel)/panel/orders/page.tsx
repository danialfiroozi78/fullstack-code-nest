"use client";

import { PanelOrder, panelOrders, formatNumber } from "@/data/panel";
import { CheckCircle2, Clock3, ReceiptText, XCircle } from "lucide-react";

const statusConfig = {
  success: {
    label: "پرداخت موفق",
    icon: CheckCircle2,
    className: "bg-emerald-50 text-success",
  },
  pending: {
    label: "در انتظار پرداخت",
    icon: Clock3,
    className: "bg-amber-50 text-warning",
  },
  failed: {
    label: "پرداخت ناموفق",
    icon: XCircle,
    className: "bg-red-50 text-danger",
  },
};

function OrderStatus({ status }: { status: PanelOrder["status"] }) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold ${config.className}`}
    >
      <Icon size={15} />
      {config.label}
    </span>
  );
}

export default function OrdersPage() {
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

      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-2xl border border-border bg-white md:block">
        <table className="w-full text-right text-sm">
          <thead className="bg-zinc-50 text-xs text-text-secondary">
            <tr>
              <th className="px-5 py-5 font-semibold">شماره سفارش</th>
              <th className="px-5 py-5 font-semibold">دوره‌ها</th>
              <th className="px-5 py-5 font-semibold">مبلغ</th>
              <th className="px-5 py-5 font-semibold">وضعیت</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {panelOrders.map((order) => (
              <tr
                key={order.id}
                className="transition-colors hover:bg-zinc-50/60"
              >
                <td className="px-5 py-6">
                  <p dir="ltr" className="w-fit font-bold text-text-primary">
                    {order.id}
                  </p>

                  <p className="mt-2 text-xs text-text-muted">{order.date}</p>
                </td>

                <td className="max-w-56 px-5 py-6">
                  <div className="space-y-1">
                    {order.courses.map((course) => (
                      <p
                        key={course}
                        className="text-xs leading-6 text-text-secondary"
                      >
                        {course}
                      </p>
                    ))}
                  </div>
                </td>

                <td className="px-5 py-6 font-bold whitespace-nowrap">
                  {formatNumber(order.amount)}
                  <span className="mr-1 text-xs font-normal">تومان</span>
                </td>

                <td className="px-5 py-6">
                  <OrderStatus status={order.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="space-y-4 md:hidden">
        {panelOrders.map((order) => (
          <article
            key={order.id}
            className="rounded-2xl border border-border bg-white p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p dir="ltr" className="font-bold">
                  {order.id}
                </p>

                <p className="mt-2 text-xs text-text-muted">{order.date}</p>
              </div>

              <OrderStatus status={order.status} />
            </div>

            <div className="my-5 h-px bg-border" />

            <div className="space-y-2">
              {order.courses.map((course) => (
                <p key={course} className="text-sm text-text-secondary">
                  {course}
                </p>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs text-text-muted">مبلغ سفارش</span>

              <span className="font-extrabold text-primary">
                {formatNumber(order.amount)} تومان
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
