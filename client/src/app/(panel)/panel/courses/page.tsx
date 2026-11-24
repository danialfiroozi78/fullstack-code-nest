"use client";

import { BookOpen, GraduationCap } from "lucide-react";

import CourseCard from "@/components/panel/CourseCard";
import { formatNumber, panelCourses } from "@/data/panel";

export default function MyCoursesPage() {
  return (
    <div>
      <div className="mb-8">
        <span className="text-xs font-bold text-primary">
          کتابخانه آموزشی من
        </span>

        <h1 className="mt-2 flex items-center gap-3 text-2xl font-extrabold">
          <GraduationCap size={29} className="text-primary" />
          دوره‌های من
        </h1>

        <p className="mt-4 text-sm leading-8 text-text-secondary">
          تمام دوره‌هایی که تهیه کردی، همراه با وضعیت پیشرفتت در این صفحه قرار
          دارن.
        </p>
      </div>

      <div className="mb-7 flex items-center justify-between rounded-2xl border border-border bg-white px-5 py-4">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <BookOpen size={19} className="text-primary" />
          همه دوره‌ها
        </div>

        <span className="rounded-full bg-box px-3 py-1.5 text-xs font-bold text-primary">
          {formatNumber(panelCourses.length)} دوره
        </span>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {panelCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
