import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import coursesData from "@/data/Course";
import Banner from "@/components/Banner";
import Button from "@/components/Buttons";
import { CourseWithMeta } from "@/types/course";
import Image from "next/image";
import Link from "next/link";

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

export default function CourseDetailPage({ course_index }: {course_index: string}) {
  const id = parseInt(course_index);
  const course = getAllCourses().find((c) => c.course_index === id);

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <div className="">
      <Navbar />
      <main>
        <Banner className="min-h-[257px] h-fit">
          <div className=" flex flex-row px-[120px] w-screen h-fit justify-between items-center">
            <div className="flex flex-col w-fit h-fit gap-[7px]">
              <div className="bg-white w-fit h-fit px-[25px] text-[#354A86] font-semibold font-inter text-[16px] rounded-[14px]">
                {course.certificate_type}
              </div>
              <h1 className="font-geologica font-bold text-[36px] text-black">
                {course.title}
              </h1>
              <div className="flex flex-row gap-[20px]">
                <div className="flex flex-row gap-[7px]">
                  <Image
                    width={500}
                    height={500}
                    src="/icons/star.svg"
                    alt="Rating"
                    style={{
                      height: "20px",
                      width: "fit-content",
                    }}
                  />
                  <p>
                    {course.rating} ({course.reviews})
                  </p>
                </div>
                <div className="flex flex-row gap-[7px]">
                  <Image
                    width={500}
                    height={500}
                    src="/icons/level.svg"
                    alt="Level"
                    style={{
                      height: "20px",
                      width: "fit-content",
                    }}
                  />
                  <p>{course.level}</p>
                </div>
                <div className="flex flex-row gap-[7px]">
                  <Image
                    width={500}
                    height={500}
                    src="/icons/time.svg"
                    alt="Duration"
                    style={{
                      height: "20px",
                      width: "fit-content",
                    }}
                  />
                  <p>{course.duration}</p>
                </div>
              </div>
            </div>
            <Link href={course.course_link}>
              <Button
                label="Go to Course"
                className="py-[18px] px-[25px] rounded-[14px] text-[20px] font-semibold"
              />
            </Link>
          </div>
        </Banner>
        <div className="h-fit flex flex-col gap-[24px] px-[100px] py-[60px]">
          <div className="w-fill h-fit space-y-[10px]">
            <h2 className="text-black font-medium font-geologica text-[24px]">
              Key Skill You Will Gain
            </h2>
            <div className="flex flex-row flex-wrap gap-[8px]">
              {course.skills_clean_list.map((skill, index) => (
                <div key={index} className="bg-[#D9E3FF] w-fit h-fit px-[25px] rounded-[14px] text-[#445FAC] font-normal font-inter text-[16px]">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="p-[24px] h-fit flex flex-col gap-[8px] rounded-[24px] shadow-[0_0_8px_rgba(0,0,0,0.15)]">
            <h2 className="text-black font-medium font-geologica text-[24px]">
              Course Summary
            </h2>
            <p className="text-black font-normal font-inter text-[16px]">
              {course.skills_clean}
            </p>
          </div>
        </div>
        <div className="h-fit flex flex-col items-center gap-[24px] py-[75px] bg-[#E7EEFF]">
          <h2 className="w-fit text-black font-medium font-geologica text-[30px]">
            Ready to Upskill?
          </h2>
          <p className="w-fit text-black font-normal font-inter text-[16px] whitespace-pre-line">
            {`Start mastering ${
              course.title
            } and gain\nhands-on experience in ${course.subcategory.toLowerCase()}.`}
          </p>
          <Link href={course.course_link}>
            <Button
              label="Start Learning"
              className="h-fit w-fit py-[18px] px-[25px] rounded-[14px] text-[20px] font-semibold"
            />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
