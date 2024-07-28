import React from "react";
import {
  FaHtml5,
  FaPython,
  FaPhp,
  FaJava,
  FaCss3Alt,
  FaLaravel,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiDjango, SiFlask } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { t } = useTranslation();

  const programmingLanguages = [
    { icon: FaPython, label: "Python", background: "#4584b6" },
    { icon: FaPhp, label: "PHP", background: "#AEB2D5" },
    { icon: FaJava, label: "Java", background: "#f89820" },
    { icon: FaHtml5, label: "HTML", background: "#e34c26" },
    { icon: FaCss3Alt, label: "CSS", background: "#264de4" },
    { icon: IoLogoJavascript, label: "JavaScript", background: "#f7df1e" },
  ];

  const technologiesAndTools = [
    {
      icon: SiDjango,
      label: "Django",
      background: "#092e20",
      textColor: "text-white",
    },
    { icon: SiFlask, label: "Flask", background: "#66becc" },
    { icon: FaLaravel, label: "Laravel", background: "#FF2D20" },
    { icon: FaReact, label: "React", background: "#61DBFB" },
    { icon: FaBootstrap, label: "Bootstrap", background: "#563d7c" },
    { icon: RiTailwindCssFill, label: "Tailwind CSS", background: "#38B2AC" },
  ];

  const SkillItem = ({
    icon: Icon,
    label,
    background,
    textColor = "text-black",
  }) => (
    <div className="flex items-center px-3 py-1.5 mx-2" style={{ background }}>
      <Icon className={`${textColor} text-3xl mr-1`} /> {label}
    </div>
  );

  const SkillsSection = ({ title, skills }) => (
    <div className="flex flex-col items-center my-8">
      <div className="font-extrabold text-2xl mb-4">{title}</div>
      <div className="flex font-semibold">
        {skills.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="h-screen skills-background flex flex-col items-center justify-center text-white">
      <SkillsSection title={t("languages")} skills={programmingLanguages} />
      <SkillsSection title={t("technologies")} skills={technologiesAndTools} />
      <div className="flex flex-col items-center mt-6">
        <div className="font-extrabold text-2xl mb-4">Soft Skills</div>
        <div>
          {t("softSkills", { returnObjects: true }).map((skill, index) => (
            <div
              key={index}
              className="text-center text-lg font-semibold my-1.5"
            >
              {skill}
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
