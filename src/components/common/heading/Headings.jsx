import React from "react";

export const Heading1 = ({ children, color = true, className }) => {
  let style = "";
  if (color) {
    style = "text-gr  font-mf text-[40px] md:text-[56px] leading-[56px]";
  } else {
    style = "text-wt  font-mf text-[40px] md:text-[56px] leading-[56px]";
  }
  return <h1 className={`${style} ${className}`}>{children}</h1>;
};
export const Heading2 = ({ children, color = true, className }) => {
  let style = "";
  if (color) {
    style = "text-gr  font-mf  text-[32px] md:text-5xl leading-[48px]";
  } else {
    style = "text-wt  font-mf  text-[32px] md:text-5xl leading-[48px]";
  }
  return <h2 className={`${style} ${className}`}>{children}</h2>;
};
export const Heading3 = ({ children, color = true, className }) => {
  let style = "";
  if (color) {
    style = "text-gr  font-mf text-xl md:text-[40px] leading-[48px]";
  } else {
    style = "text-wt  font-mf text-xl md:text-[40px] leading-[48px]";
  }
  return <h3 className={`${style} ${className} opacity-100`}>{children}</h3>;
};
export const Heading4 = ({ children, color = true, className }) => {
  let style = "";
  if (color) {
    style = "text-gr  font-mf text-lg md:text-2xl leading-7";
  } else {
    style = "text-wt  font-mf text-lg md:text-2xl leading-7";
  }
  return <h4 className={`${style} ${className}`}>{children}</h4>;
};
