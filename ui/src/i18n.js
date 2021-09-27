import i18n from "i18next";

import Backend from "i18next-xhr-backend";

import { initReactI18next } from "react-i18next";
import en1 from "./locales/i18n/translations/en1.json";
//import en1 from "../public/assets/i18n/translations/en1.json";
//import translationHE from "./locales/hn/translation.json";

const resources = {
    en: {
        translations: en1,
    }
};


i18n


    //.use(Backend)

    .use(initReactI18next)

    .init({
        resources,

        lng: "en",   //default language

        //  fallbackLng: "en", //when specified language translations not present 

        //then fallbacklang translations loaded.

        debug: true,


        backend: {

            /* translation file path */

            loadPath: "./locales/i18n/translations/en1.json",

        },

        debug: true,
        // whitelist: lng,
        interpolation: {
            escapeValue: false,
        },


        /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */


        ns: ["translations"],

        defaultNS: "translations",

        keySeparator: false,

        interpolation: {

            escapeValue: false,

            formatSeparator: ",",

        },

        react: {

            wait: true,

        },

    });


export default i18n;