import React from "react";
// import ourTech from "../../../../public/images/otherPages/valuesTech.png";
// import ourIntegrity from "../../../../public/images/otherPages/valuesIntegrity.png";
// import ourCommunity from "../../../../public/images/otherPages/valuesCommunity.png";
import { Heading2, Heading4 } from "../heading";
import { Paragraph } from "../paragraph";

const datas = [
  {
    img: "/images/otherPages/valuesTech.png",
    title: "Our tech",
    text: "We’re using cutting edge technology to drive accessible urbantransportation forward. Our fully electric scooters are a joy to ride!",
  },
  {
    img: "/images/otherPages/valuesIntegrity.png",
    title: "Our Integrity",
    text: "We’re using cutting edge technology to drive accessible urbantransportation forward. Our fully electric scooters are a joy to ride!",
  },
  {
    img: "/images/otherPages/valuesCommunity.png",
    title: "Our Community",
    text: "We’re using cutting edge technology to drive accessible urbantransportation forward. Our fully electric scooters are a joy to ride!",
  },
];

export const OurThings = ({ children }) => {
  return (
    <>
      <div className="text-center mb-[50px]">
        <Heading2>{children}</Heading2>
      </div>
      <div className="dfCol gap-[50px] mb-[150px]">
        {datas.map((data, i) => (
          <div key={i} className="dfCenter dfCol gap-[27px] text-center">
            <div className="dfCenter dfCol relative mb-[30px]">
              <img src={data.img} alt="" className="rounded-full" />
              <div className="w-24 h-24 bg-yw rounded-full absolute bottom-[-13%]" />
              <div className="dfCenter z-[1] ">
                <Heading4>0{i + 1}</Heading4>
              </div>
            </div>
            <Heading4>{data.title}</Heading4>
            <Paragraph>{data.text}</Paragraph>
          </div>
        ))}
      </div>
    </>
  );
};
