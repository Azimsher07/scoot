import React from "react";
import phoneImg from "../../../../../public/images/otherPages/aboutImages/phone.png";
import cityImg from "../../../../../public/images/otherPages/aboutImages/city.png";
import { Heading2, Paragraph } from "../../../common";

export const AboutInfo = () => {
  return (
    <div className="my-[120px] dfCol gap-[120px] text-center">
      <div className="dfCol gap-[40px]">
        <div className="dfCenter">
          <img src={phoneImg} alt="phone Img" className="rounded-full" />
        </div>
        <Heading2>Mobility for the digital era</Heading2>
        <Paragraph>
          Getting around should be simple (and even fun!) for everyone. We
          embrace technology to provide low cost, smart access to scooters at
          your fingertips.
        </Paragraph>
      </div>
      <div className="dfCol gap-[40px]">
        <div className="dfCenter">
          <img src={cityImg} alt="phone Img" className="rounded-full" />
        </div>
        <Heading2>Better urban living</Heading2>
        <Paragraph>
          We’re helping connect cities and bring people closer together. Our
          scooters are also fully-electric and we offset the minimal carbon
          footprint for each ride.
        </Paragraph>
      </div>
    </div>
  );
};
