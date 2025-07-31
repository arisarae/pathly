import Image from "next/image";

const AuthNavbar = () => {
  return (
    <nav className="w-screen h-[80px] px-[120px] py-[16px] bg-background text-[#6B7280] text-base font-inter flex flex-row justify-between items-center sticky top-0 z-50">
      <Image
        width={500}
        height={500}
        src="/logo/coloredLogo.svg"
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
        <Image
          width={500}
          height={500}
          src="/icons/bell.svg"
          alt="Notification"
          style={{
            height: "24px",
            width: "24px",
          }}
        />
        <div>
          <div className="w-fit h-fit">Profile</div>
        </div>
      </div>
    </nav>
  );
};

export default AuthNavbar