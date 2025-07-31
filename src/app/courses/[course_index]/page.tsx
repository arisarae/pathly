import { Suspense } from "react";
import CourseDetailPage from "@/containers/DetailPage";

interface courseProps {
  params: {course_index: string}
}

export default function CoursesWrapper({ params }: courseProps) {
  return (
      <CourseDetailPage course_index={params.course_index} />
  );
}
