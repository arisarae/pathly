interface buttonProps {
  label: string;
  variant?: "blue" | "white" | "navy";
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<buttonProps> = ({ label, variant = "blue", className = "", onClick }) => {
  const baseStyles =
    "rounded-[8px] h-fit font-inter";

  const variants = {
    blue: "bg-[#445FAC] text-white",
    white: "bg-white text-[#6B7280] border border-[#E5E7EB]",
    navy: "bg-[#26355F] text-white",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  return <button className={combinedStyles} onClick={onClick}>{label}</button>;
};

export default Button;
