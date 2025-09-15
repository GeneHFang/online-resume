import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button onClick={toggleLanguage}>
      {language === "ja" ? "English" : "日本語"}
    </button>
  );
};

export default LanguageToggle;
