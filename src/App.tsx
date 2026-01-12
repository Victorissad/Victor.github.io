import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  // E4 Components
  Competences,
  VeilleTechnologique,
  EpreuveE4,
  CV,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        {/* Hero Section with 3D background */}
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero /> {/* Accueil */}
        </div>

        {/* Main Content Sections */}
        <About /> {/* À propos */}
        <Experience /> {/* Parcours - uses parcours data */}
        <Competences /> {/* Compétences BTS SIO Bloc 1 (6 competencies) */}
        <Works /> {/* Réalisations professionnelles (8 projects) */}
        <VeilleTechnologique /> {/* Veille Technologique - Chatbots & AI */}
        <EpreuveE4 /> {/* Épreuve E4 - Tableau de Synthèse */}
        <CV /> {/* Curriculum Vitae */}

        {/* Contact Section with Stars background */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
