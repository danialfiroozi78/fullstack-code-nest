"use client";

type MyOrdersSkeletonProps = {
  count?: number;
};

export default function MyOrdersSkeleton({ count = 3 }: MyOrdersSkeletonProps) {
  return (
    <div
      role="status"
      aria-label="در حال بارگذاری سفارش‌های من"
      className="w-full min-w-0 animate-pulse"
    >
      {/* Page Header */}
      <div className="mb-8 space-y-4">
        <div className="h-3 w-28 rounded-md bg-primary/10" />

        <div className="flex items-center gap-3">
          <div className="size-7 rounded-lg bg-primary/10" />
          <div className="h-7 w-36 rounded-lg bg-zinc-200" />
        </div>

        <div className="h-3 w-full max-w-md rounded-md bg-zinc-200" />
      </div>

      {/* Orders Table */}
      <div className="w-full min-w-0 md:overflow-hidden md:rounded-2xl md:border md:border-border md:bg-white">
        <table className="block w-full text-right md:table">
          {/* Header */}
          <thead className="hidden bg-zinc-50 md:table-header-group">
            <tr>
              {Array.from({ length: 4 }, (_, index) => (
                <th key={index} className="px-5 py-5">
                  <div className="h-3 w-20 rounded-md bg-zinc-200" />
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody className="flex flex-col gap-4 md:table-row-group md:divide-y md:divide-border">
            {Array.from({ length: count }, (_, index) => (
              <tr
                key={index}
                className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] rounded-2xl border border-border bg-white p-4 md:table-row md:rounded-none md:border-0 md:p-0"
              >
                {/* Order Number */}
                <td className="col-start-1 row-start-1 min-w-0 md:px-5 md:py-6">
                  <div className="flex items-center gap-2">
                    <div className="size-10 shrink-0 rounded-xl bg-primary/5" />

                    <div className="space-y-2">
                      <div className="h-3.5 w-12 rounded-md bg-zinc-200" />
                      <div className="h-2.5 w-16 rounded-md bg-zinc-100" />
                    </div>
                  </div>
                </td>

                {/* Courses */}
                <td className="col-span-2 row-start-2 mt-4 min-w-0 border-t border-border pt-4 md:mt-0 md:max-w-80 md:border-0 md:px-5 md:py-6">
                  <div className="mb-4 flex items-center justify-between md:hidden">
                    <div className="h-3 w-28 rounded-md bg-zinc-200" />
                    <div className="h-5 w-12 rounded-md bg-primary/5" />
                  </div>

                  <div className="space-y-4">
                    {Array.from(
                      { length: index === 0 ? 4 : 1 },
                      (_, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="flex min-w-0 items-center gap-2"
                        >
                          <div className="size-4 shrink-0 rounded-sm bg-primary/10" />

                          <div
                            className="h-3 max-w-full rounded-md bg-zinc-200"
                            style={{
                              width: `${180 + (courseIndex % 3) * 25}px`,
                            }}
                          />
                        </div>
                      ),
                    )}
                  </div>
                </td>

                {/* Amount */}
                <td className="col-span-2 row-start-3 mt-4 flex items-center justify-between gap-3 border-t border-border pt-4 md:table-cell md:mt-0 md:border-0 md:px-5 md:py-6">
                  <div className="h-3 w-20 rounded-md bg-zinc-100 md:hidden" />

                  <div className="flex items-center gap-2">
                    <div className="h-4 w-20 rounded-md bg-zinc-200" />
                    <div className="h-3 w-8 rounded-md bg-zinc-100" />
                  </div>
                </td>

                {/* Status */}
                <td className="col-start-2 row-start-1 self-center md:px-5 md:py-6">
                  <div className="h-8 w-24 rounded-lg bg-emerald-50" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
