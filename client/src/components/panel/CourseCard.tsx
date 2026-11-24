"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Code2,
  PlayCircle,
  Server,
  GraduationCap,
} from "lucide-react";
import { PanelCourse, formatNumber } from "@/data/panel";

const icons = {
  react: Code2,
  node: Server,
  html: GraduationCap,
  next: BookOpen,
};

export default function CourseCard({ course }: { course: PanelCourse }) {
  const Icon = icons[course.icon];
  const completed = course.progress === 100;

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5">
      <Link
        href={`/courses/${course.slug}`}
        className="relative flex h-40 items-center justify-center overflow-hidden bg-footer"
      >
        <div className="absolute -top-16 -left-12 size-48 rounded-full bg-primary/20 blur-3xl" />

        <div className="relative flex size-20 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-rose-300">
          <Icon size={42} strokeWidth={1.5} />
        </div>

        <span className="absolute top-4 right-4 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
          {course.category}
        </span>

        {completed && (
          <span className="absolute bottom-4 left-4 flex items-center gap-1 rounded-lg bg-success px-3 py-1.5 text-xs font-bold text-white">
            <CheckCircle2 size={14} />
            تکمیل‌شده
          </span>
        )}
      </Link>

      <div className="p-5">
        <p className="text-xs text-text-muted">مدرس: {course.instructor}</p>

        <Link
          href={`/courses/${course.slug}`}
          className="mt-2 block min-h-14 text-sm leading-7 font-extrabold text-text-primary hover:text-primary"
        >
          {course.title}
        </Link>

        <div className="mt-6 flex items-center justify-between text-xs">
          <span className="font-medium text-text-secondary">پیشرفت دوره</span>
          <span className="font-bold text-primary">
            {formatNumber(course.progress)}٪
          </span>
        </div>

        <div
          role="progressbar"
          aria-valuenow={course.progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`پیشرفت ${course.title}`}
          className="mt-3 h-2 overflow-hidden rounded-full bg-zinc-100"
        >
          <div
            className={`h-full rounded-full ${
              completed ? "bg-success" : "bg-primary"
            }`}
            style={{ width: `${course.progress}%` }}
          />
        </div>

        <p className="mt-3 text-xs text-text-muted">
          {formatNumber(course.completedLessons)} از{" "}
          {formatNumber(course.lessons)} جلسه
        </p>

        <Link
          href={`/courses/${course.slug}`}
          className="mt-6 flex h-11 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-white transition-colors hover:bg-primary-hover"
        >
          {completed ? (
            <CheckCircle2 size={18} />
          ) : course.progress === 0 ? (
            <PlayCircle size={18} />
          ) : (
            <BookOpen size={18} />
          )}

          {completed
            ? "مشاهده دوره"
            : course.progress === 0
              ? "شروع یادگیری"
              : "ادامه یادگیری"}

          <ArrowLeft size={16} />
        </Link>
      </div>
    </article>
  );
}
