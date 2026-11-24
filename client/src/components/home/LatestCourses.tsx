import { getNewestCourse } from "@/services/course.service";
import CourseCard from "@/components/courses/CourseCard";

export default async function LatestCourses() {
  const course = await getNewestCourse();

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {course?.data?.map((course) => (
        <CourseCard course={course} key={course.id} />
      ))}
    </div>
  );
}
