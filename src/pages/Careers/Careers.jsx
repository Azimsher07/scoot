import React from "react";
import { Jobs, OurMission } from "../../components/pages/CareersComponent";
import { CommonHero, OurThings } from "../../components/common";

export const Careers = () => {
  return (
    <section>
      <CommonHero>Careers</CommonHero>
      <div className="smPadding">
        <div className=" sm:mdPadding md:lgPadding lg:xlPadding">
          <OurMission />
          <OurThings>Why join us?</OurThings>
        </div>
        <Jobs />
      </div>
    </section>
  );
};
