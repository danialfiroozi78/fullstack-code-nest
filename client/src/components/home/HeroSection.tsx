import { ArrowLeft, ArrowUpLeft, CircleCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import HeroIllustration from "@/components/home/HeroIllustration";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-footer py-20 text-white lg:py-22  ">
      <div className="pointer-events-none absolute -top-40 -left-40 size-112.5 rounded-full bg-primary/20 blur-[110px]" />

      <div className="pointer-events-none absolute -bottom-52 right-0 size-112.5 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-6">
        <div className="min-w-0">
          <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-rose-200">
            <Sparkles size={16} />
            آکادمی تخصصی آموزش برنامه‌نویسی
          </span>

          <h1 className="text-4xl font-extrabold leading-[1.8] sm:text-5xl lg:text-[54px]">
            از اولین خط کد
            <br />
            تا ساختن
            <span className="text-rose-400"> آینده‌ات.</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-9 text-zinc-300 sm:text-base">
            برنامه‌نویسی رو اصولی، کاربردی و پروژه‌محور یاد بگیر. با دوره‌های
            تخصصی و مسیرهای یادگیری CodeNest، مهارت‌هات رو توسعه بده و برای ورود
            به دنیای حرفه‌ای برنامه‌نویسی آماده شو.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
            >
              مشاهده دوره‌های آموزشی
              <ArrowLeft size={18} />
            </Link>

            <Link
              href="/roadmaps"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              مسیرهای یادگیری
              <ArrowUpLeft size={18} />
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-zinc-400">
            {["آموزش پروژه‌محور", "یادگیری قدم‌به‌قدم", "مسیرهای تخصصی"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <CircleCheck size={16} className="text-rose-400" />
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        <HeroIllustration />
      </div>
    </section>
  );
}
