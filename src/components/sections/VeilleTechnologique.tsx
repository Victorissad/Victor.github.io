import React, { useState } from "react";
import { motion } from "framer-motion";

import { veilleTechnologique } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import type { TVeilleSource } from "../../types";

const SourceCard: React.FC<{ source: TVeilleSource; index: number }> = ({
  source,
  index,
}) => {
  const typeColors: Record<string, string> = {
    article: "blue-text-gradient",
    video: "pink-text-gradient",
    podcast: "green-text-gradient",
    conference: "orange-text-gradient",
    blog: "purple-text-gradient",
  };

  const typeEmojis: Record<string, string> = {
    article: "📄",
    video: "🎥",
    podcast: "🎙️",
    conference: "🎤",
    blog: "📝",
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="bg-tertiary w-full rounded-2xl p-6 shadow-card transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className={`text-2xl font-bold ${typeColors[source.type]}`}>
          {typeEmojis[source.type]} {source.type.toUpperCase()}
        </span>
        <span className="text-secondary text-sm">{source.date}</span>
      </div>

      <h3 className="mb-2 text-[18px] font-bold text-white">{source.title}</h3>

      {source.author && (
        <p className="text-secondary mb-3 text-sm italic">Par {source.author}</p>
      )}

      <p className="text-secondary mb-4 text-[14px] leading-relaxed">
        {source.summary}
      </p>

      <a
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary hover:text-white inline-flex items-center gap-2 text-sm font-semibold transition-colors"
      >
        Lire la source
        <span>→</span>
      </a>
    </motion.div>
  );
};

const VeilleTechnologique = () => {
  const [activeTab, setActiveTab] = useState<
    "sources" | "methodology" | "synthesis" | "evolution"
  >("sources");

  return (
    <>
      <Header useMotion={true} {...config.sections.veille} />

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl"
      >
        <h3 className="text-secondary mb-2 text-[20px] font-semibold">
          Thème : {veilleTechnologique.theme}
        </h3>
        <p className="text-secondary text-[17px] leading-[30px]">
          {veilleTechnologique.problematic}
        </p>
      </motion.div>

      {/* Tabs Navigation */}
      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-8 flex flex-wrap gap-4"
      >
        {[
          { key: "sources", label: "Sources", emoji: "📚" },
          { key: "methodology", label: "Méthodologie", emoji: "🔍" },
          { key: "synthesis", label: "Synthèse", emoji: "💡" },
          { key: "evolution", label: "Évolution", emoji: "🚀" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() =>
              setActiveTab(tab.key as typeof activeTab)
            }
            className={`rounded-lg px-6 py-3 font-semibold transition-all ${
              activeTab === tab.key
                ? "bg-tertiary text-white shadow-card"
                : "bg-tertiary/50 text-secondary hover:bg-tertiary/70"
            }`}
          >
            {tab.emoji} {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Tab Content */}
      <div className="mt-8">
        {activeTab === "sources" && (
          <div className="grid gap-6 md:grid-cols-2">
            {veilleTechnologique.sources.map((source, index) => (
              <SourceCard key={index} source={source} index={index} />
            ))}
          </div>
        )}

        {activeTab === "methodology" && (
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="bg-tertiary rounded-2xl p-8 shadow-card"
          >
            <h3 className="mb-6 text-[24px] font-bold text-white">
              Méthodologie de Veille
            </h3>
            <div className="text-secondary whitespace-pre-line text-[16px] leading-relaxed">
              {veilleTechnologique.methodology}
            </div>

            <div className="mt-8">
              <h4 className="mb-4 text-[20px] font-semibold text-white">
                Outils Utilisés
              </h4>
              <div className="flex flex-wrap gap-3">
                {veilleTechnologique.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-black-200 rounded-lg px-4 py-2 text-[14px] font-semibold text-white"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "synthesis" && (
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="bg-tertiary rounded-2xl p-8 shadow-card"
          >
            <h3 className="mb-6 text-[24px] font-bold text-white">
              Synthèse de la Veille
            </h3>
            <div className="text-secondary whitespace-pre-line text-[16px] leading-relaxed">
              {veilleTechnologique.synthesis}
            </div>
          </motion.div>
        )}

        {activeTab === "evolution" && (
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="bg-tertiary rounded-2xl p-8 shadow-card"
          >
            <h3 className="mb-6 text-[24px] font-bold text-white">
              Perspectives d'Évolution
            </h3>
            <div className="text-secondary whitespace-pre-line text-[16px] leading-relaxed">
              {veilleTechnologique.evolution}
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(VeilleTechnologique, "veille");
