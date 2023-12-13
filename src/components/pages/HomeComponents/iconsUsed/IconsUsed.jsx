import React from "react";
import { Heading4, Paragraph } from "../../../common";

const data = [
  {
    title: "Locate with app",
    icon: "/icons/homeIcons/phone.svg",
    text: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. ",
  },
  {
    title: "Pick your scooter",
    icon: "/icons/homeIcons/scooter.svg",
    text: "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
  },
  {
    title: "Enjoy the ride",
    icon: "/icons/homeIcons/manInScooter.svg",
    text: "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.",
  },
];

export const IconsUsed = () => {
  return (
    <div className="dfCol gap-y-[50px] py-[120px] md:dfRow md:gap-[30px]">
      {data.map((box, i) => (
        <div
          key={i}
          className="dfCol dfCenter text-center sm:dfRow sm:gap-[80px] sm:text-left md:dfCol md:items-start md:justify-start   "
        >
          <img src={box.icon} alt="icon" />
          <div>
            <Heading4>{box.title}</Heading4>
            <Paragraph>{box.text}</Paragraph>
          </div>
        </div>
      ))}
    </div>
  );
};
