import React from "react";
import { AboutHero, AboutInfo } from "../../components/pages/AboutComponents";

export const About = () => {
  return (
    <div>
      <AboutHero>About</AboutHero>
      <div className="smPadding">
        <AboutInfo />
      </div>
    </div>
  );
};
