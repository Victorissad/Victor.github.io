import React, { useState } from "react";
import { motion } from "framer-motion";

import { tableauSynthese, realisations, competences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IModalProps {
  realisationId: string;
  competenceCode: string;
  onClose: () => void;
}

const DetailModal: React.FC<IModalProps> = ({
  realisationId,
  competenceCode,
  onClose,
}) => {
  const realisation = realisations.find((r) => r.id === realisationId);
  const competence = competences.find((c) => c.code === competenceCode);
  const synthese = tableauSynthese.find((t) => t.realisationId === realisationId);
  const compDetails = synthese?.competences[competenceCode];

  if (!realisation || !competence || !compDetails?.isAddressed) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-tertiary max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-8 shadow-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h3 className={`text-[24px] font-bold ${competence.color}`}>
              {competence.code} - {competence.title}
            </h3>
            <h4 className="mt-2 text-[18px] font-semibold text-white">
              {realisation.name}
            </h4>
          </div>
          <button
            onClick={onClose}
            className="text-secondary hover:text-white text-3xl font-bold transition-colors"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <h5 className="text-secondary mb-2 text-sm font-semibold uppercase">
              Niveau de maîtrise
            </h5>
            <span
              className={`inline-block rounded-full px-4 py-1 text-sm font-bold ${
                compDetails.level === "principal"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-blue-500/20 text-blue-400"
              }`}
            >
              {compDetails.level === "principal" ? "Principal" : "Secondaire"}
            </span>
          </div>

          {compDetails.description && (
            <div>
              <h5 className="text-secondary mb-2 text-sm font-semibold uppercase">
                Description de la compétence dans ce projet
              </h5>
              <p className="text-secondary text-[15px] leading-relaxed">
                {compDetails.description}
              </p>
            </div>
          )}

          <div>
            <h5 className="text-secondary mb-2 text-sm font-semibold uppercase">
              Contexte du projet
            </h5>
            <p className="text-secondary text-[15px] leading-relaxed">
              {realisation.context}
            </p>
          </div>

          <div>
            <h5 className="text-secondary mb-2 text-sm font-semibold uppercase">
              Tâches réalisées
            </h5>
            <ul className="text-secondary list-inside list-disc space-y-1 text-[14px]">
              {realisation.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-secondary mb-2 text-sm font-semibold uppercase">
              Technologies utilisées
            </h5>
            <div className="flex flex-wrap gap-2">
              {realisation.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-black-200 rounded-md px-3 py-1 text-[12px] font-semibold text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const EpreuveE4 = () => {
  const [selectedCell, setSelectedCell] = useState<{
    realisationId: string;
    competenceCode: string;
  } | null>(null);

  const competenceCodes = ["B1.1", "B1.2", "B1.3", "B1.4", "B1.5", "B1.6"];

  return (
    <>
      <Header useMotion={true} {...config.sections.epreuveE4} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.epreuveE4.content}
      </motion.p>

      {/* Tableau de Synthèse - Desktop */}
      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-12 hidden overflow-x-auto lg:block"
      >
        <h3 className="mb-6 text-center text-[28px] font-bold text-white">
          Tableau de Synthèse — Réalisations × Compétences
        </h3>

        <div className="bg-tertiary rounded-2xl p-6 shadow-card">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-secondary w-1/4 border p-4 text-left text-white">
                  Réalisation
                </th>
                {competenceCodes.map((code) => (
                  <th
                    key={code}
                    className="border-secondary border p-4 text-center text-sm font-bold text-white"
                  >
                    {code}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableauSynthese.map((synthese) => {
                const realisation = realisations.find(
                  (r) => r.id === synthese.realisationId
                );
                if (!realisation) return null;

                return (
                  <tr key={synthese.realisationId} className="hover:bg-black-100">
                    <td className="border-secondary border p-4">
                      <div className="text-sm font-semibold text-white">
                        {realisation.name}
                      </div>
                      <div className="text-secondary mt-1 text-xs">
                        {realisation.company}
                      </div>
                    </td>
                    {competenceCodes.map((code) => {
                      const comp = synthese.competences[code];
                      return (
                        <td
                          key={code}
                          className="border-secondary cursor-pointer border p-4 text-center transition-all hover:bg-black-200"
                          onClick={() => {
                            if (comp.isAddressed) {
                              setSelectedCell({
                                realisationId: synthese.realisationId,
                                competenceCode: code,
                              });
                            }
                          }}
                        >
                          {comp.isAddressed ? (
                            <span
                              className={`text-2xl font-bold ${
                                comp.level === "principal"
                                  ? "text-green-400"
                                  : "text-blue-400"
                              }`}
                              title={comp.level === "principal" ? "Principal" : "Secondaire"}
                            >
                              {comp.level === "principal" ? "✓" : "○"}
                            </span>
                          ) : (
                            <span className="text-secondary">—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="mt-6 flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-green-400">✓</span>
              <span className="text-secondary">Compétence principale</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-blue-400">○</span>
              <span className="text-secondary">Compétence secondaire</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-secondary text-2xl">—</span>
              <span className="text-secondary">Non abordée</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tableau de Synthèse - Mobile (Cards) */}
      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-12 space-y-6 lg:hidden"
      >
        <h3 className="text-center text-[24px] font-bold text-white">
          Tableau de Synthèse
        </h3>

        {tableauSynthese.map((synthese) => {
          const realisation = realisations.find(
            (r) => r.id === synthese.realisationId
          );
          if (!realisation) return null;

          return (
            <div
              key={synthese.realisationId}
              className="bg-tertiary rounded-2xl p-6 shadow-card"
            >
              <h4 className="mb-2 text-[18px] font-bold text-white">
                {realisation.name}
              </h4>
              <p className="text-secondary mb-4 text-sm">{realisation.company}</p>

              <div className="grid grid-cols-3 gap-2">
                {competenceCodes.map((code) => {
                  const comp = synthese.competences[code];
                  return (
                    <button
                      key={code}
                      onClick={() => {
                        if (comp.isAddressed) {
                          setSelectedCell({
                            realisationId: synthese.realisationId,
                            competenceCode: code,
                          });
                        }
                      }}
                      disabled={!comp.isAddressed}
                      className={`rounded-lg p-3 text-center transition-all ${
                        comp.isAddressed
                          ? comp.level === "principal"
                            ? "bg-green-500/20 hover:bg-green-500/30"
                            : "bg-blue-500/20 hover:bg-blue-500/30"
                          : "bg-black-100"
                      }`}
                    >
                      <div className="text-sm font-bold text-white">{code}</div>
                      <div className="text-2xl">
                        {comp.isAddressed
                          ? comp.level === "principal"
                            ? "✓"
                            : "○"
                          : "—"}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* E4 Information */}
      <motion.div
        variants={fadeIn("", "", 0.3, 1)}
        className="bg-tertiary mt-12 rounded-2xl p-8 shadow-card"
      >
        <h3 className="mb-6 text-[24px] font-bold text-white">
          À propos de l'Épreuve E4
        </h3>

        <div className="text-secondary space-y-4 text-[15px] leading-relaxed">
          <p>
            L'épreuve E4 "Support et mise à disposition de services informatiques"
            évalue les compétences du Bloc 1 du référentiel BTS SIO. Elle se
            déroule sur 40 minutes : 10 minutes de présentation du parcours de
            professionnalisation, suivies de 30 minutes d'entretien avec le jury.
          </p>

          <p>
            Ce portfolio présente 8 réalisations professionnelles couvrant
            l'ensemble des 6 compétences du Bloc 1. Chaque réalisation est
            documentée avec son contexte, ses objectifs, les tâches effectuées,
            les technologies utilisées, et les compétences mobilisées.
          </p>

          <div className="mt-6">
            <h4 className="mb-3 font-semibold text-white">
              Couverture des compétences :
            </h4>
            <ul className="list-inside list-disc space-y-2">
              {competences.map((comp) => {
                const count = tableauSynthese.filter(
                  (s) => s.competences[comp.code]?.isAddressed
                ).length;
                return (
                  <li key={comp.code}>
                    <span className={`font-semibold ${comp.color}`}>
                      {comp.code}
                    </span>{" "}
                    — {comp.title} : <strong>{count} réalisations</strong>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {selectedCell && (
        <DetailModal
          realisationId={selectedCell.realisationId}
          competenceCode={selectedCell.competenceCode}
          onClose={() => setSelectedCell(null)}
        />
      )}
    </>
  );
};

export default SectionWrapper(EpreuveE4, "epreuve-e4");
