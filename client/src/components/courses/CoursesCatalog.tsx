import { BookOpen } from "lucide-react";

import Categories from "@/components/courses/Categories";
import { getCourses } from "@/services/course.service";
import CourseCard from "@/components/courses/CourseCard";
import SearchForm from "@/components/courses/SearchForm";
import CoursesEmptyState from "@/components/courses/EmptyState";

type PageProps = {
  searchParams: Promise<{
    categories?: string;
    search?: string;
    sort?: string;
  }>;
};

export default async function CoursesCatalog({ searchParams }: PageProps) {
  const params = await searchParams;
  const courses = await getCourses(params);

  return (
    <section
      id="courses-list"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 lg:px-6"
    >
      {/* Heading */}
      <div className="mb-9">
        <span className="text-sm font-bold text-primary">کتابخانه آموزشی</span>

        <h2 className="mt-3 text-3xl font-extrabold">همه دوره‌های آموزشی</h2>

        <p className="mt-4 text-sm leading-8 text-text-secondary">
          دوره مناسب خودت رو پیدا کن و یادگیری رو شروع کن.
        </p>
      </div>

      {/* Search */}
      <SearchForm />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <Categories />

        <div className="md:col-span-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div className="mb-3 flex items-center justify-between col-span-full">
            <p className="text-sm text-text-secondary">
              نمایش{" "}
              <strong className="text-text-primary">
                {courses?.data?.length}
              </strong>{" "}
              دوره آموزشی
            </p>

            <span className="hidden items-center gap-2 text-xs text-text-muted sm:flex">
              <BookOpen size={16} />
              آموزش‌های پروژه‌محور
            </span>
          </div>

          {courses?.data?.length ? (
            courses?.data?.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <CoursesEmptyState />
          )}
        </div>
      </div>
    </section>
  );
}
