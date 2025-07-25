import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#445FAC] px-[200px] pt-[100px] pb-[60px] gap-[80px]">
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-col w-[350px] h-fit gap-[35px]">
          <Image
            width={500}
            height={500}
            src="./logo/whiteLogo.svg"
            alt="Pathly"
            style={{
              height: "40px",
              width: "fit-content",
            }}
          />
          <p className="font-semibold text-[20px] text-white/80">
            Navigating Careers with Smart Recommendations
          </p>
        </div>
        <div className="flex flex-col w-[128px] h-fit gap-[20px]">
          <p className="font-semibold text-[20px]">Company</p>
          <div className="flex flex-col w-full h-fit gap-[5px]">
            <a className="text-normal text-[16px]">About Us</a>
            <a className="text-normal text-[16px]">Our Team</a>
            <a className="text-normal text-[16px]">Partners</a>
            <a className="text-normal text-[16px]">For Candidates</a>
            <a className="text-normal text-[16px]">For Employers</a>
          </div>
        </div>
        <div className="flex flex-col w-[150px] h-fit gap-[20px]">
          <p className="font-semibold text-[20px]">Job Categories</p>
          <div className="flex flex-col w-full h-fit gap-[5px]">
            <a className="text-normal text-[16px]">Telecomunications</a>
            <a className="text-normal text-[16px]">Hotels & Tourism</a>
            <a className="text-normal text-[16px]">Construction</a>
            <a className="text-normal text-[16px]">Education</a>
            <a className="text-normal text-[16px]">Financial Services</a>
          </div>
        </div>
        <div className="flex flex-col w-[200px] h-fit gap-[16px]">
          <p className="font-semibold text-[20px]">Contact Us</p>
          <div className="w-full h-fit">
            <p className="text-normal text-[16px] text-white/80">
              Pathly@gmail.com
            </p>
            <p className="text-normal text-[16px] text-white/80">
              +62 234 567 452
            </p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="text-normal text-[14px] text-white/50">
          © Copyright Job Portal 2024. Designed by Figma.guru
        </div>
        <div className="flex flex-row gap-[20px]">
          <p className="text-normal text-[16px] text-white">Privacy Policy</p>
          <p className="text-normal text-[16px] text-white">Term & Condition</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
