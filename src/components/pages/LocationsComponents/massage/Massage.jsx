import React from "react";
import { Button, Heading2, Paragraph } from "../../../common";

export const Massage = () => {
  return (
    <div className="dfCol items-center text-center gap-[32px] mb-[72px] sm:mdPadding md:lgPadding lg:xlPadding lg:dfRow lg:text-left">
      <Heading2>Your City Not Listed?</Heading2>
      <Paragraph>
        If you’d like to see Scoot in your hometown, be sure to let us know. We
        track requests and plan launches based on demand. Feel free to message
        us by clicking the link or messaging us on social.
      </Paragraph>
      <Button className=" px-[40px]">Message Us</Button>
    </div>
  );
};
