import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

import { SlArrowDown } from "react-icons/sl";
import { Heading2, Heading3, Heading4, Paragraph } from "../../../common";

const items1 = [
  {
    name: "How do I download the app?",
    text: "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
  {
    name: "Can I find a nearby Scoots?",
    text: "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
  {
    name: "Do I need a license to ride?",
    text: "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
];

const items2 = [
  {
    name: "Should I wear a helmet?",
    text: "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
  },
  {
    name: "How about the rules & regulations?",
    text: "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
  },
  {
    name: "What if I damage my Scoot?",
    text: "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
  },
];

export const FAQs = () => {
  return (
    <div className="mb-[120px]">
      <div className="text-center">
        <Heading2>FAQs</Heading2>
      </div>

      <Accordion allowZeroExpanded className="my-[50px] dfCol lg:gap-[64px]">
        <div className="lg:dfRow lg:justify-between">
          <div className="text-center mb-[32px] ">
            <Heading4>How it works</Heading4>
          </div>
          <div className="dfCol gap-[16px] lg:w-[600px]">
            {items1.map((item, i) => (
              <AccordionItem key={i} className="p-[32px] pb-[8px] bg-gr-3 ">
                <AccordionItemHeading>
                  <AccordionItemButton className="mb-[24px] dfBetween">
                    <Heading4>{item.name}</Heading4>
                    <SlArrowDown className="text-yw text-2xl " />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="bg-gr-3">
                  <Paragraph>{item.text}</Paragraph>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </div>
        </div>

        <div className="lg:dfRow lg:justify-between">
          <div className="text-center my-[32px]">
            <Heading4>Safe driving</Heading4>
          </div>
          <div className="dfCol gap-[16px] lg:w-[600px]">
            {items2.map((item, i) => (
              <AccordionItem key={i} className="p-[32px] pb-[8px] bg-gr-3 ">
                <AccordionItemHeading>
                  <AccordionItemButton className="mb-[24px] dfBetween ">
                    <Heading4>{item.name}</Heading4>
                    <SlArrowDown className="text-yw text-2xl " />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="bg-gr-3">
                  <Paragraph>{item.text}</Paragraph>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </div>
        </div>
      </Accordion>
    </div>
  );
};
