"use client";

import { BookOpen, GraduationCap } from "lucide-react";

import CourseCard from "@/components/panel/CourseCard";
import useMyCourse from "@/hooks/useMyCourse";
import MyCoursesSkeleton from "@/components/panel/loading/MyCoursesSkeleton";

export default function MyCoursesPage() {
  const { data, isLoading } = useMyCourse();

  if (isLoading) return <MyCoursesSkeleton count={6} />;

  return (
    <div className="w-full min-w-0">
      <div className="mb-6 sm:mb-8">
        <span className="text-xs font-bold text-primary">
          کتابخانه آموزشی من
        </span>

        <h1 className="mt-2 flex items-center gap-3 text-xl font-extrabold sm:text-2xl">
          <GraduationCap size={29} className="shrink-0 text-primary" />
          دوره‌های من
        </h1>

        <p className="mt-2 text-sm leading-7 text-text-secondary">
          تمام دوره‌هایی که تهیه کردی، در کتابخانه آموزشی تو قرار دارن و همیشه
          بهشون دسترسی داری.
        </p>
      </div>

      <div className="mb-5 flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-border bg-white px-4 py-4 sm:mb-7 sm:px-5">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <BookOpen size={19} className="shrink-0 text-primary" />
          همه دوره‌ها
        </div>

        <span className="shrink-0 rounded-full bg-box px-3 py-1.5 text-xs font-bold text-primary">
          {data?.data?.length ?? 0} دوره
        </span>
      </div>

      <div className="grid w-full min-w-0 grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
        {data?.data?.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
