import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  BookOpen,
  Clock3,
  Cloud,
  Code2,
  Compass,
  Layers3,
  Monitor,
  Route,
  Server,
  Sparkles,
  Target,
} from "lucide-react";
import { getRoadmaps } from "@/services/roadmap.service";

export const metadata: Metadata = {
  title: "مسیرهای یادگیری",
  description:
    "مسیرهای یادگیری برنامه‌نویسی CodeNest را بررسی کنید و مسیر مناسب خود را انتخاب کنید.",
};

const icons = {
  monitor: Monitor,
  server: Server,
  layers: Layers3,
  cloud: Cloud,
};

export default async function RoadmapsPage() {
  const roadmaps = await getRoadmaps();

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden bg-footer py-24 text-white lg:py-32">
        <div className="absolute -top-32 -left-32 size-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 right-0 size-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
          <div className="max-w-3xl">
            <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-rose-200">
              <Route size={17} />
              نقشه راه یادگیری برنامه‌نویسی
            </span>

            <h1 className="text-4xl leading-[1.7] font-extrabold sm:text-5xl lg:text-[54px]">
              مسیر برنامه‌نویسی
              <br />
              خودت رو
              <span className="text-rose-400"> پیدا کن.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-9 text-zinc-300 sm:text-base">
              نمی‌دونی از کجا شروع کنی یا بعد از یادگیری یک تکنولوژی باید سراغ
              چی بری؟ مسیرهای یادگیری CodeNest بهت کمک می‌کنن قدم‌به‌قدم پیش
              بری.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#roadmap-list"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
              >
                کشف مسیرهای یادگیری
                <ArrowLeft size={18} />
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                راهنمایی برای انتخاب مسیر
                <ArrowUpLeft size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-12 md:grid-cols-3 lg:px-6">
        {[
          {
            icon: Compass,
            title: "بدون سردرگمی",
            description: "بدون اینکه بین ده‌ها تکنولوژی گم بشی.",
          },
          {
            icon: Target,
            title: "هدفمند یاد بگیر",
            description: "هر مرحله، یک هدف و خروجی مشخص داره.",
          },
          {
            icon: Code2,
            title: "با پروژه تمرین کن",
            description: "یادگیری رو به مهارت عملی تبدیل کن.",
          },
        ].map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex items-start gap-4 rounded-2xl border border-border bg-white p-6"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-box text-primary">
              <Icon size={23} />
            </div>

            <div>
              <h2 className="font-bold">{title}</h2>
              <p className="mt-2 text-xs leading-7 text-text-secondary">
                {description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Roadmaps */}
      <section
        id="roadmap-list"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 lg:px-6"
      >
        <div className="mb-10">
          <span className="text-sm font-bold text-primary">
            مسیرهای پیشنهادی
          </span>
          <h2 className="mt-3 text-3xl font-extrabold">
            دوست داری تو چه حوزه‌ای متخصص بشی؟
          </h2>
          <p className="mt-4 text-sm leading-8 text-text-secondary">
            یکی از مسیرها رو انتخاب کن و مراحل یادگیریش رو ببین.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {roadmaps?.data?.map((roadmap) => {
            const Icon = icons[roadmap.icon as keyof typeof icons];

            return (
              <article
                key={roadmap.slug}
                className="group flex flex-col rounded-3xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-box text-primary">
                    <Icon size={28} />
                  </div>

                  <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs text-text-secondary">
                    {roadmap.level}
                  </span>
                </div>

                <p className="text-xs font-semibold text-primary">
                  {roadmap.subtitle}
                </p>

                <h3 className="mt-2 text-xl font-extrabold">{roadmap.title}</h3>

                <p className="mt-4 min-h-16 text-sm leading-8 text-text-secondary">
                  {roadmap.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {roadmap.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border bg-zinc-50 px-3 py-1.5 text-xs font-medium text-text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  <div className="flex items-center gap-5 border-t border-border pt-5 text-xs text-text-secondary">
                    <span className="flex items-center gap-2">
                      <BookOpen size={16} className="text-primary" />
                      {roadmap.stepsCount} مرحله
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock3 size={16} className="text-primary" />
                      {roadmap.duration}
                    </span>
                  </div>

                  <Link
                    href={`/roadmaps/${roadmap.slug}`}
                    className="mt-6 flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-white transition-colors hover:bg-primary-hover"
                  >
                    مشاهده نقشه راه
                    <ArrowLeft size={18} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-8 lg:px-6">
        <div className="rounded-3xl bg-box p-8 text-center sm:p-12">
          <Sparkles size={35} className="mx-auto text-primary" />

          <h2 className="mt-5 text-2xl font-extrabold">
            هنوز نمی‌دونی کدوم مسیر مناسبته؟
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-text-secondary">
            نگران نباش. می‌تونی مسیرها رو مقایسه کنی و با توجه به علاقه و هدفت
            تصمیم بگیری.
          </p>

          <Link
            href="/contact-us"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-primary-hover"
          >
            ارتباط با ما
            <ArrowLeft size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
