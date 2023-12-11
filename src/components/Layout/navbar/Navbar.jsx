import React, { useState } from "react";
import { Button, NavP } from "../../common";
import { Logo } from "/public/icons/logo";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [menu_bg_class, setMenuBgClass] = useState("menuBg hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass(" visible menu");
      setMenuBgClass("menuBg visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
      setMenuBgClass("menuBg hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="dfBetween px-[30px] w-[100%]  md:px-[40px] lg:px-[165px] py-[22px]">
      <div className="dfBetween gap-[60px] hidden md:flex  ">
        <div className="flex items-center sm:flex justify-between ">
          <div className="block md:hidden ">
            <nav>
              <div className="burger-menu" onClick={updateMenu}>
                <div className={`bar_1  ${burger_class}`}></div>
                <div className={`bar_2  ${burger_class}`}></div>
                <div className={`bar_3  ${burger_class}`}></div>
              </div>
            </nav>

            <div className={menu_class}>
              <div>
                <div>
                  <NavLink to="/home">
                    <NavP>Home</NavP>
                  </NavLink>
                  <NavLink to="/about">
                    <NavP>About</NavP>
                  </NavLink>
                  <NavLink to="/location">
                    <NavP>Location</NavP>
                  </NavLink>
                  <NavLink to="/careers">
                    <NavP>Careers</NavP>
                  </NavLink>
                </div>
                <Button>Get Scootin</Button>
              </div>
            </div>
            <div className={menu_bg_class}> </div>
          </div>

          <div className="absolute z-[-2] right-[50%] translate-x-[50%] md:static md:translate-x-0">
            <Logo color={true} />
          </div>

          <div className="block md:hidden "></div>
        </div>

        <div className="hidden  md:block">
          <div className="dfCenter gap-[32px]  ">
            <NavLink to="/about">
              <NavP>About</NavP>
            </NavLink>
            <NavLink to="/location">
              <NavP>Location</NavP>
            </NavLink>
            <NavLink to="/careers">
              <NavP>Careers</NavP>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <Button>Get Scootin</Button>
      </div>
    </div>
  );
};
