import React from "react";

const Card = ({ className, children, onClick }) => (
  <div
    className={`rounded-lg border border-solid border-gray-200 ${className}`}
    style={{
      boxShadow: "0 10px 28px rgba(0,0,0,.08)",
    }}
    onClick={onClick}
  >
    {children}
  </div>
);

export default Card;
