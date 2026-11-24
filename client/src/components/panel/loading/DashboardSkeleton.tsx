"use client";

export default function DashboardSkeleton() {
  return (
    <div
      role="status"
      aria-label="در حال بارگذاری داشبورد"
      className="w-full min-w-0 animate-pulse space-y-6"
    >
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-[#18181b] p-6 sm:p-8">
        <div className="pointer-events-none absolute -left-20 -top-24 size-72 rounded-full bg-primary/15 blur-3xl" />

        <div className="relative space-y-5">
          <div className="h-6 w-32 rounded-full bg-white/10" />

          <div className="h-8 w-48 max-w-full rounded-lg bg-white/15" />

          <div className="h-3 w-full max-w-md rounded-md bg-white/10" />

          <div className="h-11 w-40 rounded-xl bg-white/10" />
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className="min-w-0 rounded-2xl border border-border bg-white p-5"
          >
            <div className="flex items-center justify-between">
              <div className="size-11 rounded-xl bg-primary/5" />
              <div className="size-4 rounded-md bg-zinc-100" />
            </div>

            <div className="mt-5 h-7 w-28 rounded-lg bg-zinc-200" />

            <div className="mt-3 h-3.5 w-24 rounded-md bg-zinc-200" />

            <div className="mt-2 h-2.5 w-32 rounded-md bg-zinc-100" />
          </div>
        ))}
      </div>

      {/* Profile & Recent Orders */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Profile Status */}
        <div className="flex min-w-0 flex-col rounded-2xl border border-border bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="size-11 shrink-0 rounded-xl bg-primary/5" />

            <div className="space-y-2">
              <div className="h-4 w-28 rounded-md bg-zinc-200" />
              <div className="h-3 w-40 max-w-full rounded-md bg-zinc-100" />
            </div>
          </div>

          {/* Profile Progress */}
          <div className="mt-5 space-y-3 rounded-xl bg-zinc-50 p-4">
            <div className="flex items-center justify-between">
              <div className="h-3 w-28 rounded-md bg-zinc-200" />
              <div className="h-3 w-10 rounded-md bg-primary/10" />
            </div>

            <div className="h-2 w-full rounded-full bg-zinc-200" />

            <div className="h-2.5 w-36 rounded-md bg-zinc-200" />
          </div>

          {/* Profile Fields */}
          <div className="mt-4 divide-y divide-border">
            {Array.from({ length: 6 }, (_, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-3 py-3"
              >
                <div className="flex items-center gap-2">
                  <div className="size-7 shrink-0 rounded-lg bg-zinc-100" />
                  <div className="h-3 w-20 rounded-md bg-zinc-200" />
                </div>

                <div className="h-3 w-16 rounded-md bg-zinc-100" />
              </div>
            ))}
          </div>

          <div className="mt-auto pt-5">
            <div className="h-11 w-full rounded-xl bg-primary/10" />
          </div>
        </div>

        {/* Recent Orders */}
        <div className="flex min-w-0 flex-col rounded-2xl border border-border bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="size-11 shrink-0 rounded-xl bg-primary/5" />

            <div className="space-y-2">
              <div className="h-4 w-28 rounded-md bg-zinc-200" />
              <div className="h-3 w-36 rounded-md bg-zinc-100" />
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {Array.from({ length: 3 }, (_, index) => (
              <div key={index} className="rounded-xl border border-border p-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="size-9 shrink-0 rounded-lg bg-zinc-100" />

                    <div className="space-y-2">
                      <div className="h-3 w-20 rounded-md bg-zinc-200" />
                      <div className="h-2.5 w-16 rounded-md bg-zinc-100" />
                    </div>
                  </div>

                  <div className="h-6 w-16 rounded-md bg-emerald-50" />
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                  <div className="h-3 w-20 rounded-md bg-zinc-200" />
                  <div className="h-3 w-20 rounded-md bg-primary/10" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-5">
            <div className="h-11 w-full rounded-xl border border-primary/10 bg-primary/5" />
          </div>
        </div>
      </div>

      {/* Learning Banner */}
      <div className="flex items-center justify-between gap-4 rounded-2xl border border-primary/10 bg-primary/5 p-5">
        <div className="flex min-w-0 items-center gap-3">
          <div className="size-12 shrink-0 rounded-xl bg-white" />

          <div className="min-w-0 space-y-3">
            <div className="h-4 w-40 max-w-full rounded-md bg-primary/10" />
            <div className="h-3 w-64 max-w-full rounded-md bg-primary/5" />
          </div>
        </div>

        <div className="hidden h-4 w-24 shrink-0 rounded-md bg-primary/10 sm:block" />
      </div>
    </div>
  );
}
