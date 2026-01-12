import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const CV = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.cv} />

      <div className="mt-12 flex flex-col items-center gap-8">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-center text-[17px] leading-[30px] max-w-3xl"
        >
          Mon CV complet est disponible au téléchargement. Il détaille mon
          parcours académique, mon expérience professionnelle chez MTB111, mes
          compétences techniques, et mes certifications.
        </motion.p>

        <motion.div
          variants={fadeIn("", "", 0.2, 1)}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href="/cv-victor-issad.pdf"
            download
            className="bg-tertiary hover:bg-secondary flex items-center gap-3 rounded-xl px-8 py-4 font-bold text-white shadow-md transition-all duration-300 hover:scale-105"
          >
            <span className="text-2xl">📥</span>
            <span>Télécharger le CV (PDF)</span>
          </a>

          <a
            href="https://linkedin.com/in/victorissad"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-tertiary hover:bg-secondary flex items-center gap-3 rounded-xl px-8 py-4 font-bold text-white shadow-md transition-all duration-300 hover:scale-105"
          >
            <span className="text-2xl">🔗</span>
            <span>Voir sur LinkedIn</span>
          </a>

          <a
            href="https://github.com/Victorissad"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-tertiary hover:bg-secondary flex items-center gap-3 rounded-xl px-8 py-4 font-bold text-white shadow-md transition-all duration-300 hover:scale-105"
          >
            <span className="text-2xl">💻</span>
            <span>GitHub Portfolio</span>
          </a>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.3, 1)}
          className="bg-tertiary mt-8 w-full max-w-4xl rounded-2xl p-8 shadow-card"
        >
          <h3 className="mb-6 text-center text-2xl font-bold text-white">
            Résumé
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-secondary mb-3 text-lg font-semibold">
                Formation
              </h4>
              <ul className="text-secondary space-y-2 text-sm">
                <li>• BTS SIO SLAM - 3IFA (2023-2025)</li>
                <li>• L1 LEA - Université (2021-2022)</li>
                <li>• Baccalauréat Général (2021)</li>
              </ul>
            </div>

            <div>
              <h4 className="text-secondary mb-3 text-lg font-semibold">
                Expérience
              </h4>
              <ul className="text-secondary space-y-2 text-sm">
                <li>• Développeur - MTB111 by Creative</li>
                <li>• Projet Structur'All (Legacy modernization)</li>
                <li>• Alternance depuis Sept. 2023</li>
              </ul>
            </div>

            <div>
              <h4 className="text-secondary mb-3 text-lg font-semibold">
                Compétences Techniques
              </h4>
              <ul className="text-secondary space-y-2 text-sm">
                <li>• Java, Spring Boot, Maven</li>
                <li>• Android (Java, SQLite)</li>
                <li>• PHP/Laravel, MySQL</li>
                <li>• React, TypeScript, Three.js</li>
              </ul>
            </div>

            <div>
              <h4 className="text-secondary mb-3 text-lg font-semibold">
                Langues
              </h4>
              <ul className="text-secondary space-y-2 text-sm">
                <li>• Français (Natif)</li>
                <li>• Anglais (Courant)</li>
                <li>• Allemand (Intermédiaire)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(CV, "cv");
