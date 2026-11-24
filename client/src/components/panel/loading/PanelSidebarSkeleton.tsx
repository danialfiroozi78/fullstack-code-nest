"use client";

export default function PanelSidebarSkeleton() {
  return (
    <aside
      role="status"
      aria-label="در حال بارگذاری منوی حساب کاربری"
      className="h-fit w-full min-w-0 max-w-full animate-pulse rounded-2xl border border-border bg-white p-2 lg:sticky lg:top-28 lg:p-4"
    >
      {/* User Information */}
      <div className="hidden items-center gap-3 border-b border-border px-2 pb-6 lg:flex">
        <div className="size-12 shrink-0 rounded-xl bg-primary/5" />

        <div className="min-w-0 flex-1 space-y-2">
          <div className="h-4 w-24 max-w-full rounded-md bg-zinc-200" />
          <div className="h-3 w-28 max-w-full rounded-md bg-zinc-100" />
        </div>
      </div>

      {/* Navigation */}
      <div className="w-full min-w-0 max-w-full overflow-hidden">
        <div className="flex w-max min-w-full gap-2 lg:mt-5 lg:w-full lg:flex-col">
          {Array.from({ length: 4 }, (_, index) => (
            <div
              key={index}
              className={`flex shrink-0 items-center gap-3 rounded-xl px-3 py-3 lg:px-4 lg:py-3.5 ${
                index === 0 ? "bg-primary/5" : "bg-zinc-50"
              }`}
            >
              <div
                className={`size-5 shrink-0 rounded-md ${
                  index === 0 ? "bg-primary/15" : "bg-zinc-200"
                }`}
              />

              <div
                className={`h-3 w-20 rounded-md ${
                  index === 0 ? "bg-primary/15" : "bg-zinc-200"
                }`}
              />

              <div className="mr-auto hidden size-3 rounded-sm bg-zinc-200 lg:block" />
            </div>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="mt-5 hidden border-t border-border pt-4 lg:block">
        <div className="flex items-center gap-3 rounded-xl px-4 py-3">
          <div className="size-5 rounded-md bg-primary/10" />
          <div className="h-3.5 w-28 rounded-md bg-primary/10" />
        </div>
      </div>
    </aside>
  );
}
