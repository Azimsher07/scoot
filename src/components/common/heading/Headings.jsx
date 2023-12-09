import React from "react";

export const Heading1 = ({ children }) => {
  return (
    <h1 className="text-gr font-mf text-[56px] leading-[56px]">{children}</h1>
  );
};
export const Heading2 = ({ children }) => {
  return (
    <h2 className="text-gr font-mf text-5xl leading-[48px]">{children}</h2>
  );
};
export const Heading3 = ({ children }) => {
  return (
    <h3 className="text-gr font-mf text-[40px] leading-[48px] ">
      {children}
    </h3>
  );
};
export const Heading4 = ({ children }) => {
  return <h4 className="text-gr font-mf text-2xl leading-7">{children}</h4>;
};
