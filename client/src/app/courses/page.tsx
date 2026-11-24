import { BookOpen, Code2, GraduationCap } from "lucide-react";
import CoursesCatalog from "@/components/courses/CoursesCatalog";
import HeroSection from "@/components/courses/HeroSection";
import type { Metadata } from "next";

type PageProps = {
  searchParams: Promise<{
    categories?: string;
    search?: string;
    sort?: string;
  }>;
};

export const metadata: Metadata = {
  title: "کدنست | آموزش تخصصی برنامه‌نویسی",
  description:
    "کدنست، پلتفرم آموزش تخصصی برنامه‌نویسی با دوره‌های پروژه‌محور فرانت‌اند، بک‌اند، توسعه وب و مسیرهای یادگیری برای ورود به بازار کار.",
};

export default async function CoursesPage({ searchParams }: PageProps) {
  return (
    <div className="overflow-hidden bg-body">
      <HeroSection />

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pt-10 md:grid-cols-3 lg:px-6">
        {[
          {
            icon: Code2,
            title: "آموزش پروژه‌محور",
            description: "مفاهیم رو با ساخت پروژه یاد بگیر.",
          },
          {
            icon: BookOpen,
            title: "مسیر یادگیری مشخص",
            description: "بدون سردرگمی از مقدماتی تا پیشرفته.",
          },
          {
            icon: GraduationCap,
            title: "مناسب سطوح مختلف",
            description: "برای شروع یا ارتقای مهارت‌هات.",
          },
        ].map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-box text-primary">
              <Icon size={23} />
            </div>

            <div>
              <h2 className="text-sm font-bold">{title}</h2>
              <p className="mt-2 text-xs leading-7 text-text-secondary">
                {description}
              </p>
            </div>
          </div>
        ))}
      </section>

      <CoursesCatalog searchParams={searchParams} />
    </div>
  );
}
