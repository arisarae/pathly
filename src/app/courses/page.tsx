import { Suspense } from "react";
import CoursesPage from "@/containers/CoursesPage";

export default function CoursesWrapper() {
  return (
    <Suspense fallback={<div className="p-8">Loading courses...</div>}>
      <CoursesPage />
    </Suspense>
  );
}