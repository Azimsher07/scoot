import React from "react";
import { Button, Heading4, Paragraph } from "../../../common";

const jobs = [
  {
    job: "General Manager",
    place: "Jakarta, Indonesia",
  },
  {
    job: "UI/UX Designer",
    place: "Yokohama, Japan",
  },
  {
    job: "Blog Content Copywriter",
    place: "New York, United States",
  },
  {
    job: "Graphic Designer",
    place: "New York, United States",
  },
  {
    job: "Fleet Supervisor",
    place: "Jakarta, Indonesia",
  },
  {
    job: "UX Analyst",
    place: "London, United Kingdom",
  },
];

export const Jobs = () => {
  return (
    <div className="dfCol gap-[16px] mb-[120px]">
      {jobs.map((job, i) => (
        <div key={i} className="bg-gr-3 dfCol  text-center p-[32px] ">
          <Heading4>{job.job}</Heading4>
          <Paragraph>{job.place}</Paragraph>
          <div className="pt-[20px]">
            <Button  className="w-[100%] ">
              Apply
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
