import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { ar, en, es, pl } from "./translations";

const resources = {
  en: {
    translation: en
  },
  ar: {
    translation: ar
  },
  es: {
    translation: es
  },
  pl: {
    translation: pl
  }
}

i18next.use(initReactI18next).init({
  debug: false,
  lng: 'en',
  compatibilityJSON: 'v3',
  //language to use if translation in user language is not available
  fallbackLng: 'en',
  resources,
})

export default i18next;