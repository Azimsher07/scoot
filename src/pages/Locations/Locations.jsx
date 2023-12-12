import React from "react";
import { CommonHero } from "../../components/common";
import { WorldMap } from "../../components/pages/LocationsComponents";

export const Locations = () => {
  return (
    <div>
      <CommonHero>Locations</CommonHero>
      <div className="smPadding">
        <WorldMap />
      </div>
    </div>
  );
};
