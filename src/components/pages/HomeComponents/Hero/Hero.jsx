import React from "react";
import { Button, Heading3, Paragraph } from "../../../common";

export const Hero = () => {
  return (
    <>
      <div className="bg-hero  bg-no-repeat bg-cover bg-right">
        <div className="w-full  bg-gr-4 opacity-[0.75] py-[115px] md:py-[140px] lg:py-[150px]">
          <div className="text-center px-[100px]  lg:pl-[165px] lg:text-left ">
            <Heading3 color={false}>
              Scooter sharing <br className="hidden md:block " /> made simple
            </Heading3>
            <div className="pt-[25px] pb-[35px] lg:w-[400px] lg:text-left lg:ml-[95px] ">
              <Paragraph type={false}>
                Scoot takes the hassle out of urban mobility. Our bikes are
                placed in convenient locations in each of our cities. Use our
                app to locate the nearest bike, unlock it with a tap, and you’re
                away!
              </Paragraph>
            </div>
            <Button>Get Scootin</Button>
          </div>
        </div>
      </div>
    </>
  );
};
