import React, { useState } from "react";
import { Button, NavP } from "../../common";
import { Logo } from "/public/icons/logo";

export const Navbar = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
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
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
              </div>
            </nav>

            <div className={menu_class}></div>
          </div>

          <div className="absolute right-[50%] translate-x-[50%] md:static md:translate-x-0">
            <Logo color={true} />
          </div>

          <div className="block md:hidden "></div>
        </div>

        <div className="hidden  md:block">
          <div className="dfCenter gap-[32px]  ">
            <NavP>About</NavP>
            <NavP>Location</NavP>
            <NavP>Careers</NavP>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <Button>Get Scootin</Button>
      </div>
    </div>
  );
};
