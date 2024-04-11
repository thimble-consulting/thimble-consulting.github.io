import React from "react";

const sizes = {
  default: `py-3 px-4`,
  lg: `py-4 px-8`,
  xl: `py-5 px-12 text-lg`,
};

const Button = ({ children, className = "", size }) => {
  return (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-primary-darker
        hover:bg-primary
        rounded
        text-white
    `}
    >
      {children}
    </button>
  );
};

export default Button;
