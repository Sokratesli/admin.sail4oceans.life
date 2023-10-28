import React from "react";
import { useTranslation, Trans } from "react-i18next";



import PersonalInformation from "../../components/PersonalInformation"


export default function CaseProfile() {
  const { t } = useTranslation();
  return (
    <>
      <PersonalInformation/>
    </>
  )
}
