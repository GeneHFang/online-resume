import React from "react";
import { translations } from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext";

interface PersonalInfoProps {
  name: string;
  dob: string;
  region: string;
  phone: string;
  email: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ name, dob, region, phone, email }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section>
      <h2>{t.personalInfo}</h2>
      <p>{t.name}: {name}</p>
      <p>{t.dob}: {dob}</p>
      <p>{t.region}: {region}</p>
      <p>{t.phone}: {phone}</p>
      <p>{t.email}: {email}</p>
    </section>
  );
};

export default PersonalInfo;
