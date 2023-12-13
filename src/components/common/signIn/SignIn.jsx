import React from "react";
import logoIconGoogle from "/icons/footerIcons/google.svg";
import logoIconApple from "/icons/footerIcons/Group 28.svg";
import { Heading2 } from "../heading";

export const SignIn = () => {
  return (
    <div className="bg-gr text-wt py-[88px] px-[32px] text-center dfCenter dfCol gap-[40px] lg:dfRow lg:justify-between lg:text-left">
      <Heading2 color={false}>
        Sign up and <br className="hidden md:block" /> Scoot off today
      </Heading2>
      <div className="flex gap-[15px]  ">
        <img src={logoIconApple} alt="apple logo" />
        <img src={logoIconGoogle} alt="play market logo" />
      </div>
    </div>
  );
};
