import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en/translation.json";
import hiTranslation from "./locales/hi/translation.json";
import frTranslation from "./locales/fr/translation.json";
import jaTranslation from "./locales/ja/translation.json";
import esTranslation from "./locales/es/translation.json";

i18n.use(initReactI18next).init({

  resources: {

    en: {
      translation: enTranslation,
    },

    hi: {
      translation: hiTranslation,
    },
    fr: {
      translation: frTranslation,
    },
    ja: {
      translation: jaTranslation,
    },
    es: {
      translation: esTranslation,
    },

  },

  lng: "en",

  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },

});

export default i18n;