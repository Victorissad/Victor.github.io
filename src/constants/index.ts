import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
  TCompetence,
  TRealisation,
  TTableauSynthese,
  TVeilleTechnologique,
  TParcours,
  TAttestation,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "accueil",
    title: "Accueil",
  },
  {
    id: "a-propos",
    title: "À propos",
  },
  {
    id: "parcours",
    title: "Parcours",
  },
  {
    id: "competences",
    title: "Compétences",
  },
  {
    id: "realisations",
    title: "Réalisations",
  },
  {
    id: "veille",
    title: "Veille Techno",
  },
  {
    id: "epreuve-e4",
    title: "Épreuve E4",
  },
  {
    id: "cv",
    title: "CV",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// Technologies utilisées
const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

// Compétences BTS SIO Bloc 1
const competences: TCompetence[] = [
  {
    code: "B1.1",
    title: "Gérer le patrimoine informatique",
    description:
      "Recensement et suivi des configurations matérielles et logicielles, gestion des droits d'accès, sauvegardes et restaurations, plan de continuité d'activité.",
    icon: backend,
    color: "blue-text-gradient",
  },
  {
    code: "B1.2",
    title: "Répondre aux incidents et demandes d'assistance",
    description:
      "Support utilisateur, gestion de tickets, diagnostic et résolution d'incidents, documentation des procédures, escalade selon les niveaux de support.",
    icon: mobile,
    color: "green-text-gradient",
  },
  {
    code: "B1.3",
    title: "Développer la présence en ligne de l'organisation",
    description:
      "Développement web, référencement, technologies frontend et backend, maintenance et évolution des sites web et applications en ligne.",
    icon: web,
    color: "pink-text-gradient",
  },
  {
    code: "B1.4",
    title: "Travailler en mode projet",
    description:
      "Gestion de versions (Git), méthodologie agile, modélisation UML, travail collaboratif, documentation technique, respect des délais et livrables.",
    icon: creator,
    color: "orange-text-gradient",
  },
  {
    code: "B1.5",
    title: "Mettre à disposition un service informatique",
    description:
      "Tests d'intégration et de validation, déploiement en production, documentation utilisateur, formation, suivi post-déploiement.",
    icon: backend,
    color: "purple-text-gradient",
  },
  {
    code: "B1.6",
    title: "Organiser son développement professionnel",
    description:
      "Veille technologique, formation continue, certifications, auto-formation, participation à des communautés techniques, gestion de carrière.",
    icon: web,
    color: "cyan-text-gradient",
  },
];

// Parcours professionnel et académique
const parcours: TParcours[] = [
  {
    title: "Développeur Logiciel (Alternance)",
    institution: "MTB111 by Creative",
    date: "Septembre 2023 — Présent",
    type: "experience",
    description: [
      "Travail sur le projet Structur'All : reverse engineering et modernisation d'applications legacy pour les secteurs bancaire et assurantiel",
      "Développement de spécifications de tests et réalisation de tests logiciels complets",
      "Création d'outils auxiliaires : comparateur de fichiers Excel avec Apache POI, analyseur de code Java",
      "Refactoring de systèmes de logging (SAXLogger) et analyse de patterns avec expressions régulières",
      "Collaboration avec l'équipe via Git, merge requests, et code reviews",
    ],
    icon: starbucks,
    iconBg: "#383E56",
    location: "Paris, France",
  },
  {
    title: "BTS SIO SLAM",
    institution: "3IFA",
    date: "2023 — 2025",
    type: "formation",
    description: [
      "Formation en développement logiciel option SLAM (Solutions Logicielles et Applications Métiers)",
      "Apprentissage du développement Android, des API REST Spring Boot, de Laravel/PHP et de la conception de bases de données",
      "Projet RFTG (système de location de DVD) avec 4 composants : Luigi (Android), Toad (Spring Boot), Peach (MySQL), Mario (Laravel)",
      "Développement de compétences en architecture logicielle, concepts ORM, et développement full-stack",
      "Préparation de l'épreuve E4 avec constitution d'un portfolio professionnel",
    ],
    icon: tesla,
    iconBg: "#E6DEDD",
    location: "Paris, France",
  },
  {
    title: "Licence 1 LEA (Langues Étrangères Appliquées)",
    institution: "Université",
    date: "2021 — 2022",
    type: "formation",
    description: [
      "Études en linguistique anglaise, allemande et russe",
      "Développement d'une maîtrise bilingue français-anglais",
      "Acquisition de bases en communication interculturelle et rédaction technique",
    ],
    icon: shopify,
    iconBg: "#383E56",
    location: "France",
  },
  {
    title: "Baccalauréat Général",
    institution: "Lycée",
    date: "2019 — 2021",
    type: "formation",
    description: [
      "Obtention du Baccalauréat Général",
      "Spécialités orientées sciences et langues",
    ],
    icon: shopify,
    iconBg: "#E6DEDD",
    location: "France",
  },
];

// Réalisations professionnelles (8 projets minimum pour E4)
const realisations: TRealisation[] = [
  {
    id: "structurall-reverse",
    name: "Structur'All — Reverse Engineering",
    company: "MTB111 by Creative",
    context:
      "Dans le cadre du projet Structur'All, MTB111 accompagne des clients du secteur bancaire et assurantiel dans la modernisation de leurs applications legacy. Mon rôle consistait à analyser le code existant, documenter l'architecture, et préparer la migration.",
    objectives: [
      "Analyser et comprendre le code source d'applications legacy Java",
      "Documenter l'architecture et les dépendances",
      "Identifier les patterns et anti-patterns",
      "Préparer la stratégie de modernisation",
    ],
    tasks: [
      "Lecture et analyse de code Java legacy complexe",
      "Création de diagrammes UML (classes, séquences)",
      "Rédaction de documentation technique",
      "Identification des composants à refactoriser",
    ],
    technologies: ["Java", "Maven", "UML", "Git", "Regex"],
    competences: ["B1.1", "B1.4", "B1.6"],
    date: "Octobre 2023 — Mars 2024",
    image: carrent,
    results:
      "Documentation complète de l'architecture existante, identification de 15+ composants critiques, propositions de refactoring validées par l'équipe.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Reverse Engineering", color: "green-text-gradient" },
      { name: "Documentation", color: "pink-text-gradient" },
    ],
  },
  {
    id: "excel-comparator",
    name: "Comparateur de Fichiers Excel",
    company: "MTB111 by Creative",
    context:
      "Pour automatiser les tests de validation de données, j'ai développé un outil Java permettant de comparer deux fichiers Excel et de générer un rapport détaillé des différences. Cet outil est utilisé par l'équipe QA pour valider les migrations de données.",
    objectives: [
      "Automatiser la comparaison de fichiers Excel",
      "Générer des rapports de différences lisibles",
      "Réduire le temps de validation manuelle",
      "Gérer les fichiers volumineux (10 000+ lignes)",
    ],
    tasks: [
      "Développement Java avec Apache POI",
      "Gestion de la mémoire pour les gros fichiers",
      "Création d'algorithmes de comparaison",
      "Génération de rapports HTML/CSV",
      "Tests unitaires et d'intégration",
    ],
    technologies: ["Java", "Apache POI", "Maven", "JUnit"],
    competences: ["B1.2", "B1.4", "B1.5"],
    date: "Janvier 2024 — Février 2024",
    image: jobit,
    results:
      "Réduction de 80% du temps de validation, outil adopté par toute l'équipe QA, traitement réussi de fichiers jusqu'à 50 000 lignes.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Apache POI", color: "green-text-gradient" },
      { name: "Automatisation", color: "pink-text-gradient" },
    ],
  },
  {
    id: "java-analyzer",
    name: "Analyseur de Code Java",
    company: "MTB111 by Creative",
    context:
      "Développement d'un outil d'analyse statique de code Java pour détecter des patterns spécifiques, identifier les types génériques, et assister dans le processus de reverse engineering. L'outil utilise des expressions régulières et le parsing AST.",
    objectives: [
      "Détecter automatiquement les patterns dans le code",
      "Identifier les types génériques et leurs usages",
      "Générer des statistiques sur le code",
      "Assister l'équipe dans l'analyse de gros projets",
    ],
    tasks: [
      "Développement d'expressions régulières complexes",
      "Parsing de fichiers Java",
      "Analyse syntaxique (AST)",
      "Génération de rapports",
    ],
    technologies: ["Java", "Regex", "AST", "Maven"],
    competences: ["B1.1", "B1.4", "B1.6"],
    date: "Mars 2024 — Avril 2024",
    image: tripguide,
    results:
      "Détection automatique de 200+ patterns, gain de temps de 60% sur l'analyse de code, outil intégré au workflow de l'équipe.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Regex", color: "green-text-gradient" },
      { name: "AST", color: "pink-text-gradient" },
    ],
  },
  {
    id: "logging-refactoring",
    name: "Refactoring Système de Logging",
    company: "MTB111 by Creative",
    context:
      "Refonte du système de logging de l'application Structur'All en implémentant des SAXLogger pour améliorer la traçabilité et le debugging. Migration depuis un système de logging basique vers une solution structurée.",
    objectives: [
      "Améliorer la traçabilité des opérations",
      "Standardiser les logs dans toute l'application",
      "Faciliter le debugging en production",
      "Réduire le volume de logs inutiles",
    ],
    tasks: [
      "Implémentation de classes SAXLogger",
      "Remplacement des System.out.println par des logs structurés",
      "Configuration de niveaux de logs (INFO, DEBUG, ERROR)",
      "Documentation des conventions de logging",
    ],
    technologies: ["Java", "Log4j", "SLF4J", "Maven"],
    competences: ["B1.1", "B1.2", "B1.4"],
    date: "Février 2024 — Mars 2024",
    image: carrent,
    results:
      "Système de logging standardisé, réduction de 40% du volume de logs, amélioration du debugging en production.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Logging", color: "green-text-gradient" },
      { name: "Debugging", color: "pink-text-gradient" },
    ],
  },
  {
    id: "rftg-luigi-android",
    name: "RFTG Luigi — Application Android",
    company: "3IFA (Projet académique)",
    context:
      "Développement de l'application mobile Android 'Luigi' dans le cadre du projet RFTG (Rental Film To Go). L'application permet aux utilisateurs de consulter le catalogue de films, gérer leur panier, et passer des commandes via une API REST.",
    objectives: [
      "Créer une interface utilisateur intuitive",
      "Implémenter l'authentification JWT",
      "Gérer un catalogue de films dynamique",
      "Synchroniser les données avec l'API REST",
      "Stocker les données localement avec SQLite",
    ],
    tasks: [
      "Développement d'activités Android (Java)",
      "Intégration d'API REST avec AsyncTask",
      "Création d'une base SQLite locale",
      "Gestion de l'authentification utilisateur",
      "Design Material Design responsive",
    ],
    technologies: ["Android", "Java", "SQLite", "REST API", "Git"],
    competences: ["B1.3", "B1.4", "B1.5"],
    date: "Septembre 2024 — Décembre 2024",
    image: jobit,
    results:
      "Application fonctionnelle avec authentification, catalogue dynamique, panier persistant, et synchronisation API. Tests réussis sur 5+ appareils Android.",
    tags: [
      { name: "Android", color: "blue-text-gradient" },
      { name: "Java", color: "green-text-gradient" },
      { name: "SQLite", color: "pink-text-gradient" },
    ],
  },
  {
    id: "rftg-toad-springboot",
    name: "RFTG Toad — API REST Spring Boot",
    company: "3IFA (Projet académique)",
    context:
      "Développement de l'API REST 'Toad' en Spring Boot pour le projet RFTG. L'API gère l'authentification, le catalogue de films, les commandes, et communique avec la base de données MySQL 'Peach'.",
    objectives: [
      "Concevoir une API RESTful complète",
      "Implémenter l'authentification JWT",
      "Gérer les opérations CRUD",
      "Assurer la sécurité des endpoints",
      "Documenter l'API",
    ],
    tasks: [
      "Création de controllers REST",
      "Implémentation de services métier",
      "Configuration Spring Security avec JWT",
      "Mapping ORM avec JPA/Hibernate",
      "Tests avec Postman",
    ],
    technologies: ["Spring Boot", "Java", "MySQL", "JWT", "Maven", "Postman"],
    competences: ["B1.3", "B1.4", "B1.5"],
    date: "Septembre 2024 — Décembre 2024",
    image: tripguide,
    results:
      "API complète avec 15+ endpoints, authentification sécurisée, documentation Swagger, tests d'intégration validés.",
    tags: [
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "REST API", color: "green-text-gradient" },
      { name: "JWT", color: "pink-text-gradient" },
    ],
  },
  {
    id: "rftg-mario-laravel",
    name: "RFTG Mario — Interface Web Laravel",
    company: "3IFA (Projet académique)",
    context:
      "Développement de l'interface d'administration 'Mario' en Laravel/PHP pour le projet RFTG. Cette interface web permet aux administrateurs de gérer le catalogue de films, les utilisateurs, et les commandes.",
    objectives: [
      "Créer une interface d'administration complète",
      "Gérer les utilisateurs et leurs rôles",
      "Administrer le catalogue de films",
      "Suivre les commandes et statistiques",
      "Assurer la sécurité backend",
    ],
    tasks: [
      "Développement de controllers Laravel",
      "Création de vues Blade",
      "Implémentation de l'authentification Laravel",
      "CRUD complet pour toutes les entités",
      "Validation des formulaires",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Blade", "Bootstrap"],
    competences: ["B1.3", "B1.4", "B1.5"],
    date: "Octobre 2024 — Décembre 2024",
    image: carrent,
    results:
      "Interface d'administration fonctionnelle, gestion complète du catalogue, statistiques en temps réel, sécurité renforcée.",
    tags: [
      { name: "Laravel", color: "blue-text-gradient" },
      { name: "PHP", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
    ],
  },
  {
    id: "portfolio-3d",
    name: "Portfolio 3D interactif",
    company: "Projet personnel",
    context:
      "Création d'un portfolio web 3D interactif avec React, Three.js et TypeScript pour présenter mes compétences et réalisations dans le cadre de l'épreuve E4 du BTS SIO. Le portfolio intègre des animations 3D, un design responsive, et une navigation fluide.",
    objectives: [
      "Créer une vitrine professionnelle moderne",
      "Démontrer mes compétences en développement frontend",
      "Intégrer des technologies 3D (Three.js)",
      "Assurer une présentation optimale pour l'épreuve E4",
    ],
    tasks: [
      "Développement React avec TypeScript",
      "Intégration de modèles 3D avec Three.js",
      "Design responsive avec Tailwind CSS",
      "Animations avec Framer Motion",
      "Déploiement sur GitHub Pages",
    ],
    technologies: ["React", "TypeScript", "Three.js", "Tailwind CSS", "Vite"],
    competences: ["B1.3", "B1.4", "B1.6"],
    date: "Janvier 2025",
    image: jobit,
    demoLink: "https://victorissad.github.io",
    results:
      "Portfolio déployé et accessible en ligne, design professionnel et moderne, présentation structurée des compétences E4.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Three.js", color: "green-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
    ],
  },
];

// Tableau de Synthèse : Correspondance Réalisations ↔ Compétences
const tableauSynthese: TTableauSynthese[] = [
  {
    realisationId: "structurall-reverse",
    competences: {
      "B1.1": {
        isAddressed: true,
        level: "principal",
        description: "Recensement et documentation de l'architecture existante",
      },
      "B1.2": { isAddressed: false },
      "B1.3": { isAddressed: false },
      "B1.4": {
        isAddressed: true,
        level: "principal",
        description: "Travail collaboratif avec Git, documentation UML",
      },
      "B1.5": { isAddressed: false },
      "B1.6": {
        isAddressed: true,
        level: "secondaire",
        description: "Auto-formation sur le reverse engineering",
      },
    },
  },
  {
    realisationId: "excel-comparator",
    competences: {
      "B1.1": { isAddressed: false },
      "B1.2": {
        isAddressed: true,
        level: "principal",
        description: "Outil de support pour validation et tests",
      },
      "B1.3": { isAddressed: false },
      "B1.4": {
        isAddressed: true,
        level: "principal",
        description: "Développement en mode projet avec Git",
      },
      "B1.5": {
        isAddressed: true,
        level: "secondaire",
        description: "Tests unitaires et déploiement de l'outil",
      },
      "B1.6": { isAddressed: false },
    },
  },
  {
    realisationId: "java-analyzer",
    competences: {
      "B1.1": {
        isAddressed: true,
        level: "secondaire",
        description: "Analyse du patrimoine logiciel existant",
      },
      "B1.2": { isAddressed: false },
      "B1.3": { isAddressed: false },
      "B1.4": {
        isAddressed: true,
        level: "principal",
        description: "Travail en équipe, versioning Git",
      },
      "B1.5": { isAddressed: false },
      "B1.6": {
        isAddressed: true,
        level: "principal",
        description: "Veille sur les techniques d'analyse de code",
      },
    },
  },
  {
    realisationId: "logging-refactoring",
    competences: {
      "B1.1": {
        isAddressed: true,
        level: "principal",
        description: "Amélioration du suivi et de la traçabilité",
      },
      "B1.2": {
        isAddressed: true,
        level: "principal",
        description: "Facilitation du diagnostic d'incidents",
      },
      "B1.3": { isAddressed: false },
      "B1.4": {
        isAddressed: true,
        level: "secondaire",
        description: "Refactoring collaboratif avec merge requests",
      },
      "B1.5": { isAddressed: false },
      "B1.6": { isAddressed: false },
    },
  },
  {
    realisationId: "rftg-luigi-android",
    competences: {
      "B1.1": { isAddressed: false },
      "B1.2": { isAddressed: false },
      "B1.3": {
        isAddressed: true,
        level: "principal",
        description: "Développement d'une application mobile connectée",
      },
      "B1.4": {
        isAddressed: true,
        level: "principal",
        description: "Gestion du projet avec Git, méthodologie Agile",
      },
      "B1.5": {
        isAddressed: true,
        level: "principal",
        description: "Tests sur appareils, déploiement APK",
      },
      "B1.6": { isAddressed: false },
    },
  },
  {
    realisationId: "rftg-toad-springboot",
    competences: {
      "B1.1": { isAddressed: false },
      "B1.2": { isAddressed: false },
      "B1.3": {
        isAddressed: true,
        level: "principal",
        description: "Développement d'une API REST backend",
      },
      "B1.4": {
        isAddressed: true,
        level: "principal",
        description: "Travail collaboratif, Git, documentation",
      },
      "B1.5": {
        isAddressed: true,
        level: "principal",
        description: "Tests d'intégration, déploiement de l'API",
      },
      "B1.6": { isAddressed: false },
    },
  },
  {
    realisationId: "rftg-mario-laravel",
    competences: {
      "B1.1": { isAddressed: false },
      "B1.2": {
        isAddressed: true,
        level: "secondaire",
        description: "Interface d'administration pour support utilisateur",
      },
      "B1.3": {
        isAddressed: true,
        level: "principal",
        description: "Développement web avec Laravel/PHP",
      },
      "B1.4": {
        isAddressed: true,
        level: "secondaire",
        description: "Collaboration avec l'équipe via Git",
      },
      "B1.5": {
        isAddressed: true,
        level: "principal",
        description: "Tests et mise en production",
      },
      "B1.6": { isAddressed: false },
    },
  },
  {
    realisationId: "portfolio-3d",
    competences: {
      "B1.1": { isAddressed: false },
      "B1.2": { isAddressed: false },
      "B1.3": {
        isAddressed: true,
        level: "principal",
        description: "Création d'une présence web professionnelle",
      },
      "B1.4": {
        isAddressed: true,
        level: "secondaire",
        description: "Gestion du projet avec Git, déploiement",
      },
      "B1.5": { isAddressed: false },
      "B1.6": {
        isAddressed: true,
        level: "principal",
        description: "Auto-formation React, Three.js, TypeScript",
      },
    },
  },
];

// Veille Technologique
const veilleTechnologique: TVeilleTechnologique = {
  theme: "Les Chatbots et l'Intelligence Artificielle Conversationnelle",
  problematic:
    "Comment les chatbots basés sur l'IA transforment-ils l'interaction entre les entreprises et leurs utilisateurs ? Quels sont les enjeux techniques, éthiques et business de cette évolution ?",
  methodology: `Ma veille technologique s'organise autour de plusieurs axes :

**Sources primaires** :
- Blogs techniques (OpenAI Blog, Google AI Blog, Anthropic)
- Publications académiques (arXiv, Papers With Code)
- Conférences (NeurIPS, ACL, EMNLP)

**Sources secondaires** :
- Newsletters spécialisées (The Batch, Import AI)
- Podcasts tech (Lex Fridman, Machine Learning Street Talk)
- Réseaux sociaux (Twitter/X, LinkedIn, Reddit r/MachineLearning)

**Outils utilisés** :
- Feedly pour agréger les flux RSS
- Pocket pour sauvegarder les articles
- Notion pour organiser mes notes
- Google Alerts pour suivre les mots-clés

**Fréquence** : Veille quotidienne (15-20 min), synthèse hebdomadaire, analyse mensuelle des tendances.`,
  sources: [
    {
      title: "GPT-4 Technical Report",
      type: "article",
      url: "https://arxiv.org/abs/2303.08774",
      date: "Mars 2023",
      summary:
        "Rapport technique sur GPT-4, détaillant les améliorations par rapport à GPT-3.5 : meilleure compréhension contextuelle, capacités multimodales, raisonnement amélioré.",
      author: "OpenAI",
    },
    {
      title: "Constitutional AI: Harmlessness from AI Feedback",
      type: "article",
      url: "https://arxiv.org/abs/2212.08073",
      date: "Décembre 2022",
      summary:
        "Article d'Anthropic sur la méthode Constitutional AI pour aligner les chatbots sur des valeurs éthiques sans supervision humaine massive.",
      author: "Anthropic",
    },
    {
      title: "The Rise of Conversational AI in Customer Service",
      type: "blog",
      url: "https://example.com",
      date: "Janvier 2024",
      summary:
        "Analyse des tendances d'adoption des chatbots dans le service client : 70% des entreprises prévoient d'intégrer un chatbot d'ici 2025.",
      author: "Gartner",
    },
    {
      title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP",
      type: "article",
      url: "https://arxiv.org/abs/2005.11401",
      date: "Mai 2020",
      summary:
        "Présentation de la technique RAG (Retrieval-Augmented Generation) permettant aux chatbots d'accéder à des bases de connaissances externes.",
      author: "Meta AI",
    },
    {
      title: "L'IA conversationnelle dans le secteur bancaire",
      type: "conference",
      url: "https://example.com",
      date: "Octobre 2024",
      summary:
        "Conférence sur les cas d'usage des chatbots dans la banque : assistance client, détection de fraude, conseil financier personnalisé.",
      author: "FinTech Summit",
    },
  ],
  synthesis: `**Évolution technologique** :
Les chatbots ont connu une évolution majeure avec l'arrivée des Large Language Models (LLM) comme GPT-3, GPT-4, Claude, et Gemini. Contrairement aux chatbots traditionnels basés sur des règles, ces nouveaux systèmes comprennent le contexte, génèrent des réponses naturelles, et peuvent accomplir des tâches complexes.

**Applications concrètes** :
- **Service client** : Réponse instantanée 24/7, réduction des coûts de support de 30-40%
- **Assistance interne** : Aide aux employés (RH, IT, documentation)
- **E-commerce** : Recommandations personnalisées, support d'achat
- **Santé** : Pré-diagnostic, suivi de patients, rappels de médicaments
- **Éducation** : Tuteurs virtuels, assistance aux devoirs

**Défis techniques** :
- Hallucinations (génération d'informations incorrectes)
- Coût de déploiement (GPUs, infrastructure)
- Latence de réponse
- Gestion du contexte sur de longues conversations
- Intégration avec systèmes existants

**Défis éthiques** :
- Biais dans les réponses
- Confidentialité des données (RGPD)
- Transparence (l'utilisateur doit savoir qu'il parle à une IA)
- Responsabilité en cas d'erreur
- Remplacement d'emplois humains

**Technologies clés** :
- **Transformers** : Architecture neuronale révolutionnaire
- **Fine-tuning** : Adaptation des modèles à des domaines spécifiques
- **RAG** : Connexion à des bases de connaissances
- **Function calling** : Capacité à appeler des APIs externes
- **Multimodalité** : Intégration texte + image + voix`,
  evolution: `**Court terme (2025-2026)** :
- Généralisation des chatbots multimodaux (texte + voix + image)
- Amélioration de la mémoire à long terme
- Réduction des coûts de déploiement
- Intégration native dans tous les outils (ERP, CRM, etc.)

**Moyen terme (2026-2028)** :
- Agents autonomes capables de tâches complexes end-to-end
- Personnalisation extrême (un chatbot qui apprend de chaque utilisateur)
- Chatbots spécialisés par industrie (médical, juridique, technique)
- Standardisation des protocoles d'intégration

**Long terme (2028+)** :
- Intelligence artificielle générale (AGI) conversationnelle
- Collaboration homme-machine naturelle
- Interfaces cerveau-ordinateur pour chatbots
- Régulations strictes et certifications

**Impact sur le métier de développeur** :
En tant que futur développeur, je devrai :
- Maîtriser les APIs de LLMs (OpenAI, Anthropic, Google)
- Comprendre les concepts de prompting et fine-tuning
- Savoir intégrer des chatbots dans des applications
- Être sensibilisé aux enjeux éthiques et légaux
- Suivre l'évolution rapide de ce domaine`,
  tools: [
    "ChatGPT (OpenAI)",
    "Claude (Anthropic)",
    "Gemini (Google)",
    "Feedly (Veille RSS)",
    "Notion (Organisation)",
    "GitHub (Expérimentations)",
  ],
};

// Attestations (placeholder - à remplir avec de vraies attestations)
const attestations: TAttestation[] = [
  {
    name: "Tuteur MTB111",
    role: "Maître d'apprentissage",
    company: "MTB111 by Creative",
    testimonial:
      "Victor a fait preuve d'une grande autonomie et d'une capacité d'apprentissage remarquable. Son travail sur les outils auxiliaires du projet Structur'All a été particulièrement apprécié par l'équipe.",
    context: "Alternance 2023-2025",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    date: "Janvier 2025",
  },
];

// Keep old types for compatibility (will be gradually replaced)
const services: TService[] = competences.slice(0, 4).map((comp) => ({
  title: comp.title,
  icon: comp.icon,
}));

const experiences: TExperience[] = parcours
  .filter((p) => p.type === "experience" || p.type === "formation")
  .slice(0, 3)
  .map((p) => ({
    title: p.title,
    companyName: p.institution,
    icon: p.icon,
    iconBg: p.iconBg,
    date: p.date,
    points: p.description,
  }));

const projects: TProject[] = realisations.slice(0, 3).map((r) => ({
  name: r.name,
  description: r.context,
  tags: r.tags,
  image: r.image,
  sourceCodeLink: r.demoLink || "https://github.com/",
}));

const testimonials: TTestimonial[] = attestations.map((a) => ({
  name: a.name,
  designation: a.role,
  company: a.company,
  testimonial: a.testimonial,
  image: a.image,
}));

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  // New E4 exports
  competences,
  parcours,
  realisations,
  tableauSynthese,
  veilleTechnologique,
  attestations,
};
