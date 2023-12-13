import React from "react";
import manImg from "/images/otherPages/CareersImages/man.png";
import { Button, Heading2, Paragraph } from "../../../common";

export const OurMission = () => {
  return (
    <div>
      <div className="py-[120px] dfCol dfCenter text-center gap-[32px] lg:flex-row-reverse lg:text-left ">
        <img src={manImg} className="rounded-full mb-[30px]" alt="man" />
        <div className="dfCol dfCenter gap-[32px] lg:items-start ">
          <Heading2>Care to join our mission?</Heading2>
          <Paragraph>
            We’re always looking for ambitious individuals to help us on our
            journey. If you’re passionate about our mission to provide clean,
            accessible transport to improve urban living we want to hear from
            you!
          </Paragraph>
          <Button>Say Hello</Button>
        </div>
      </div>
    </div>
  );
};
