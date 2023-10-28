// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./lang/en.json";
import deTranslation from "./lang/de.json";
import frTranslation from "./lang/fr.json";
import esTranslation from "./lang/es.json";
import itTranslation from "./lang/it.json";


const resources = {
  en: {
    translation: enTranslation
  },
  de: {
    translation: deTranslation
  },
  fr: {
    translation: frTranslation
  },
  es: {
    translation: esTranslation
  },
  it: {
    translation: itTranslation
  }
};

i18n
.use(initReactI18next)
.use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;