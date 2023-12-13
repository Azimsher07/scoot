import React from "react";
import WorldMapSM from "/images/otherPages/LocationImages/mapSM.png";
import WorldMapXL from "/images/otherPages/LocationImages/worldMap.png";
import { Heading3 } from "../../../common";

const cities = ["New York", "London", "Jakarta", "Yokohama"];

export const WorldMap = () => {
  return (
    <div className="my-[70px] lg:xlPadding pt-[100px]">
      <div className="dfCol mb-[40px] ">
        <img
          src={WorldMapSM}
          className="block sm:hidden"
          alt="world map small "
          loading="lazy"
        />
        <img
          src={WorldMapXL}
          className="hidden sm:block"
          alt="world map big"
          loading="lazy"
        />
      </div>
      <div className="dfCol gap-[16px] sm:hidden">
        {cities.map((city, i) => (
          <div key={i} className="w-[100%] py-[22px] bg-[#FFF4DF]  dfCenter">
            <Heading3 className="opacity-[1]">{city}</Heading3>
          </div>
        ))}
      </div>
    </div>
  );
};
