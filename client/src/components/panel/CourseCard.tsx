"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, Clock3 } from "lucide-react";
import Image from "next/image";
import { GetMyCourseResType } from "@/types/response.type";

export default function CourseCard({
  course,
}: {
  course: GetMyCourseResType["0"];
}) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group relative flex h-full w-full min-w-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-card p-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]"
    >
      <div className="relative mb-3 aspect-video w-full overflow-hidden rounded-xl">
        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER_URL}${course.thumbnailImage}`}
          alt={course.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-3">
          <span className="rounded-lg bg-box px-3 py-1.5 text-xs font-bold text-primary">
            {course.category.name}
          </span>
        </div>

        <h4 className="mt-4 line-clamp-2 min-h-12 wrap-break-word text-sm font-extrabold leading-6 text-text-primary transition-colors duration-300 group-hover:text-primary sm:text-base">
          {course.title}
        </h4>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-text-muted">
          <span className="inline-flex items-center gap-1.5">
            <BookOpen size={15} className="shrink-0" />
            {course.lessons} جلسه
          </span>

          <span className="inline-flex items-center gap-1.5">
            <Clock3 size={15} className="shrink-0" />
            {course.duration}
          </span>
        </div>

        <div className="mt-auto pt-4">
          <div className="border-t border-border pt-3">
            <div className="flex min-h-11 w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-box px-2 py-2 text-center text-xs font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-white sm:text-sm">
              مشاهده جزئیات دوره
              <ArrowLeft
                size={18}
                className="shrink-0 rotate-45 transition-transform duration-300 group-hover:rotate-0"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
