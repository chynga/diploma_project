import i18n from 'i18next';
import userKz from './kz/user.json';
import userRu from './ru/user.json';
import homeKz from './kz/home.json';
import homeRu from './ru/home.json';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const resources = {
  kz: {
    user: userKz,
    home: homeKz,
  },
  ru: {
    user: userRu,
    home: homeRu,
  },
} as const;

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
  fallbackLng: 'kz',
  ns: ['user', 'home'],
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});