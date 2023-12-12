import React from "react";
import { Jobs, OurMission } from "../../components/pages/CareersComponent";
import { CommonHero, OurThings } from "../../components/common";

export const Careers = () => {
  return (
    <section>
      <CommonHero>Careers</CommonHero>
      <div className="smPadding">
        <OurMission />
        <OurThings>Why join us?</OurThings>
        <Jobs />
      </div>
    </section>
  );
};
