import React, { useRef, useState, useEffect } from "react";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import enTranslation from "./locales/en/translation.json";
import esTranslation from "./locales/es/translation.json";
import { Home } from "./components/Home";
import { Skills } from "./components/Skills";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    const homePosition = homeRef.current.getBoundingClientRect().top;
    const skillsPosition = skillsRef.current.getBoundingClientRect().top;
    const projectsPosition = projectsRef.current.getBoundingClientRect().top;

    if (homePosition < window.innerHeight / 2 && homePosition >= -window.innerHeight / 2) {
      setActiveSection('home');
    } else if (skillsPosition < window.innerHeight / 2 && skillsPosition >= -window.innerHeight / 2) {
      setActiveSection('skills');
    } else if (projectsPosition < window.innerHeight / 2 && projectsPosition >= -window.innerHeight / 2) {
      setActiveSection('projects');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Header
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        activeSection={activeSection}
      />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
    </div>
  );
}

export default App;
