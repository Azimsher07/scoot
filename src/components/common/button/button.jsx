import React from "react";

export const Button = ({ children, className }) => {
  return (
    <button
      className={`font-mf text-wt bg-yw  h-[50px] hover:border-[2px] transition  hover:text-yw hover:bg-wt border-yw  ${className} `}
    >
      {children}
    </button>
  );
};
// font-mf text-wt bg-yw  h-[50px] hover:border-[2px] transition  hover:text-yw hover:bg-wt border-yw
