import React from "react";
import phoneImg from "/images/otherPages/aboutImages/phone.png";
import cityImg from "/images/otherPages/aboutImages/city.png";
import { Heading2, Paragraph } from "../../../common";

export const AboutInfo = () => {
  return (
    <div className="my-[120px] dfCol gap-[120px] text-center lg:text-left">
      <div className="dfCenter dfCol lg:flex-row-reverse gap-[40px] lg:gap-[150px] ">
        <div className="dfCenter  ">
          <img
            src={phoneImg}
            alt="phone Img"
            className=" lg:min-w-[400px] rounded-full "
          />
        </div>
        <div className="dfCol  gap-[40px]">
          <Heading2>Mobility for the digital era</Heading2>
          <Paragraph>
            Getting around should be simple (and even fun!) for everyone. We
            embrace technology to provide low cost, smart access to scooters at
            your fingertips.
          </Paragraph>
        </div>
      </div>
      <div className="dfCenter dfCol lg:dfRow  gap-[40px] lg:gap-[150px] ">
        <div className="dfCenter">
          <img
            src={cityImg}
            alt="phone Img"
            className="lg:min-w-[400px] rounded-full"
          />
        </div>
        <div className="dfCol  gap-[40px]">
          <Heading2>Better urban living</Heading2>
          <Paragraph>
            We’re helping connect cities and bring people closer together. Our
            scooters are also fully-electric and we offset the minimal carbon
            footprint for each ride.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};
