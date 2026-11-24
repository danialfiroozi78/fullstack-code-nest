"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CircleAlert,
  CircleCheck,
  Clock3,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import useDashboard from "@/hooks/useDashboard";

export default function PanelDashboardPage() {
  const { dashboardData, stats } = useDashboard();
  const fieldLabels: Record<string, string> = {
    firstName: "نام",
    lastName: "نام خانوادگی",
    phoneNumber: "شماره موبایل",
    userName: "نام کاربری",
    email: "آدرس ایمیل",
    birthday: "تاریخ تولد",
  };

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
          <div className="rounded-xl p-4 bg-white border border-border">
            <h2 className="mb-1 text-text-primary font-bold text-lg">
              وضعیت پروفایل
            </h2>
            <small className="text-text-secondary">
              اطلاعات حساب کاربری شما هنوز کامل نیست.
            </small>

            <div className="flex flex-col gap-3 mt-6">
              {Object.entries(dashboardData?.data?.user ?? []).map(
                ([key, value]) => (
                  <div className="flex items-center">
                    <div>
                      {value === null ? (
                        <CircleAlert className="size-4 text-white bg-gray-400 rounded-full" />
                      ) : (
                        <CircleCheck className="size-4 text-white bg-success rounded-full" />
                      )}
                    </div>
                    <span className="ml-1 mr-2">{fieldLabels[key]}:</span>
                    <span>{[value]}</span>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="rounded-xl p-4 bg-white border border-border">
            <h2 className="mb-1 text-text-primary font-bold text-lg">
              آخرین سفارشات
            </h2>
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
