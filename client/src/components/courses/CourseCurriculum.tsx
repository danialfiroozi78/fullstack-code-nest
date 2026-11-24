"use client";

import {
  BookOpen,
  ChevronDown,
  Clock3,
  LockKeyhole,
  PlayCircle,
} from "lucide-react";
import { CourseDetailsResType } from "@/types/response.type";

export default function CourseCurriculum({
  courseDetails,
}: {
  courseDetails: CourseDetailsResType;
}) {
  return (
    <section
      id="curriculum"
      className="scroll-mt-28 rounded-2xl border border-border bg-white p-5 sm:p-7"
    >
      <div className="mb-6">
        <h2 className="text-xl font-extrabold">سرفصل‌های دوره</h2>

        <p className="mt-3 text-sm leading-8 text-text-secondary">
          با محتوای آموزشی دوره و ترتیب یادگیری آشنا شو.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-5 text-xs text-text-secondary">
        <span className="flex items-center gap-2">
          <BookOpen size={17} className="text-primary" />
          {courseDetails.lessons.toLocaleString()} جلسه
        </span>

        <span className="flex items-center gap-2">
          <Clock3 size={17} className="text-primary" />
          {courseDetails.duration} آموزش
        </span>
      </div>

      <div className="space-y-3">
        {courseDetails.sections.map((section, index) => (
          <details
            key={section.id}
            open={index === 0}
            className="group overflow-hidden rounded-xl border border-border"
          >
            <summary className="flex cursor-pointer list-none items-center gap-3 bg-zinc-50 p-4 marker:hidden sm:p-5 [&::-webkit-details-marker]:hidden">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-box text-sm font-bold text-primary">
                {(index + 1).toLocaleString("fa-IR")}
              </span>

              <div className="flex-1">
                <h3 className="text-sm font-bold">{section.title}</h3>

                <p className="mt-1 text-xs text-text-muted">
                  {section.lessons.length.toLocaleString()} جلسه
                </p>
              </div>

              <ChevronDown
                size={19}
                className="text-text-muted transition-transform group-open:rotate-180"
              />
            </summary>

            <div className="divide-y divide-border">
              {courseDetails.sections.map((lesson) =>
                lesson.lessons.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 px-4 py-4 sm:px-5"
                  >
                    {item.isFree ? (
                      <PlayCircle size={18} className="shrink-0 text-primary" />
                    ) : (
                      <LockKeyhole
                        size={17}
                        className="shrink-0 text-text-muted"
                      />
                    )}

                    <span className="flex-1 text-xs leading-6 text-text-secondary sm:text-sm">
                      {item.title}
                    </span>

                    {item.isFree && (
                      <span className="hidden rounded-lg bg-box px-2 py-1 text-[11px] font-bold text-primary sm:inline">
                        پیش‌نمایش
                      </span>
                    )}

                    <span className="shrink-0 text-xs text-text-muted">
                      {item.duration}
                    </span>
                  </div>
                )),
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
