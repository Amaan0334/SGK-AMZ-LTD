const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-[#C89B3C] text-white hover:bg-[#B8892E] hover:scale-105",
    secondary:
      "border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <button
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;