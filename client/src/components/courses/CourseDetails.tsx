import Link from "next/link";
import { ArrowLeft, CheckCircle2, UserRound } from "lucide-react";

import CourseCurriculum from "./CourseCurriculum";
import { CourseDetailsResType } from "@/types/response.type";
import CoursePreview from "@/components/courses/CoursePreview";
import CourseDetailHeroSection from "@/components/courses/CourseDetailHeroSection";

export default function CourseDetails({
  courseDetails,
  isAuthorized,
}: {
  courseDetails: CourseDetailsResType;
  isAuthorized: boolean;
}) {
  return (
    <div className="bg-body">
      <CourseDetailHeroSection courseDetails={courseDetails} />

      <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-6 lg:py-14">
        <div className="min-w-0 space-y-7">
          <section className="rounded-2xl border border-border bg-white p-5 sm:p-7">
            <h2 className="text-xl font-extrabold">درباره این دوره</h2>

            <div className="mt-5 space-y-4">
              <p className="text-sm leading-9 text-text-secondary">
                {courseDetails.details.description}
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-white p-5 sm:p-7">
            <h2 className="text-xl font-extrabold">
              در این دوره چی یاد می‌گیری؟
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {courseDetails.details.learningOutcomes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-success"
                  />

                  <p className="text-sm leading-7 text-text-secondary">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <CourseCurriculum courseDetails={courseDetails} />

          <section className="rounded-2xl border border-border bg-white p-5 sm:p-7">
            <h2 className="text-xl font-extrabold">پیش‌ نیازهای دوره</h2>

            <ul className="mt-6 space-y-4">
              <p className="text-sm leading-7 text-text-secondary">
                {courseDetails.details.requirements}
              </p>
            </ul>
          </section>

          <section className="rounded-2xl border border-border bg-white p-5 sm:p-7">
            <h2 className="text-xl font-extrabold">مدرس دوره</h2>

            <div className="mt-6 flex items-start gap-4">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-box text-primary">
                <UserRound size={32} />
              </div>

              <div>
                <h3 className="text-base font-extrabold">
                  {courseDetails.instructor.name}
                </h3>

                <p className="mt-2 text-xs font-semibold text-primary">
                  مدرس برنامه‌نویسی
                </p>

                <p className="mt-3 text-sm leading-8 text-text-secondary">
                  {courseDetails.instructor.description}
                </p>
              </div>
            </div>
          </section>
        </div>

        <CoursePreview
          isAuthorized={isAuthorized}
          courseDetails={courseDetails}
        />
      </div>

      <section className="border-t border-border bg-white py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center lg:px-6">
          <div>
            <h2 className="text-xl font-extrabold">
              دنبال دوره‌های بیشتری هستی؟
            </h2>

            <p className="mt-3 text-sm text-text-secondary">
              بقیه آموزش‌های CodeNest رو هم ببین.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white hover:bg-primary-hover"
          >
            مشاهده همه دوره‌ها
            <ArrowLeft size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
