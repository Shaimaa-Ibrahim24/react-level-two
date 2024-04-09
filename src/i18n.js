import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "lang":"language",
      "signout":"Sign-Out",
      "support":"support",
      "account":"profile"
    }
  },
  ar: {
    translation: {
      "lang":"اللغة",
      "signout":"تسجيل الخروج",
      "support":"المساعدة",
      "account":"حسابك"
    }
  },
  fr: {
    translation: {
      "lang":"French",
      "signout":"signoout",
      "support":"supporto",
      "account":"profilo"
    }
  }
};


i18n.use(LanguageDetector).use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    detection:{
      order: ['localStorage','htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react:{
      useSuspense: false
    }
  });

  export default i18n;