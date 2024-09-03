import React from "react";

const Card = ({ className, children }) => (
  <div
    className={`rounded-lg border border-solid border-gray-200 ${className}`}
  >
    {children}
  </div>
);

export default Card;
