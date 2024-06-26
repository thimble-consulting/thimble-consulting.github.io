import React from "react";

const sizes = {
  default: `py-3 px-4`,
  lg: `py-4 px-8`,
  xl: `py-5 px-12 text-lg`,
};

const Button = ({ children, className = "", size, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-thimble
        hover:bg-thimble-darker
        rounded
        text-white
    `}
    >
      {children}
    </button>
  );
};

export default Button;
