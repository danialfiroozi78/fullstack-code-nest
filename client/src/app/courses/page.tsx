import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Code2,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import CoursesCatalog from "@/components/courses/CoursesCatalog";
import { Terminal, CheckCircle2, Braces, Layers3, Play } from "lucide-react";

type PageProps = {
  searchParams: Promise<{
    categories?: string;
    search?: string;
    sort?: string;
  }>;
};

export default async function CoursesPage({ searchParams }: PageProps) {
  return (
    <div className="overflow-hidden bg-body">
      {/* Hero */}
      <section
        dir="rtl"
        className="relative isolate overflow-hidden bg-footer py-16 text-white lg:py-24"
      >
        {/* Background effects */}
        <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 size-[450px] rounded-full bg-primary/15 blur-3xl" />

        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,.45) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2 lg:gap-20 lg:px-6">
          {/* Right: Content */}
          <div className="text-right">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-rose-200">
              <Sparkles size={17} />
              دوره‌های آموزشی CodeNest
            </span>

            <h1 className="mt-7 text-4xl leading-[1.6] font-extrabold sm:text-5xl">
              مهارت بعدیت رو
              <br />
              همین‌جا
              <span className="text-rose-400"> یاد بگیر.</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-9 text-zinc-300 sm:text-base">
              از اولین خط کد تا ساخت پروژه‌های حرفه‌ای، با دوره‌های آموزشی
              CodeNest مسیر یادگیریت رو هدفمند و قدم‌به‌قدم پیش ببر.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#courses-list"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
              >
                مشاهده دوره‌ها
                <ArrowLeft size={18} />
              </Link>

              <Link
                href="/roadmaps"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                مسیرهای یادگیری
              </Link>
            </div>
          </div>

          {/* Left: Decorative code editor */}
          <div className="relative hidden min-w-0 lg:block">
            {/* Glow */}
            <div className="pointer-events-none absolute inset-8 rounded-full bg-primary/20 blur-[90px]" />

            {/* Floating badge */}
            <div className="absolute -top-7 left-5 z-20 flex items-center gap-3 rounded-2xl border border-white/15 bg-[#29292e] px-4 py-3 shadow-2xl">
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/15">
                <CheckCircle2 className="text-emerald-400" size={21} />
              </div>
              <div>
                <p className="text-xs font-bold text-white">
                  یادگیری پروژه‌محور
                </p>
                <p className="mt-1 text-[11px] text-zinc-400">
                  از آموزش تا اجرای واقعی
                </p>
              </div>
            </div>

            {/* Editor window */}
            <div
              dir="ltr"
              className="relative mx-auto w-full max-w-[520px] -rotate-2 overflow-hidden rounded-2xl border border-white/15 bg-[#19191f] shadow-[0_35px_100px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:rotate-0"
            >
              {/* Editor header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-[#24242b] px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-[#ff5f57]" />
                  <span className="size-3 rounded-full bg-[#febc2e]" />
                  <span className="size-3 rounded-full bg-[#28c840]" />
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Code2 size={15} className="text-rose-400" />
                  learning.ts
                </div>

                <Terminal size={16} className="text-zinc-500" />
              </div>

              {/* Editor body */}
              <div className="space-y-3 px-5 py-7 font-mono text-[13px] leading-7">
                <div className="flex gap-5">
                  <span className="w-4 text-right text-zinc-600">1</span>
                  <span>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-sky-300">developer</span>{" "}
                    <span className="text-white">= {"{"}</span>
                  </span>
                </div>

                <div className="flex gap-5">
                  <span className="w-4 text-right text-zinc-600">2</span>
                  <span className="pl-5">
                    <span className="text-rose-400">name</span>:{" "}
                    <span className="text-emerald-300">
                      &quot;Future Developer&quot;
                    </span>
                    ,
                  </span>
                </div>

                <div className="flex gap-5">
                  <span className="w-4 text-right text-zinc-600">3</span>
                  <span className="pl-5">
                    <span className="text-rose-400">skills</span>: [
                    <span className="text-emerald-300">&quot;React&quot;</span>,{" "}
                    <span className="text-emerald-300">
                      &quot;Node.js&quot;
                    </span>
                    ],
                  </span>
                </div>

                <div className="flex gap-5">
                  <span className="w-4 text-right text-zinc-600">4</span>
                  <span className="pl-5">
                    <span className="text-rose-400">learning</span>:{" "}
                    <span className="text-orange-300">true</span>,
                  </span>
                </div>

                <div className="flex gap-5">
                  <span className="w-4 text-right text-zinc-600">5</span>
                  <span className="pl-5">
                    <span className="text-rose-400">platform</span>:{" "}
                    <span className="text-emerald-300">
                      &quot;CodeNest&quot;
                    </span>
                  </span>
                </div>

                <div className="flex gap-5">
                  <span className="w-4 text-right text-zinc-600">6</span>
                  <span className="text-white">{"}"};</span>
                </div>

                <div className="flex gap-5">
                  <span className="w-4 text-right text-zinc-600">7</span>
                  <span className="text-zinc-500">
                    // Your journey starts here...
                  </span>
                </div>
              </div>

              {/* Editor footer */}
              <div className="flex items-center justify-between border-t border-white/10 bg-[#24242b] px-5 py-3 text-[11px] text-zinc-400">
                <span className="flex items-center gap-2">
                  <Braces size={13} className="text-rose-400" />
                  TypeScript
                </span>

                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-400" />
                  Ready to learn
                </span>
              </div>
            </div>

            {/* Floating bottom badge */}
            <div className="absolute -bottom-7 right-0 z-20 flex items-center gap-3 rounded-2xl border border-white/15 bg-[#29292e] px-4 py-3 shadow-2xl">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/20">
                <Play size={19} className="fill-rose-400 text-rose-400" />
              </div>

              <div>
                <p className="text-xs font-bold text-white">مسیرت رو شروع کن</p>
                <p className="mt-1 text-[11px] text-zinc-400">
                  یادگیری قدم‌به‌قدم
                </p>
              </div>
            </div>

            {/* Small decoration */}
            <div className="absolute -right-5 top-1/3 flex size-12 rotate-12 items-center justify-center rounded-2xl border border-white/15 bg-[#29292e] shadow-xl">
              <Layers3 size={22} className="text-rose-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto grid max-w-7xl gap-4 px-4 pt-10 md:grid-cols-3 lg:px-6">
        {[
          {
            icon: Code2,
            title: "آموزش پروژه‌محور",
            description: "مفاهیم رو با ساخت پروژه یاد بگیر.",
          },
          {
            icon: BookOpen,
            title: "مسیر یادگیری مشخص",
            description: "بدون سردرگمی از مقدماتی تا پیشرفته.",
          },
          {
            icon: GraduationCap,
            title: "مناسب سطوح مختلف",
            description: "برای شروع یا ارتقای مهارت‌هات.",
          },
        ].map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-box text-primary">
              <Icon size={23} />
            </div>

            <div>
              <h2 className="text-sm font-bold">{title}</h2>
              <p className="mt-2 text-xs leading-7 text-text-secondary">
                {description}
              </p>
            </div>
          </div>
        ))}
      </section>

      <CoursesCatalog searchParams={searchParams} />
    </div>
  );
}
