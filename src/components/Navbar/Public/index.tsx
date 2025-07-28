import Image from "next/image";
import Button from "@/components/Buttons";

const PublicNavbar = () => {
  return (
    <nav className="w-screen h-[80px] px-[120px] py-[16px] bg-background text-[#6B7280] text-base font-inter flex flex-row justify-between items-center sticky top-0">
      <Image
        width={500}
        height={500}
        src="./logo/coloredLogo.svg"
        alt="Pathly"
        style={{
          height: "35px",
          width: "fit-content",
        }}
      />
      <div className="w-fit h-fit flex flex-row items-center gap-[32px] text-center">
        <a className="w-fit h-fit">Home</a>
        <a className="w-fit h-fit">Assesment</a>
        <a className="w-max h-fit">Explore Carrers</a>
        <a className="w-fit h-fit">Courses</a>
      </div>
      <div className="w-fit h-fit flex flex-row items-center gap-[12px]">
        <Button
          variant="white"
          label="Sign In"
          className="w-max px-[16px] py-[12px] text-[14px] font-semibold"
        />
        <Button
          variant="blue"
          label="Get Started"
          className="w-max px-[16px] py-[12px] text-[14px] font-semibold"
        />
      </div>
    </nav>
  );
};

export default PublicNavbar