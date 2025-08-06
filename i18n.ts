import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

const isClient = typeof window !== "undefined";

if (!i18n.isInitialized) {
  i18n.use(HttpBackend).use(initReactI18next);

  if (isClient) {
    i18n.use(LanguageDetector); // ❗️Faqat brauzerda chaqiriladi
  }

  i18n.init({
    fallbackLng: "uz",
    supportedLngs: ["uz", "ru"],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
    ns: ["common"],
    defaultNS: "common",
  });
}

export default i18n;
