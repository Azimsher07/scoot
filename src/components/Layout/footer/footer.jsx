import React from "react";
import { Logo } from "/public/icons/logo";
import { NavLink } from "react-router-dom";
import { Paragraph, SignIn } from "../../common";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <SignIn />
      <footer className="bg-gr-5 py-[60px] px-[40px] dfCenter dfCol gap-[40px] sm:dfRow sm:justify-between ">
        <div className="dfCol gap-[40px] sm:dfRow">
          <Logo color={false} />

          <div className="dfCenter dfCol sm:dfRow gap-[16px]">
            <NavLink to="/about">
              <Paragraph type={3}>About</Paragraph>
            </NavLink>
            <NavLink to="/location">
              <Paragraph type={3}>Location</Paragraph>
            </NavLink>
            <NavLink to="/careers">
              <Paragraph type={3}>Careers</Paragraph>
            </NavLink>
          </div>
        </div>
        <div className="dfCenter  gap-[30px]">
          <FaFacebookSquare size={30} className="text-yw" />
          <FaTwitter size={30} className="text-yw" />
          <FaInstagram size={30} className="text-yw" />
        </div>
      </footer>
    </>
  );
};
