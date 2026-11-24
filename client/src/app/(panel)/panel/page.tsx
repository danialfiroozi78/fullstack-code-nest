"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Check,
  CircleAlert,
  Clock3,
  ReceiptText,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  SquarePen,
  TrendingUp,
  UserRound,
} from "lucide-react";
import useDashboard from "@/hooks/useDashboard";
import { Button } from "@/components/common/Button";
import DashboardSkeleton from "@/components/panel/loading/DashboardSkeleton";

export default function PanelDashboardPage() {
  const {
    dashboardData,
    stats,
    fieldLabels,
    percentage,
    isCompleted,
    profileFields,
    completedFields,
    totalFields,
    orderStatuses,
    recentOrders,
    dashboardLoading,
  } = useDashboard();

  if (dashboardLoading) return <DashboardSkeleton />;

  return (
    <div className="space-y-7">
      {/* Welcome */}
      <section className="relative overflow-hidden rounded-3xl bg-footer p-7 text-white sm:p-10">
        <div className="pointer-events-none absolute -top-28 -left-20 size-80 rounded-full bg-primary/25 blur-3xl" />

        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-rose-200">
            <Sparkles size={16} />
            داشبورد دانشجویی
          </span>

          <h1 className="mt-6 text-2xl font-extrabold sm:text-3xl">
            سلام {dashboardData?.data?.user?.firstName} عزیز! 👋
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-8 text-zinc-300">
            به CodeNest خوش اومدی. مسیر یادگیریت رو از همین‌جا ادامه بده و هر
            روز یک قدم به هدفت نزدیک‌تر شو.
          </p>

          <Link
            href="/panel/courses"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
          >
            مشاهده دوره‌های من
            <ArrowLeft size={18} />
          </Link>
        </div>
      </section>

      {/* Statistics */}
      <section className="grid gap-4 sm:grid-cols-3">
        {stats.map(({ label, value, icon: Icon, description }) => (
          <div
            key={label}
            className="rounded-2xl border border-border bg-white p-5 sm:p-6"
          >
            <div className="flex items-start justify-between">
              <div className="flex size-12 items-center justify-center rounded-xl bg-box text-primary">
                <Icon size={23} />
              </div>

              <TrendingUp size={18} className="text-text-muted" />
            </div>

            <p className="mt-5 text-3xl font-black text-text-primary">
              {value?.toLocaleString()}
            </p>

            <h2 className="mt-2 text-sm font-bold">{label}</h2>

            <p className="mt-2 text-xs text-text-muted">{description}</p>
          </div>
        ))}
      </section>

      {/* Current Courses */}
      <section>
        <div className="grid gap-5 md:grid-cols-2 mt-6">
          <div className="rounded-xl p-5 bg-white border border-border">
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <UserRound className="size-6 text-primary" />
              </div>

              <div>
                <h2 className="mb-1 text-text-primary font-bold text-lg">
                  وضعیت پروفایل
                </h2>

                <p className="text-xs text-text-secondary">
                  {percentage === 100
                    ? "اطلاعات حساب کاربری شما کامل است."
                    : "اطلاعات حساب کاربری خود را تکمیل کنید."}
                </p>
              </div>
            </div>

            {/* Progress */}
            <div className="rounded-xl bg-gray-50 p-4 mb-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-text-primary">
                  میزان تکمیل پروفایل
                </span>

                <span className="text-primary font-bold text-xl">
                  {percentage.toLocaleString("fa-IR")}٪
                </span>
              </div>

              <div
                role="progressbar"
                aria-label="میزان تکمیل پروفایل"
                aria-valuenow={percentage}
                aria-valuemin={0}
                aria-valuemax={100}
                className="h-2 w-full bg-gray-200 rounded-full overflow-hidden"
              >
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <p className="mt-3 text-xs text-text-secondary">
                {completedFields.toLocaleString("fa-IR")} مورد از{" "}
                {totalFields.toLocaleString("fa-IR")} مورد تکمیل شده است.
              </p>
            </div>

            {/* Profile Fields */}
            <div className="divide-y divide-border">
              {profileFields.map(([key, value]) => {
                const completed = isCompleted(value);

                return (
                  <div
                    key={key}
                    className="flex items-center justify-between gap-3 py-3"
                  >
                    <div className="flex items-center gap-3 shrink-0">
                      <div
                        className={`size-8 rounded-lg flex items-center justify-center ${
                          completed
                            ? "bg-success/10 text-success"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {completed ? (
                          <Check className="size-4" />
                        ) : (
                          <CircleAlert className="size-4" />
                        )}
                      </div>

                      <span className="text-sm text-text-secondary">
                        {fieldLabels[key] ?? key}
                      </span>
                    </div>

                    <span
                      className={`text-sm truncate ${
                        completed
                          ? "text-text-primary font-medium"
                          : "text-gray-400 text-xs"
                      }`}
                    >
                      {completed ? String(value) : "تکمیل نشده"}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Edit Profile */}
            <Link
              href="/panel"
              className="mt-5 flex items-center justify-center gap-2 w-full rounded-xl bg-primary hover:bg-primary/90 transition-colors py-3 text-white text-sm font-semibold"
            >
              <SquarePen className="size-4" />

              {percentage === 100
                ? "ویرایش اطلاعات پروفایل"
                : "تکمیل اطلاعات پروفایل"}

              <ArrowLeft className="size-4" />
            </Link>
          </div>
          <div className="rounded-xl p-5 bg-white border border-border flex flex-col justify-between">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <ReceiptText className="size-6 text-primary" />
                </div>

                <div>
                  <h2 className="mb-1 text-text-primary font-bold text-lg">
                    آخرین سفارش‌ها
                  </h2>

                  <p className="text-xs text-text-secondary">
                    مشاهده و پیگیری خریدهای اخیر شما
                  </p>
                </div>
              </div>

              {/* Orders */}
              <div className="flex flex-col gap-3">
                {recentOrders.length > 0 ? (
                  recentOrders.slice(0, 3).map((order) => {
                    const status = orderStatuses[order.status] ?? {
                      label: "نامشخص",
                      className: "bg-gray-100 text-gray-500",
                    };

                    return (
                      <div
                        key={order.id}
                        className="rounded-xl border border-border p-3 hover:border-primary/30 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-3">
                            <div className="size-10 shrink-0 rounded-lg bg-gray-100 flex items-center justify-center">
                              <ShoppingBag className="size-5 text-text-secondary" />
                            </div>

                            <div>
                              <h3 className="text-sm font-bold text-text-primary">
                                سفارش #{order.id}
                              </h3>

                              <span className="text-xs text-text-secondary">
                                {order.createdAt}
                              </span>
                            </div>
                          </div>

                          <span
                            className={`text-[10px] font-medium px-2.5 py-1.5 rounded-md whitespace-nowrap ${status.className}`}
                          >
                            {status.label}
                          </span>
                        </div>

                        <div className="flex items-center justify-between border-t border-border mt-3 pt-3">
                          <div className="flex items-center gap-1">
                            <span className="text-base font-bold text-text-primary">
                              {Number(order.totalAmount).toLocaleString(
                                "fa-IR",
                              )}
                            </span>

                            <span className="text-[10px] text-text-secondary">
                              تومان
                            </span>
                          </div>

                          <Link href={`/panel/orders`}>
                            <Button fullWidth variant="ghost" size="sm">
                              جزئیات سفارش
                              <ArrowLeft className="size-3.5" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  /* Empty State */
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="size-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-4">
                      <ShoppingCart className="size-7 text-primary" />
                    </div>

                    <h3 className="text-sm font-bold text-text-primary mb-2">
                      هنوز سفارشی ثبت نکرده‌اید
                    </h3>

                    <p className="text-xs text-text-secondary mb-4">
                      اولین دوره آموزشی خود را از کدنست تهیه کنید.
                    </p>

                    <Link href="/courses">
                      <Button fullWidth variant="outline">
                        مشاهده دوره‌ها
                        <ArrowLeft className="size-4" />
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            {recentOrders.length > 0 && (
              <Link href="/panel/orders" className="mt-5 block">
                <Button fullWidth variant="outline">
                  مشاهده همه سفارش‌ها
                  <ArrowLeft className="size-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Motivational Section */}
      <section className="flex flex-col gap-5 rounded-2xl border border-primary/10 bg-box p-6 sm:flex-row sm:items-center">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white text-primary">
          <Clock3 size={27} />
        </div>

        <div className="flex-1">
          <h3 className="font-extrabold text-text-primary">
            استمرار، کلید موفقیت توئه!
          </h3>

          <p className="mt-2 text-sm leading-8 text-text-secondary">
            حتی با روزی ۳۰ دقیقه تمرین می‌تونی پیشرفت قابل توجهی داشته باشی.
          </p>
        </div>

        <Link
          href="/roadmaps"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-primary"
        >
          مسیرهای یادگیری
          <ArrowLeft size={17} />
        </Link>
      </section>
    </div>
  );
}
