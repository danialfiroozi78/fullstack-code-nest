import { ArrowLeft, Rocket } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 lg:px-6 lg:pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-footer px-6 py-12 text-white sm:p-12 lg:p-14">
        <div className="pointer-events-none absolute -left-24 -top-24 size-80 rounded-full bg-primary/20 blur-[90px]" />

        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold text-rose-300">
              <Rocket size={17} />
              آینده از همین‌جا شروع میشه
            </span>

            <h2 className="mt-4 text-2xl font-extrabold leading-relaxed sm:text-3xl">
              آماده‌ای اولین قدم رو برداری؟
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-8 text-zinc-400">
              فرقی نمی‌کنه تازه شروع کردی یا می‌خوای مهارت‌هات رو ارتقا بدی؛
              CodeNest در مسیر یادگیری همراهته.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-primary px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
          >
            شروع یادگیری
            <ArrowLeft size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}
