import React from "react";
import { Heading1 } from "../heading";

export const CommonHero = ({ children }) => {
  return (
    <div className="bg-oPHeroSM bg-no-repeat bg-cover">
      <div className="bg-gr-4 opacity-80 py-[60px] text-center">
        <Heading1 color={false}>{children}</Heading1>
      </div>
    </div>
  );
};
