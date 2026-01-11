import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
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
  meta,
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
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

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

const experiences: TExperience[] = [
  {
    title: "Software Developer (Alternance)",
    companyName: "MTB111 by Creative",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Working on the Structur'All project: reverse engineering and modernizing legacy applications for banking and insurance sectors.",
      "Developing testing specifications and performing comprehensive software testing to ensure quality.",
      "Building auxiliary tools including Excel file comparators using Apache POI for data validation.",
      "Creating Java code analysis utilities using regular expressions for automated code review.",
    ],
  },
  {
    title: "BTS SIO SLAM Student",
    companyName: "3IFA",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2023 - 2025",
    points: [
      "Studying software development with focus on application development (SLAM option).",
      "Learning Android development, Spring Boot REST APIs, Laravel/PHP, and database design.",
      "Working on the RFTG project (DVD rental system) with components: Luigi (Android), Toad (Spring Boot), Peach (MySQL), Mario (Laravel).",
      "Developing skills in software architecture, ORM concepts, and full-stack development.",
    ],
  },
  {
    title: "Applied Foreign Languages",
    companyName: "University",
    icon: shopify,
    iconBg: "#383E56",
    date: "Previous",
    points: [
      "Studied English, German, and Russian linguistics.",
      "Developed strong bilingual proficiency in French and English.",
      "Built foundation in cross-cultural communication and technical writing.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  // Add your own testimonials here when you receive them
];

const projects: TProject[] = [
  {
    name: "RFTG - DVD Rental System",
    description:
      "Full-stack DVD rental management system with Android mobile app (Luigi), Spring Boot REST API (Toad), MySQL database (Peach), and Laravel admin panel (Mario). Complete CRUD operations with user authentication.",
    tags: [
      {
        name: "android",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Excel File Comparator",
    description:
      "Java utility tool using Apache POI to compare Excel files, identify differences between datasets, and generate detailed comparison reports. Built to streamline data validation workflows at MTB111.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "apache-poi",
        color: "green-text-gradient",
      },
      {
        name: "maven",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Java Code Analyzer",
    description:
      "Automated code analysis tool using regular expressions and AST parsing to examine Java codebases, detect patterns, and provide insights for legacy code modernization efforts in the Structur'All project.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "regex",
        color: "green-text-gradient",
      },
      {
        name: "ast",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
