import Button from "../../../components/Buttons";
import { CourseWithMeta } from "@/types/course";

interface cardProps {
  recommendation: CourseWithMeta;
}

const CourseCard: React.FC<cardProps> = ({ recommendation }) => {
  return (
    <div className="w-[345px] h-fit text-black font-geologica">
      <div className="w-full h-fit min-h-[140px] p-[20px] bg-white rounded-t-[14px] border border-[#445FAC] border-b-[0px] flex flex-col gap-[10px] justify-center">
        <p className="text-[20px] font-medium">{recommendation?.title}</p>
        <p className="text-[18px] font-extralight">
          {recommendation.subcategory}
        </p>
      </div>
      <div className="w-full h-[200px] p-[21px] rounded-b-[8px] flex flex-col justify-between bg-[#7E92CC]">
        <div className="flex flex-row gap-[50px]">
          <div className="w-[130px]">
            <p className="text-[#111827] text-[16px] font-extralight">Level</p>
            <p className="text-[20px] font-normal">{recommendation?.level}</p>
          </div>
          <div>
            <p className="text-[#111827] text-[16px] font-extralight">
              Duration
            </p>
            <p className="text-[20px] font-normal">
              {recommendation?.duration}
            </p>
          </div>
        </div>
        <Button
          variant="navy"
          label="Details >"
          className="rounded-full w-fill p-[5px]"
        />
      </div>
    </div>
  );
};

export default CourseCard;
