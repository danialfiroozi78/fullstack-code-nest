import StepsSection from "@/components/home/StepsSection";
import CTASection from "@/components/home/CTASection";
import React from "react";
import {
  FolderCode,
  GraduationCap,
  Headphones,
  InfinityIcon,
  Route,
  ShieldCheck,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "آموزش پروژه‌محور",
      description:
        "به جای حفظ کردن مفاهیم، با ساخت پروژه‌های واقعی مهارت کسب کن.",
      icon: FolderCode,
    },
    {
      title: "مسیر یادگیری مشخص",
      description: "بدون سردرگمی بدون که از کجا شروع کنی و قدم بعدیت چیه.",
      icon: Route,
    },
    {
      title: "دسترسی به دوره‌ها",
      description: "دوره‌های خریداری‌شده رو از کتابخانه آموزشی خودت دنبال کن.",
      icon: InfinityIcon,
    },
    {
      title: "راهنمایی و پشتیبانی",
      description: "برای انتخاب مسیر آموزشی مناسب با ما در ارتباط باش.",
      icon: Headphones,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-footer py-16 text-white lg:py-24">
      <div className="pointer-events-none absolute -left-40 -top-40 size-96 rounded-full bg-primary/15 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-rose-300">
            <ShieldCheck size={16} />
            تجربه متفاوت یادگیری
          </span>

          <h2 className="mt-5 text-2xl font-extrabold sm:text-3xl lg:text-4xl">
            چرا
            <span className="text-rose-400"> CodeNest </span>
            رو انتخاب کنی؟
          </h2>

          <p className="mt-5 text-sm leading-8 text-zinc-400">
            ما تلاش می‌کنیم یادگیری برنامه‌نویسی رو از یک مسیر پیچیده به
            تجربه‌ای ساده‌تر، کاربردی‌تر و لذت‌بخش‌تر تبدیل کنیم.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/10 bg-white/3 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/5"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-rose-400">
                <feature.icon size={25} />
              </div>

              <h3 className="mt-5 text-base font-bold">{feature.title}</h3>

              <p className="mt-3 text-xs leading-7 text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
