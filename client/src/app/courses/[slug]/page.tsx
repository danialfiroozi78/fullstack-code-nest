import CourseDetails from "@/components/courses/CourseDetails";
import { getCourseDetails } from "@/services/course.service";
import { cookies } from "next/headers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "کدنست | آموزش تخصصی برنامه‌نویسی",
  description:
    "کدنست، پلتفرم آموزش تخصصی برنامه‌نویسی با دوره‌های پروژه‌محور فرانت‌اند، بک‌اند، توسعه وب و مسیرهای یادگیری برای ورود به بازار کار.",
};

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const details = await getCourseDetails(slug as string);
  const cookieStore = await cookies();
  const isAuthorized = !!cookieStore.get("access_token")?.value;

  return (
    <CourseDetails isAuthorized={isAuthorized} courseDetails={details?.data} />
  );
}
