import CourseDetailPage from "@/containers/DetailPage";
import { FC } from "react";

interface PageProps {
  params: {course_index: string;};
}

const CoursesWrapper: FC<PageProps> = ({ params }) => {
  return <CourseDetailPage course_index={params.course_index} />;
};

export default CoursesWrapper;
