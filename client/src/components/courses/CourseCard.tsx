import Link from "next/link";
import { ArrowLeft, BookOpen, Clock3, GraduationCap, Star } from "lucide-react";
import { CoursesResType } from "@/types/response.type";
import Image from "next/image";

export default function CourseCard({ course }: { course: CoursesResType[0] }) {
  const calculateFinalPrice = (
    price: number,
    discount: number,
    activeDiscount: boolean,
  ): number => {
    if (!activeDiscount) return price;

    return Math.round(price * (1 - discount / 100));
  };

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="relative flex flex-col overflow-hidden bg-card rounded-xl p-3 group border border-gray-200 hover:border-accent duration-300   hover:-translate-y-1
  hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]"
    >
      <div className="relative">
        {course.discount > 0 && (
          <span className="duration-300 group-hover:animate-pulse absolute top-4 left-4 rounded-lg bg-white px-3 py-1.5 text-xs font-extrabold text-primary">
            {course.discount.toLocaleString("fa-IR")}٪ تخفیف
          </span>
        )}

        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER_URL}${course.thumbnailImage}`}
          alt={course.title}
          width={1600}
          height={900}
          unoptimized
          className="duration-300 rounded-xl mb-3"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-lg bg-box px-3 py-1.5 text-xs font-bold text-primary">
            {course.category.name}
          </span>

          <span className="flex items-center gap-1 text-xs font-bold text-text-secondary">
            <Star size={15} className="fill-amber-400 text-amber-400" />
            {course.rating}
          </span>
        </div>

        <h4 className="mt-4 min-h-14 block text-base leading-6 font-extrabold text-text-primary duration-300 group-hover:text-primary">
          {course.title}
        </h4>

        <p className="mt-1 line-clamp-2 text-xs leading-6 text-text-secondary">
          {course.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-text-muted">
          <span className="inline-flex items-center gap-1.5">
            <BookOpen size={15} />
            {course.lessons} جلسه
          </span>

          <span className="inline-flex items-center gap-1.5">
            <Clock3 size={15} />
            {course.duration}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <GraduationCap size={15} />
            {course.level}
          </span>
        </div>

        <div className="mt-3">
          <div className="flex items-center justify-between gap-3 border-t border-border pt-3">
            <div>
              {course.price === 0 ? (
                <p className="text-lg font-extrabold text-success">رایگان</p>
              ) : (
                <>
                  {course.activeDiscount && course.discount > 0 && (
                    <del className="text-sm text-text-secondary">
                      {course.price.toLocaleString()} تومان
                    </del>
                  )}

                  <p className="text-xl font-extrabold text-primary">
                    {course.activeDiscount
                      ? calculateFinalPrice(
                          course.price,
                          course.discount,
                          course.activeDiscount,
                        ).toLocaleString()
                      : course.price.toLocaleString()}
                    <span className="mr-1 text-xs font-medium">تومان</span>
                  </p>
                </>
              )}
            </div>

            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-box text-primary transition-colors group-hover:bg-primary group-hover:text-white hover:bg-primary hover:text-white">
              <ArrowLeft
                className="rotate-45 group-hover:rotate-0 duration-300"
                size={20}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
