import CourseDetailPage from "@/containers/DetailPage";

export default function CoursesWrapper({
  params,
}: {
  params: { course_index: string };
}) {
  return <CourseDetailPage course_index={params.course_index} />;
}
