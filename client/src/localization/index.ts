import i18n from 'i18next';
import userKz from './kz/user.json';
import userRu from './ru/user.json';
import homeKz from './kz/home.json';
import homeRu from './ru/home.json';
import aboutKz from './kz/about.json';
import aboutRu from './ru/about.json';
import serviceKz from './kz/service.json';
import serviceRu from './ru/service.json';
import doctorKz from './kz/doctor.json';
import doctorRu from './ru/doctor.json';
import reviewKz from './kz/review.json';
import reviewRu from './ru/review.json';
import adviceKz from './kz/advice.json';
import adviceRu from './ru/advice.json';
import vacancyKz from './kz/vacancy.json';
import vacancyRu from './ru/vacancy.json';
import commonKz from './kz/common.json';
import commonRu from './ru/common.json';
import hintKz from './kz/hint.json';
import hintRu from './ru/hint.json';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const resources = {
  kz: {
    user: userKz,
    home: homeKz,
    about: aboutKz,
    service: serviceKz,
    doctor: doctorKz,
    review: reviewKz,
    advice: adviceKz,
    vacancy: vacancyKz,
    common: commonKz,
    hint: hintKz,
  },
  ru: {
    user: userRu,
    home: homeRu,
    about: aboutRu,
    service: serviceRu,
    doctor: doctorRu,
    review: reviewRu,
    advice: adviceRu,
    vacancy: vacancyRu,
    common: commonRu,
    hint: hintRu,
  },
} as const;

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'kz',
        ns: ['user', 'home', 'about', 'service', 'doctor', 'review', 'advice', 'vacancy', 'common', 'hint'],
        interpolation: {
            escapeValue: false,
        },
        resources,
});