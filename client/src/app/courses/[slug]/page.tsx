import CourseDetails from "@/components/courses/CourseDetails";
import { getCourseDetails } from "@/services/course.service";
import { cookies } from "next/headers";

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
