import de from "@/i18n/de/core.json";
import enUS from "@/i18n/enUS/core.json";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

export const resources = {
  de: { translation: de },
  "en-US": { translation: enUS },
} as const;

export const languageKeys = Object.keys(resources);

export const formatLanguage = (code: string): string => {
  if (code) {
    if (languageKeys.includes(code)) {
      return code;
    }

    const mainLanguage = code.slice(0, 2);
    for (let i = 0; i < languageKeys.length; i++) {
      if (languageKeys[i].slice(0, 2) === mainLanguage) {
        return languageKeys[i];
      }
    }
  }

  return "en-US";
};

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    detection: {},
    fallbackLng: (code) => {
      const language = formatLanguage(code);
      return [language, "en-US"];
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
    returnNull: false,
  });

export default i18n;
