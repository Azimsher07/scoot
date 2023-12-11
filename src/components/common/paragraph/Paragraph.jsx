import React from "react";

export const Paragraph = ({ children, type = 1 }) => {
  const classNamerGR = "text-gr text-[15px] font-normal font-sf leading-[25px]";
  const classNamerWT = "text-wt text-[15px] font-normal font-sf leading-[25px]";
  const classNamerGR2 =
    "text-gr-1 text-[15px] font-normal font-sf leading-[25px]";
  return (
    <p
      className={
        (type === 1 && classNamerGR) ||
        (type === 2 && classNamerWT) ||
        (type === 3 && classNamerGR2)
      }
    >
      {children}
    </p>
  );
};
export const NavP = ({ children }) => {
  return (
    <p className="text-gr text-[15px] font-normal font-sf leading-[25px] transition-all border-b-2 hover:border-yw hover:text-yw   ">
      {children}
    </p>
  );
};
