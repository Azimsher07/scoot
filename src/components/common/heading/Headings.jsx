import React from "react";

export const Heading1 = ({ children, color = true }) => {
  let style = "";
  if (color) {
    style = "text-gr  font-mf text-[40px] md:text-[56px] leading-[56px]";
  } else {
    style = "text-wt  font-mf text-[40px] md:text-[56px] leading-[56px]";
  }
  return <h1 className={style}>{children}</h1>;
};
export const Heading2 = ({ children, color = true }) => {
  let style = "";
  if (color) {
    style = "text-gr  font-mf  text-[32px] md:text-5xl leading-[48px]";
  } else {
    style = "text-wt  font-mf  text-[32px] md:text-5xl leading-[48px]";
  }
  return <h2 className={style}>{children}</h2>;
};
export const Heading3 = ({ children, color = true }) => {
  let style = "";
  if (color) {
    style = "text-gr  font-mf text-lg md:text-[40px] leading-[48px]";
  } else {
    style = "text-wt  font-mf text-lg md:text-[40px] leading-[48px]";
  }
  return <h3 className={style}>{children}</h3>;
};
export const Heading4 = ({ children, color = true }) => {
  let style = "";
  if (color) {
    style = "text-gr  font-mf text-xl md:text-2xl leading-7";
  } else {
    style = "text-wt  font-mf text-xl md:text-2xl leading-7";
  }
  return <h4 className={style}>{children}</h4>;
};
// export const Heading5 = ({ children, color = true }) => {
//   let style = "";
//   if (color) {
//     style = "text-gr  font-mf text-xl leading-7";
//   } else {
//     style = "text-wt  font-mf text-xl leading-7";
//   }
//   return <h4 className={style}>{children}</h4>;
// };
// export const Heading6 = ({ children, color = true }) => {
//   let style = "";
//   if (color) {
//     style = "text-gr  font-mf text-[32px] leading-7";
//   } else {
//     style = "text-wt  font-mf text-[32px] leading-7";
//   }
//   return <h4 className={style}>{children}</h4>;
// };
