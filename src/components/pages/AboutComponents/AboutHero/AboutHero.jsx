import React from "react";
import { Heading1 } from "../../../common";

export const AboutHero = ({ children }) => {
  return (
    <div className=" bg-aboutHeroSM bg-no-repeat bg-cover ">
      <div className="bg-gr-4 opacity-90 py-[60px] text-center">
        <Heading1 color={false}>{children}</Heading1>
      </div>
    </div>
  );
};
