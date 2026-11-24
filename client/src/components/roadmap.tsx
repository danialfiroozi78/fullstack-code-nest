import {
  ArrowLeft,
  ArrowUpLeft,
  Cloud,
  Code2,
  GitBranch,
  Monitor,
  Rocket,
  Route,
  Server,
} from "lucide-react";
import Link from "next/link";

export default function RoadmapHeroSection() {
  return (
    <section className="relative overflow-hidden bg-footer py-20 text-white lg:py-22">
      <div className="pointer-events-none absolute -top-32 -left-32 size-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 right-0 size-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-6">
        <div className="min-w-0">
          <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-rose-200">
            <Route size={17} />
            نقشه راه یادگیری برنامه‌نویسی
          </span>

          <h1 className="text-4xl font-extrabold leading-[1.7] sm:text-5xl lg:text-[54px]">
            مسیر برنامه‌نویسی
            <br />
            خودت رو
            <span className="text-rose-400"> پیدا کن.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-9 text-zinc-300 sm:text-base">
            نمی‌دونی از کجا شروع کنی یا بعد از یادگیری یک تکنولوژی باید سراغ چی
            بری؟ مسیرهای یادگیری CodeNest بهت کمک می‌کنن قدم‌به‌قدم پیش بری.
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
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              راهنمایی برای انتخاب مسیر
              <ArrowUpLeft size={18} />
            </Link>
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="pointer-events-none absolute inset-10 rounded-full bg-primary/10 blur-[100px]" />

          <div
            dir="ltr"
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl backdrop-blur-xl sm:p-6"
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-5">
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <GitBranch size={16} className="text-rose-400" />

                <span className="text-xs font-medium text-zinc-300">
                  Learning Roadmap
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-rose-400" />
                <span className="size-2.5 rounded-full bg-amber-400" />
                <span className="size-2.5 rounded-full bg-emerald-400" />
              </div>
            </div>

            <div className="relative py-8">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-size-[24px_24px]" />

              <div className="relative flex flex-col items-center">
                <div className="group flex items-center gap-3 rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 transition-colors hover:bg-rose-400/15 sm:px-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-rose-400/15 text-rose-400">
                    <Code2 size={22} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-white sm:text-sm">
                      Programming Basics
                    </p>

                    <p className="mt-1 text-[10px] text-zinc-400">
                      Start your journey
                    </p>
                  </div>
                </div>

                <div className="h-7 w-px bg-rose-400/50" />

                <div className="relative h-7 w-2/3 border-x border-t border-white/20">
                  <div className="absolute left-1/2 top-0 h-full w-px bg-white/20" />
                </div>

                <div className="grid w-full grid-cols-3 gap-2 sm:gap-3">
                  {[
                    {
                      title: "Frontend",
                      subtitle: "UI Development",
                      icon: Monitor,
                      color: "text-sky-400",
                      background: "bg-sky-400/10",
                      border: "hover:border-sky-400/40",
                    },
                    {
                      title: "Backend",
                      subtitle: "Server Side",
                      icon: Server,
                      color: "text-emerald-400",
                      background: "bg-emerald-400/10",
                      border: "hover:border-emerald-400/40",
                    },
                    {
                      title: "DevOps",
                      subtitle: "Infrastructure",
                      icon: Cloud,
                      color: "text-violet-400",
                      background: "bg-violet-400/10",
                      border: "hover:border-violet-400/40",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className={`group flex min-w-0 flex-col items-center rounded-xl border border-white/10 bg-[#222225] px-2 py-4 text-center transition-all duration-300 hover:-translate-y-1 sm:py-5 ${item.border}`}
                    >
                      <div
                        className={`flex size-10 items-center justify-center rounded-xl sm:size-12 ${item.background} ${item.color}`}
                      >
                        <item.icon size={23} />
                      </div>

                      <p className="mt-3 text-[11px] font-bold text-white sm:text-sm">
                        {item.title}
                      </p>

                      <p className="mt-1 hidden text-[10px] text-zinc-400 sm:block">
                        {item.subtitle}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="relative h-8 w-2/3 border-x border-b border-dashed border-white/20">
                  <div className="absolute left-1/2 top-0 h-full border-l border-dashed border-white/20" />
                </div>

                <div className="h-7 border-l border-dashed border-rose-400/40" />

                <div className="flex items-center gap-3 rounded-xl border border-rose-400/30 bg-rose-400/10 px-5 py-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-rose-400/15 text-rose-400">
                    <Rocket size={22} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-white sm:text-sm">
                      Build Real Projects
                    </p>

                    <p className="mt-1 text-[10px] text-zinc-400">
                      Turn knowledge into experience
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
              <span className="text-[10px] text-zinc-400 sm:text-xs">
                Step by step, grow your skills.
              </span>

              <div className="flex items-center gap-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-[10px] font-medium text-emerald-400">
                  Ready to learn
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
