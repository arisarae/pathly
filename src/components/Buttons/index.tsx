interface buttonProps {
  label: string;
  variant?: "blue" | "white";
  className?: string;
}

const Button: React.FC<buttonProps> = ({ label, variant = "blue", className = "" }) => {
  const baseStyles =
    "rounded-[8px] font-semibold w-max h-fit font-inter";

  const variants = {
    blue: "bg-[#445FAC] text-[#FFFFFF]",
    white: "bg-[#FFFFFF] text-[#6B7280] border border-[#E5E7EB]",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  return <button className={combinedStyles}>{label}</button>;
};

export default Button;
