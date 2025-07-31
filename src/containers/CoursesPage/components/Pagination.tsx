import React from "react";
import CourseCard from "./CourseCard";
import { CourseWithMeta } from "@/types/course";

interface PaginationProps {
  courses: CourseWithMeta[];
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  courses,
  currentPage,
  onPageChange,
}) => {
  const itemsPerPage = 12;

  if (!courses || courses.length === 0) {
    return (
      <div className="flex-1 p-8">
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-2">No courses found</h3>
          <p className="text-gray-600">
            Try adjusting your filters to see more results
          </p>
        </div>
      </div>
    );
  }

  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCourses = courses.slice(startIndex, endIndex);

  const getPaginationNumbers = (): (number | string)[] => {
    const delta = 2;
    const range: number[] = [];
    const result: (number | string)[] = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      result.push(1, "...");
    } else {
      result.push(1);
    }

    result.push(...range);

    if (currentPage + delta < totalPages - 1) {
      result.push("...", totalPages);
    } else if (totalPages > 1) {
      result.push(totalPages);
    }

    return [...new Set(result)];
  };

  return (
    <div className="flex flex-col p-6 min-w-[446px] 3xl:w-[1107px] 2xl:w-[726px]">
      <div className="w-auto mb-6 flex items-center justify-between min-w-[446px] 3xl:w-[1107px] 2xl:w-[726px]">
        <div>
          <h2 className="text-2xl font-bold mb-1">Recommendations</h2>
          <p className="text-sm text-gray-600">
            Showing {startIndex + 1}-{Math.min(endIndex, courses.length)} of{" "}
            {courses.length} courses
          </p>
        </div>
        {totalPages > 1 && (
          <div className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </div>
        )}
      </div>

      <div className="w-fit flex flex-row flex-wrap gap-[36px] mb-5 min-w-[446px] 3xl:w-[1107px] 2xl:w-[726px] justify-center">
        {currentCourses.map((course, index) => (
          <CourseCard
            key={`${course.title}-${startIndex + index}`}
            recommendation={course}
          />
        ))}
      </div>

      {totalPages > 10 && (
        <div className="mb-7 flex items-center justify-start space-x-2 text-m min-w-[446px] 3xl:w-[1107px] 2xl:w-[726px]">
          <span className="text-gray-600">Quick jump:</span>
          <input
            type="number"
            min="1"
            max={totalPages}
            value={currentPage}
            onChange={(e) => {
              const page = parseInt(e.target.value);
              if (!isNaN(page) && page >= 1 && page <= totalPages) {
                onPageChange(page);
              }
            }}
            className="w-16 px-2 py-1 text-center border border-gray-300 rounded"
          />
          <span className="text-gray-600">of {totalPages}</span>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2 3xl:w-[1107px] 2xl:w-[726px]">
          <button
            onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Previous
          </button>
          <div className="flex space-x-1">
            {getPaginationNumbers().map((pageNum, index) => (
              <React.Fragment key={index}>
                {pageNum === "..." ? (
                  <span className="px-3 py-2 text-sm text-gray-500">...</span>
                ) : (
                  <button
                    onClick={() => onPageChange(pageNum as number)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      currentPage === pageNum
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {pageNum}
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>
          <button
            onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
          >
            Next
            <svg
              className="w-4 h-4 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
