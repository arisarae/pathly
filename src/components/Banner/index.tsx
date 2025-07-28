interface bannerProps {
    label: string;
  className?: string;
}

const Banner: React.FC<bannerProps> = ({label, className= ""}) => {
  return (
    <div
      className={`${className} w-full bg-#BEC9E6 bg-linear-to-r from-[#BEC9E6] to-[#EEF2FF] justify-items-center content-center`}
    >
      <p className="text-center font-geologica font-normal text-[36px] text-black whitespace-pre-line">
        {label}
      </p>
    </div>
  );
}

export default Banner