import Image from "next/image";
import Link from "next/link";

export default function SignInWrapper() {
  return (
    <main className="h-screen w-screen flex flex-row">
      <div className="text-center w-[50vw] p-[48px] bg-conic from-[#445FAC] to-[#7E92CC] content-center justify-items-center font-inter">
        <div className="w-fit h-fit mb-[20px]">
          <p className="text-[#E0E7FF] text-[16px] font-inter font-medium mb-[3px]">
            Welcome Back to
          </p>
          <Image
            width={500}
            height={500}
            src="/logo/whiteLogo.svg"
            alt="Pathly"
            style={{
              height: "38px",
              width: "fit-content",
            }}
          />
        </div>
        <div className="max-w-[400px]">
          <h2 className="text-[#E0E7FF] text-[28px] font-inter font-semibold mb-[10px]">
            Continue your journey
          </h2>
          <p className="text-[#C7D2FE] text-[16px] font-inter font-normal">
            {`Sign in to access your personalized dashboard\nand continue where you left off.`}
          </p>
        </div>
      </div>
      <div className="w-[50vw] p-[48px] font-geologica content-center justify-items-center text-center">
        <h1 className="font-medium text-[#22315D] text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4">
          Sorry, this feature is currently unavailable.
        </h1>
        <Link
          href="/"
          className="font-extralight text-[#6B7280] text-base md:text-lg lg:text-xl underline underline-offset-2"
        >
          {`Return back home >`}
        </Link>
      </div>
    </main>
  );
}
