import Link from "next/link";
import {
  ArrowLeft,
  Code2,
  FileQuestion,
  Home,
  Search,
  Terminal,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-body px-4 py-20">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 size-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
        {/* Icon */}
        <div className="mx-auto mb-7 flex size-20 items-center justify-center rounded-3xl border border-primary/10 bg-box text-primary">
          <FileQuestion size={38} strokeWidth={1.7} />
        </div>

        {/* 404 */}
        <div className="relative">
          <h1 className="text-[110px] leading-none font-black tracking-tighter text-primary sm:text-[160px]">
            404
          </h1>

          <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-text-secondary">
            <Code2 size={15} className="text-primary" />
            Page Not Found
          </span>
        </div>

        {/* Description */}
        <h2 className="mt-8 text-2xl font-extrabold text-text-primary sm:text-3xl">
          اوه! این صفحه پیدا نشد.
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-9 text-text-secondary">
          انگار توی مسیر اشتباهی قدم گذاشتی! ممکنه آدرس رو اشتباه وارد کرده باشی
          یا صفحه‌ای که دنبالش هستی حذف شده باشه.
        </p>

        {/* Code terminal */}
        <div
          dir="ltr"
          className="mx-auto mt-9 max-w-md overflow-hidden rounded-2xl border border-zinc-800 bg-footer text-left shadow-xl shadow-zinc-900/10"
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
            <span className="size-2.5 rounded-full bg-red-400" />
            <span className="size-2.5 rounded-full bg-yellow-400" />
            <span className="size-2.5 rounded-full bg-green-400" />

            <span className="ml-3 text-xs text-zinc-400">
              terminal — codenest
            </span>

            <Terminal size={15} className="ml-auto text-zinc-400" />
          </div>

          <div className="space-y-2 p-5 font-mono text-xs sm:text-sm">
            <p className="text-zinc-300">
              <span className="text-emerald-400">$</span> find /requested-page
            </p>

            <p className="text-rose-400">Error: 404 Not Found</p>

            <p className="text-zinc-500">{"// Let's get you back on track."}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
          >
            <Home size={18} />
            بازگشت به صفحه اصلی
          </Link>

          <Link
            href="/courses"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 text-sm font-semibold text-text-primary transition-colors hover:border-primary/30 hover:bg-box"
          >
            <Search size={18} />
            مشاهده دوره‌ها
            <ArrowLeft size={16} />
          </Link>
        </div>

        <p className="mt-10 text-xs text-text-muted">
          مسیر یادگیریت هنوز ادامه داره؛ فقط باید راه درست رو پیدا کنی.
        </p>
      </div>
    </main>
  );
}
