"use client";
import Image from "next/image";
import Button from "@/components/Buttons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const currentPath = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const storedStatus = localStorage.getItem("users");
    setIsLoggedIn(storedStatus === "true");
  }, []);

  const tabs = [
    { name: "Home", href: "/" },
    { name: "Assessment", href: "/assessment" },
    { name: "Explore Careers", href: "/careers" },
    { name: "Courses", href: "/courses" },
  ];

  return (
    <nav className="w-screen h-[80px] px-[120px] py-[16px] bg-background text-[#6B7280] text-base font-inter flex flex-row justify-between items-center sticky top-0 z-50">
      <Link href={"/"} className="w-fit">
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
      </Link>
      <div className="w-fit h-fit flex flex-row items-center gap-[32px] text-center">
        {tabs.map((tab, index) => (
          <li key={index} className="list-none">
            <Link
              href={tab.href}
              className={`${
                currentPath === tab.href ? "text-[#445FAC]" : "text-[#6B7280]"
              } w-fit h-fit`}
            >
              {tab.name}
            </Link>
          </li>
        ))}
      </div>
      <div className="w-[205px] h-fit flex flex-row items-center justify-end gap-[12px]">
        {isLoggedIn ? (
          <>
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
          </>
        ) : (
          <>
            <div className="w-[205px] h-fit flex flex-row items-center justify-end gap-[12px]">
              <Link href={"/auth/signin"}>
                <Button
                  variant="white"
                  label="Sign In"
                  className="w-max px-[16px] py-[12px] text-[14px] font-semibold"
                />
              </Link>
              <Link href={"/auth/signup"}>
                <Button
                  variant="blue"
                  label="Get Started"
                  className="w-max px-[16px] py-[12px] text-[14px] font-semibold"
                />
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
