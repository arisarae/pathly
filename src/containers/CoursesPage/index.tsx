"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AuthNavbar from "@/components/Navbar/Auth";
import Footer from "@/components/Footer";
import Filter from "@/containers/CoursesPage/components/Filter";
import Pagination from "@/containers/CoursesPage/components/Pagination";
import coursesData from "@/data/Course";
import { CourseWithMeta } from "@/types/course";
import Banner from "@/components/Banner";

type FilterState = {
  Type: string[];
  Interest: string[];
  "Difficulty Level": string[];
};

const getAllCourses = (): CourseWithMeta[] => {
  return Object.entries(coursesData).flatMap(([category, subcats]) =>
    Object.entries(subcats).flatMap(([subcat, courses]) =>
      courses.map((course) => ({
        ...course,
        category,
        subcategory: subcat,
      }))
    )
  );
};

export default function CoursesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const allCourses = useMemo(() => getAllCourses(), []);

  const currentFilters: FilterState = useMemo(
    () => ({
      Type: searchParams.getAll("type"),
      Interest: searchParams.getAll("interest"),
      "Difficulty Level": searchParams.getAll("level"),
    }),
    [searchParams]
  );

  const currentPage = parseInt(searchParams.get("page") || "1");

  const filterOptions = useMemo(() => {
    const getUnique = (key: keyof CourseWithMeta): string[] =>
      [...new Set(allCourses.map((course) => course[key]))].filter(
        (value): value is string => typeof value === "string"
      );

    return {
      Type: getUnique("Certificate_Type"),
      Interest: getUnique("subcategory"),
      "Difficulty Level": getUnique("Level"),
    };
  }, [allCourses]);

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const { Type, Interest, "Difficulty Level": Level } = currentFilters;
      const matchesType =
        Type.length === 0 || Type.includes(course.Certificate_Type);
      const matchesInterest =
        Interest.length === 0 || Interest.includes(course.subcategory);
      const matchesLevel = Level.length === 0 || Level.includes(course.Level);
      return matchesType && matchesInterest && matchesLevel;
    });
  }, [allCourses, currentFilters]);

  const handleFilterChange = (newFilters: FilterState) => {
    const params = new URLSearchParams();
    newFilters.Type.forEach((type) => params.append("type", type));
    newFilters.Interest.forEach((interest) =>
      params.append("interest", interest)
    );
    newFilters["Difficulty Level"].forEach((level) =>
      params.append("level", level)
    );
    params.set("page", "1"); // reset to first page
    router.push(`?${params.toString()}`);
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      <AuthNavbar />
      <Banner label={"Explore your Course\nin Here!"} className="h-[257px]" />
      <main className="flex flex-row gap-[60px] p-[80px]">
        <Filter
          filters={currentFilters}
          setFilters={handleFilterChange}
          filterOptions={filterOptions}
        />
        <Pagination
          courses={filteredCourses}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </main>
      <Footer />
    </div>
  );
}
