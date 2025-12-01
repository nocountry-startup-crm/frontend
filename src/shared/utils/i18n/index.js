import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locales/es/";
import en from "./locales/en/";

i18n.use(initReactI18next).init({
  resources: {
    en,
    es,
  },
  lng: "es",
  fallbackLng: "es",
  ns: ["common"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
