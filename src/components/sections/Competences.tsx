import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { competences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import type { TCompetence } from "../../types";

interface ICompetenceCard extends TCompetence {
  index: number;
}

const CompetenceCard: React.FC<ICompetenceCard> = ({
  index,
  code,
  title,
  description,
  icon,
  color,
}) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="w-full max-w-[250px] xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[320px] flex-col items-center justify-start rounded-[20px] px-6 py-6">
          <img
            src={icon}
            alt={code}
            className="h-16 w-16 object-contain mb-4"
          />

          <h3 className={`text-center text-[24px] font-bold ${color} mb-2`}>
            {code}
          </h3>

          <h4 className="text-center text-[16px] font-semibold text-white mb-3">
            {title}
          </h4>

          <p className="text-secondary text-center text-[12px] leading-relaxed">
            {description.length > 120
              ? `${description.substring(0, 120)}...`
              : description}
          </p>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const Competences = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.competences} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.competences.content}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {competences.map((competence, index) => (
          <CompetenceCard key={competence.code} index={index} {...competence} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Competences, "competences");
