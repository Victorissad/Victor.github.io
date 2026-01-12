import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { parcours } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TParcours } from "../../types";
import { config } from "../../constants/config";

const ExperienceCard: React.FC<TParcours> = (parcour) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={parcour.date}
      iconStyle={{ background: parcour.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={parcour.icon}
            alt={parcour.institution}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{parcour.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {parcour.institution}
        </p>
        {parcour.location && (
          <p className="text-secondary text-[14px] italic" style={{ margin: 0 }}>
            {parcour.location}
          </p>
        )}
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {parcour.description.map((point, index) => (
          <li
            key={`parcour-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.parcours} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {parcours.map((item, index) => (
            <ExperienceCard key={index} {...item} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "parcours");
