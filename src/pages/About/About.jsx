import React from "react";
import {
  AboutHero,
  AboutInfo,
  FAQs,
} from "../../components/pages/AboutComponents";
import { OurThings } from "../../components/common";

export const About = () => {
  return (
    <div>
      <AboutHero>About</AboutHero>
      <div className=" smPadding sm:mdPadding md:lgPadding lg:xlPadding">
        <AboutInfo />
        <OurThings>Our values</OurThings>
        <FAQs />
      </div>
    </div>
  );
};
