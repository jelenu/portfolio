import React from "react";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div
      className="h-screen w-full flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/background.webp')" }}
    >
      <div className="flex flex-col items-center w-1/3 ">
        <div className="text-white font-extrabold text-5xl">
          {t("presentation")}
        </div>
        <button className="mt-28 font-bold rounded-lg text-sm px-5 py-2.5 text-white background-gradient">
        {t("work")}
        </button>
      </div>
      <div className="text-white w-1/3"></div>
    </div>
  );
};
