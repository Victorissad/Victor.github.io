export type TCommonProps = {
  title?: string;
  name?: string;
  icon?: string;
};

export type TExperience = {
  companyName: string;
  iconBg: string;
  date: string;
  points: string[];
} & Required<Omit<TCommonProps, "name">>;

export type TTestimonial = {
  testimonial: string;
  designation: string;
  company: string;
  image: string;
} & Required<Pick<TCommonProps, "name">>;

export type TProject = {
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  sourceCodeLink: string;
} & Required<Pick<TCommonProps, "name">>;

export type TTechnology = Required<Omit<TCommonProps, "title">>;

export type TNavLink = {
  id: string;
} & Required<Pick<TCommonProps, "title">>;

export type TService = Required<Omit<TCommonProps, "name">>;

export type TMotion = {
  direction: "up" | "down" | "left" | "right" | "";
  type: "tween" | "spring" | "just" | "";
  delay: number;
  duration: number;
};

// E4 Exam Portfolio Types

export type TCompetence = {
  code: string;
  title: string;
  description: string;
  icon: string;
  color: string;
};

export type TRealisation = {
  id: string;
  name: string;
  company: string;
  context: string;
  objectives: string[];
  tasks: string[];
  technologies: string[];
  competences: string[];
  date: string;
  image: string;
  results?: string;
  demoLink?: string;
  documentLink?: string;
  tags: {
    name: string;
    color: string;
  }[];
};

export type TTableauSynthese = {
  realisationId: string;
  competences: {
    [key: string]: {
      isAddressed: boolean;
      level?: "principal" | "secondaire";
      description?: string;
    };
  };
};

export type TVeilleSource = {
  title: string;
  type: "article" | "video" | "podcast" | "conference" | "blog";
  url: string;
  date: string;
  summary: string;
  author?: string;
};

export type TVeilleTechnologique = {
  theme: string;
  problematic: string;
  sources: TVeilleSource[];
  synthesis: string;
  evolution: string;
  tools: string[];
  methodology: string;
};

export type TParcours = {
  title: string;
  institution: string;
  date: string;
  description: string[];
  type: "formation" | "experience" | "certification";
  icon: string;
  iconBg: string;
  location?: string;
};

export type TAttestation = {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  context: string;
  image: string;
  date?: string;
};
