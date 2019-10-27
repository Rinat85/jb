import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

import translationRu from "./locales/RU/translation.json";
import translationUz from "./locales/UZ/translation.json";

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: true,
    lng: "RU",
    fallbackLng: "RU", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    resources: {
      RU: {
        translations: translationRu
      },
      UZ: {
        translations: translationUz
      }
    },
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations"
});


export default i18n;