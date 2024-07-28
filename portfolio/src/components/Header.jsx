import React from "react";
import { useTranslation } from "react-i18next";

export const Header = ({ scrollToHome, scrollToSkills, scrollToProjects, activeSection }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="w-full py-5 bg-black text-white flex justify-between fixed top-0 left-0 z-10">
      <div className="flex justify-center w-11/12">
        <div>
          <button
            className={`mx-4 font-bold border-b-2 ${activeSection === 'home' ? 'border-yellow-500' : 'border-transparent'} hover:border-white`}
            onClick={scrollToHome}
          >
            {t("home")}
          </button>
          <button
            className={`mx-4 font-bold border-b-2 ${activeSection === 'skills' ? 'border-yellow-500' : 'border-transparent'} hover:border-white`}
            onClick={scrollToSkills}
          >
            {t("skills")}
          </button>
          <button
            className={`mx-4 font-bold border-b-2 ${activeSection === 'projects' ? 'border-yellow-500' : 'border-transparent'} hover:border-white`}
            onClick={scrollToProjects}
          >
            {t("projects")}
          </button>
        </div>
      </div>
      <div className="w-1/12 flex items-center">
        <button onClick={changeLanguage}>
          <img
            src={i18n.language === "en" ? "/gb.svg" : "/es.svg"}
            alt="Language flag"
            className="w-6 h-auto"
          />
        </button>
      </div>
    </div>
  );
};
