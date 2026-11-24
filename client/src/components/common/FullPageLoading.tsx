import { CodeXml } from "lucide-react";

export default function FullPageLoading() {
  return (
    <div
      role="status"
      aria-label="در حال بارگذاری"
      className="fixed inset-0 z-[9999] flex items-center
      justify-center overflow-hidden bg-zinc-50"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(black 1px, transparent 1px),
            linear-gradient(90deg, black 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Background Glow */}
      <div
        className="absolute left-1/2 top-1/2 size-96
        -translate-x-1/2 -translate-y-1/2
        rounded-full bg-primary/10 blur-[100px]"
      />

      {/* Content */}
      <div className="relative flex flex-col items-center">
        {/* Loader */}
        <div className="relative flex size-28 items-center justify-center">
          <div
            className="absolute inset-0 rounded-full
            border-2 border-primary/10"
          />

          <div
            className="absolute inset-0 animate-spin
            rounded-full border-2 border-transparent
            border-t-primary border-r-primary/30
            motion-reduce:animate-none"
          />

          <div
            className="flex size-20 items-center justify-center
            rounded-3xl border border-primary/15
            bg-primary/5 shadow-lg shadow-primary/5"
          >
            <CodeXml size={38} strokeWidth={1.8} className="text-primary" />
          </div>
        </div>

        {/* Brand */}
        <h1
          dir="ltr"
          className="mt-6 text-3xl font-extrabold
          tracking-tight text-zinc-900"
        >
          Code<span className="text-primary">Nest</span>
        </h1>

        <p className="mt-3 text-sm text-zinc-500">
          در حال آماده‌سازی تجربه یادگیری شما...
        </p>

        {/* Progress */}
        <div
          dir="ltr"
          className="mt-7 h-1 w-48 overflow-hidden
          rounded-full bg-primary/10"
        >
          <div
            className="h-full w-2/5 animate-loading-progress
            rounded-full bg-linear-to-r
            from-primary/30 to-primary
            motion-reduce:animate-none"
          />
        </div>
      </div>

      {/* Footer */}
      <span
        dir="ltr"
        className="absolute bottom-8 text-[10px]
        font-medium tracking-[0.3em] text-zinc-400"
      >
        LEARN · BUILD · GROW
      </span>
    </div>
  );
}
