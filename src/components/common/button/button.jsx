import React from "react";

export const Button = ({ children }) => {
  return (
    <button className="font-mf text-wt bg-yw w-[180px] h-[50px] hover:border-[2px] transition  hover:text-yw hover:bg-wt border-yw  ">
      {children}
    </button>
  );
};
