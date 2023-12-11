import React from "react";
import { AboutHero, AboutInfo } from "../../components/pages/AboutComponents";
import { OurThings } from "../../components/common";

export const About = () => {
  return (
    <div>
      <AboutHero>About</AboutHero>
      <div className="smPadding">
        <AboutInfo />
        <OurThings>Our values</OurThings>
        
      </div>
    </div>
  );
};
