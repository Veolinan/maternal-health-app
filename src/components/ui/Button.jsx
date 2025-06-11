const Button = ({ children, onClick, type = "button", variant = "primary", className = "", ...props }) => {
  const baseStyle = "px-4 py-2 rounded-md text-white transition focus:outline-none focus:ring-2 focus:ring-offset-1";
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-400",
    danger: "bg-red-500 hover:bg-red-600 focus:ring-red-400",
    secondary: "bg-gray-500 hover:bg-gray-600 focus:ring-gray-400",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;