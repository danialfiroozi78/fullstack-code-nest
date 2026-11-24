import {
  ArrowLeft,
  ArrowUpLeft,
  CircleCheck,
  Code2,
  FileCode2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function AboutUsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-footer py-20 text-white lg:py-22">
      <div className="pointer-events-none absolute -top-40 -left-40 size-112.5 rounded-full bg-primary/20 blur-[110px]" />

      <div className="pointer-events-none absolute -bottom-52 right-0 size-112.5 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-6">
        <div className="min-w-0">
          <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-rose-200">
            <Sparkles size={16} />
            بیشتر با CodeNest آشنا شو
          </span>

          <h1 className="text-4xl leading-[1.8] font-extrabold sm:text-5xl lg:text-[54px]">
            اینجا فقط کدنویسی
            <br />
            یاد نمی‌گیری؛
            <span className="text-rose-400"> آینده‌ات رو می‌سازی.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-9 text-zinc-300 sm:text-base">
            CodeNest با هدف ساده‌تر و کاربردی‌تر کردن یادگیری برنامه‌نویسی شکل
            گرفته. ما باور داریم بهترین راه یادگیری، تمرین کردن، اشتباه کردن و
            ساختن پروژه‌های واقعیه.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
            >
              مشاهده دوره‌ها
              <ArrowLeft size={18} />
            </Link>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              ارتباط با ما
              <ArrowUpLeft size={18} />
            </Link>
          </div>
        </div>

        <div className="relative min-w-0" dir="ltr">
          <div className="pointer-events-none absolute inset-10 rounded-full bg-primary/15 blur-[100px]" />

          <div className="relative space-y-4">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#202023] shadow-2xl">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-5">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-rose-400" />
                  <span className="size-2.5 rounded-full bg-amber-400" />
                  <span className="size-2.5 rounded-full bg-emerald-400" />
                </div>

                <div className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5">
                  <FileCode2 size={14} className="text-sky-400" />

                  <span className="font-mono text-xs text-zinc-400">
                    journey.ts
                  </span>
                </div>

                <Code2 size={18} className="text-rose-400" />
              </div>

              {/* Editor Content */}
              <div className="overflow-x-auto px-4 py-7 font-mono text-[11px] leading-8 sm:px-6 sm:text-sm">
                <div className="flex min-w-max gap-4 sm:gap-5">
                  {/* Line Numbers */}
                  <div className="flex select-none flex-col text-right text-zinc-600">
                    {Array.from({ length: 8 }, (_, index) => (
                      <span key={index}>{index + 1}</span>
                    ))}
                  </div>

                  {/* Code */}
                  <div className="whitespace-pre">
                    <div className="text-zinc-500">
                      {"// Your future starts here"}
                    </div>

                    <div>
                      <span className="text-violet-400">const </span>
                      <span className="text-sky-300">developer </span>
                      <span className="text-zinc-300">{"= {"}</span>
                    </div>

                    <div>
                      {"  "}
                      <span className="text-sky-300">passion</span>
                      <span className="text-zinc-300">: </span>
                      <span className="text-orange-400">true</span>
                      <span className="text-zinc-300">,</span>
                    </div>

                    <div>
                      {"  "}
                      <span className="text-sky-300">mindset</span>
                      <span className="text-zinc-300">: </span>
                      <span className="text-emerald-300">
                        {'"Never stop learning"'}
                      </span>
                      <span className="text-zinc-300">,</span>
                    </div>

                    <div>
                      {"  "}
                      <span className="text-sky-300">goal</span>
                      <span className="text-zinc-300">: </span>
                      <span className="text-emerald-300">
                        {'"Build something great"'}
                      </span>
                    </div>

                    <div className="text-zinc-300">{"};"}</div>

                    <div>&nbsp;</div>

                    <div>
                      <span className="text-sky-300">developer</span>
                      <span className="text-zinc-300">.</span>
                      <span className="text-rose-300">startJourney</span>
                      <span className="text-zinc-300">();</span>

                      <span className="ml-1 inline-block h-4 w-0.5 animate-pulse bg-rose-400 align-middle" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Editor Status Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-white/[0.02] px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2">
                  <CircleCheck
                    size={15}
                    className="shrink-0 text-emerald-400"
                  />

                  <span className="font-mono text-[10px] text-emerald-400">
                    Ready to build your future.
                  </span>
                </div>

                <span className="font-mono text-[10px] text-zinc-500">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
