interface bannerProps {
  children: React.ReactNode;
  className?: string;
}

const Banner: React.FC<bannerProps> = ({children, className= ""}) => {
  return (
    <div
      className={`${className} w-full bg-#BEC9E6 bg-linear-to-r from-[#BEC9E6] to-[#EEF2FF] justify-items-center content-center`}
    >
      {children}
    </div>
  );
}

export default Banner