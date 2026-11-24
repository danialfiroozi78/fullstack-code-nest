import {
  BookOpen,
  Clock3,
  Code2,
  GraduationCap,
  Layers3,
  Play,
  Sparkles,
  Star,
  Terminal,
  UserRound,
  Users,
} from "lucide-react";
import Link from "next/link";
import { CourseDetailsResType } from "@/types/response.type";

export default function CourseDetailHeroSection({
  courseDetails,
}: {
  courseDetails: CourseDetailsResType;
}) {
  return (
    <section className="relative overflow-hidden bg-footer py-12 text-white lg:py-16">
      <div className="pointer-events-none absolute -top-32 -left-24 size-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 size-96 rounded-full bg-rose-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs text-zinc-400">
          <Link href="/" className="hover:text-white">
            خانه
          </Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-white">
            دوره‌ها
          </Link>
          <span>/</span>
          <span className="text-rose-300">{courseDetails.category.name}</span>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex rounded-lg bg-primary/20 px-3 py-2 text-xs font-bold text-rose-300">
              {courseDetails.category.name}
            </span>

            <h1 className="mt-6 text-3xl leading-[1.7] font-extrabold sm:text-4xl">
              {courseDetails.title}
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-9 text-zinc-300">
              {courseDetails.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4 text-xs text-zinc-300">
              <span className="flex items-center gap-2">
                <Star size={17} className="fill-amber-400 text-amber-400" />
                {courseDetails.rating} امتیاز
              </span>

              <span className="flex items-center gap-2">
                <Users size={17} />
                {courseDetails.students} دانشجو
              </span>

              <span className="flex items-center gap-2">
                <Clock3 size={17} />
                {courseDetails.duration}
              </span>

              <span className="flex items-center gap-2">
                <GraduationCap size={17} />
                سطح {courseDetails.level}
              </span>
            </div>

            <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6">
              <div className="flex size-11 items-center justify-center rounded-full bg-white/10 text-rose-300">
                <UserRound size={22} />
              </div>

              <div>
                <p className="text-xs text-zinc-400">مدرس دوره</p>
                <p className="mt-1 text-sm font-bold">
                  {courseDetails.instructor?.name}
                </p>
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-97.5 items-center justify-center lg:flex">
            <div className="pointer-events-none absolute size-72 rounded-full bg-primary/20 blur-[90px]" />

            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(#ffffff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative w-full max-w-117.5 -rotate-3 overflow-hidden rounded-2xl border border-white/10 bg-[#111827] shadow-[0_30px_90px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:rotate-0">
              <div className="flex items-center justify-between border-b border-white/10 bg-white/4 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-rose-500" />
                  <span className="size-2.5 rounded-full bg-amber-400" />
                  <span className="size-2.5 rounded-full bg-emerald-400" />
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Terminal size={14} />
                  codenest / course
                </div>
              </div>

              {/* Editor body */}
              <div className="space-y-6 p-7">
                <div className="flex items-center gap-4">
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-rose-400/20 bg-primary/15 text-rose-400">
                    <Code2 size={32} strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0">
                    <p className="mb-2 text-xs text-rose-300">
                      CodeNest Academy
                    </p>
                    <h3 className="line-clamp-2 text-base font-bold leading-7 text-white">
                      {courseDetails.title}
                    </h3>
                  </div>
                </div>

                <div
                  dir="ltr"
                  className="space-y-3 text-left rounded-xl border border-white/5 bg-[#0b1120] p-5 font-mono text-xs leading-6"
                >
                  <div>
                    <span className="text-purple-400">const </span>
                    <span className="text-sky-300">yourFuture</span>
                    <span className="text-white"> = {"{"}</span>
                  </div>

                  <div className="pl-5">
                    <span className="text-rose-300">platform</span>
                    <span className="text-white">: </span>
                    <span className="text-emerald-300">
                      &quot;CodeNest&quot;
                    </span>
                    <span className="text-white">,</span>
                  </div>

                  <div className="pl-5">
                    <span className="text-rose-300">learning</span>
                    <span className="text-white">: </span>
                    <span className="text-amber-300">true</span>
                    <span className="text-white">,</span>
                  </div>

                  <div className="pl-5">
                    <span className="text-rose-300">progress</span>
                    <span className="text-white">: </span>
                    <span className="text-sky-300">&quot;unlimited&quot;</span>
                  </div>

                  <div className="text-white">{"};"}</div>

                  <div className="pt-2">
                    <span className="text-zinc-500">
                      {`// Start building your future`}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs text-zinc-400">
                    <Layers3 size={15} className="text-rose-400" />
                    یادگیری قدم‌به‌قدم
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 top-8 flex items-center gap-3 rounded-xl border border-white/10 bg-[#1f2937] px-4 py-3 shadow-2xl">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-white">
                <Play size={18} fill="currentColor" />
              </div>

              <div>
                <p className="text-xs font-bold text-white">مسیر یادگیری</p>
                <p className="mt-1 text-[10px] text-zinc-400">
                  از آموزش تا مهارت
                </p>
              </div>
            </div>

            <div className="absolute -bottom-1 -left-4 flex items-center gap-3 rounded-xl border border-white/10 bg-[#1f2937] px-4 py-3 shadow-2xl">
              <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                <BookOpen size={19} />
              </div>

              <div>
                <p className="text-xs font-bold text-white">
                  {courseDetails.lessons} جلسه آموزشی
                </p>
                <p className="mt-1 text-[10px] text-zinc-400">
                  آموزش ساختارمند
                </p>
              </div>
            </div>

            <div className="absolute -top-2 left-10 flex size-11 rotate-12 items-center justify-center rounded-xl border border-rose-400/20 bg-rose-500/15 text-rose-300">
              <Sparkles size={21} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
