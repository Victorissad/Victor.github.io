type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    accueil: TSection;
    aPropos: Required<TSection>;
    parcours: TSection;
    competences: Required<TSection>;
    realisations: Required<TSection>;
    veille: Required<TSection>;
    epreuveE4: Required<TSection>;
    cv: TSection;
  };
};

export const config: TConfig = {
  html: {
    title: "Victor Issad — Portfolio BTS SIO E4",
    fullName: "Victor Issad",
    email: "victor.issad@example.com",
  },
  hero: {
    name: "Victor Issad",
    p: [
      "Étudiant en BTS SIO SLAM",
      "Développeur en alternance chez MTB111 by Creative",
    ],
  },
  contact: {
    p: "Entrer en contact",
    h2: "Contact.",
    form: {
      name: {
        span: "Votre nom",
        placeholder: "Quel est votre nom ?",
      },
      email: {
        span: "Votre email",
        placeholder: "Quelle est votre adresse email ?",
      },
      message: {
        span: "Votre message",
        placeholder: "Que souhaitez-vous me dire ?",
      },
    },
  },
  sections: {
    accueil: {
      p: "Bienvenue sur mon portfolio",
      h2: "Accueil",
    },
    aPropos: {
      p: "Introduction",
      h2: "À propos",
      content: `Je suis Victor Issad, 21 ans, étudiant en BTS SIO option SLAM (Solutions Logicielles et Applications Métiers) à 3IFA, en alternance chez MTB111 by Creative. Passionné par le développement logiciel, je me spécialise dans le développement backend avec Java et Spring Boot, le développement mobile Android, et les applications web full-stack avec PHP/Laravel.

      Mon parcours atypique, débutant par des études en Langues Étrangères Appliquées, m'a permis de développer des compétences en communication et une approche multiculturelle du développement. Actuellement, je travaille sur le projet Structur'All, un projet de modernisation d'applications legacy pour les secteurs bancaire et assurantiel, où j'applique quotidiennement mes compétences en reverse engineering, tests logiciels et développement d'outils.

      Rigoureux, autonome et curieux, je m'investis dans ma veille technologique sur les chatbots et l'intelligence artificielle, domaine qui me passionne particulièrement. Mon objectif professionnel est de devenir développeur full-stack senior et de contribuer à des projets innovants dans le domaine de la tech.`,
    },
    parcours: {
      p: "Mon cheminement",
      h2: "Parcours professionnel et académique",
    },
    competences: {
      p: "Compétences BTS SIO",
      h2: "Bloc 1 — Compétences professionnelles",
      content: `Dans le cadre de ma formation BTS SIO SLAM et de mon alternance chez MTB111, j'ai développé l'ensemble des 6 compétences du Bloc 1 "Support et mise à disposition de services informatiques". Ces compétences sont démontrées à travers mes réalisations professionnelles et projets académiques.`,
    },
    realisations: {
      p: "Mes projets",
      h2: "Réalisations professionnelles",
      content: `Voici mes principales réalisations effectuées en entreprise (MTB111 by Creative) et dans le cadre académique (3IFA). Chaque projet illustre l'application concrète des compétences du Bloc 1 du référentiel BTS SIO et démontre ma capacité à travailler sur des projets réels de développement logiciel.`,
    },
    veille: {
      p: "Ma veille technologique",
      h2: "Veille Technologique",
      content: `Ma veille technologique porte sur les chatbots et l'intelligence artificielle conversationnelle. Je m'intéresse particulièrement à l'évolution des Large Language Models (LLM), aux techniques de Natural Language Processing (NLP), et aux applications pratiques des chatbots dans le service client et l'assistance utilisateur.`,
    },
    epreuveE4: {
      p: "Épreuve E4",
      h2: "Préparation Épreuve E4",
      content: `Cette section présente le tableau de synthèse de mes réalisations professionnelles en lien avec les compétences du Bloc 1 du référentiel BTS SIO. Chaque réalisation est mise en correspondance avec les compétences qu'elle permet de démontrer.`,
    },
    cv: {
      p: "Mon CV",
      h2: "Curriculum Vitae",
    },
  },
};
