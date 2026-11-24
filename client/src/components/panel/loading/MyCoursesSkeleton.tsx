"use client";

type MyCoursesSkeletonProps = {
  count?: number;
};

export default function MyCoursesSkeleton({
  count = 6,
}: MyCoursesSkeletonProps) {
  return (
    <div
      role="status"
      aria-label="در حال بارگذاری دوره‌های من"
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

      {/* Courses Count */}
      <div className="mb-6 flex items-center justify-between rounded-xl border border-border bg-white px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="size-5 rounded-md bg-primary/10" />
          <div className="h-4 w-24 rounded-md bg-zinc-200" />
        </div>

        <div className="h-6 w-12 rounded-full bg-primary/5" />
      </div>

      {/* Courses Grid */}
      <div className="grid w-full min-w-0 grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
        {Array.from({ length: count }, (_, index) => (
          <div
            key={index}
            className="flex h-full w-full min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-white p-3"
          >
            {/* Thumbnail */}
            <div className="aspect-video w-full rounded-xl bg-zinc-200" />

            {/* Category */}
            <div className="mt-3 h-6 w-20 rounded-lg bg-primary/5" />

            {/* Course Title */}
            <div className="mt-4 min-h-12 space-y-2">
              <div className="h-4 w-full rounded-md bg-zinc-200" />
              <div className="h-4 w-3/4 rounded-md bg-zinc-200" />
            </div>

            {/* Course Information */}
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="size-4 rounded-sm bg-zinc-200" />
                <div className="h-3 w-12 rounded-md bg-zinc-100" />
              </div>

              <div className="flex items-center gap-1.5">
                <div className="size-4 rounded-sm bg-zinc-200" />
                <div className="h-3 w-14 rounded-md bg-zinc-100" />
              </div>
            </div>

            {/* Footer */}
            <div className="mt-auto pt-4">
              <div className="border-t border-border pt-3">
                <div className="h-11 w-full rounded-xl bg-primary/5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
