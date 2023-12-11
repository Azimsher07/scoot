import React from "react";
import { Heading6 } from "../../../common";
import logoIconGoogle from "/icons/footerIcons/google.svg";
import logoIconApple from "/icons/footerIcons/Group 28.svg";

export const SignIn = () => {
  return (
    <div className="bg-gr text-wt py-[88px] px-[32px] text-center dfCenter dfCol gap-[40px]">
      <Heading6 color={false}>Sign up and Scoot off today</Heading6>
      <div className="flex gap-[15px]">
        <img src={logoIconApple} alt="apple logo" />
        <img src={logoIconGoogle} alt="play market logo" />
      </div>
    </div>
  );
};
