import React from "react";
import { Button, Heading6, Paragraph } from "../../../common";

const data = [
  {
    img: "/images/homeImages/man.png",
    title: "Easy to use riding telemetry",
    text: "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
  },
  {
    img: "/images/homeImages/city.png",
    title: "Coming to a city near you",
    text: "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
  },
  {
    img: "/images/homeImages/wallet.png",
    title: "Zero hassle payments",
    text: "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
  },
];

export const ImagesUsed = () => {
  return (
    <div className="dfCol gap-[120px]">
      {data.map((box, i) => (
        <div key={i} className="dfCol gap-[56px]">
          <img src={box.img} className="rounded-full" alt="image" />
          <div className="dfCol dfCenter gap-[32px] text-center">
            <Heading6>{box.title}</Heading6>
            <Paragraph>{box.text}</Paragraph>
            <Button>Learn More</Button>
          </div>
        </div>
      ))}
    </div>
  );
};
