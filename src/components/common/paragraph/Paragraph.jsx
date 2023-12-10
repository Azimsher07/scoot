import React from "react";

export const Paragraph = ({ children, type = 1 }) => {
  const classNamer = "text-gr text-[15px] font-normal font-sf leading-[25px]";
  return <p className={type === 1 && classNamer}>{children}</p>;
};
export const NavP = ({ children }) => {
  return (
    <p className="text-gr text-[15px] font-normal font-sf leading-[25px] transition-all border-b-2 hover:border-yw hover:text-yw   ">
      {children}
    </p>
  );
};
