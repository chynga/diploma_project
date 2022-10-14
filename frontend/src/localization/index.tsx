import i18n from 'i18next';
import kz from './kz/user.json';
import ru from './ru/user.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
  kz: {
    user: kz,
  },
  ru: {
    user: ru,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'kz',
  ns: ['user'],
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});