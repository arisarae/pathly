import CourseDetailPage from "@/containers/DetailPage";

interface PageProps {
  params: Promise<{ course_index: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function CoursesWrapper({ params }: PageProps) {
  const { course_index } = await params;
  return <CourseDetailPage course_index={course_index} />;
};


