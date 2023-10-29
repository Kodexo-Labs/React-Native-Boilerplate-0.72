import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import english from './languages/english.json';
import spanish from './languages/spanish.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: english,
    },
    sp: {
      translation: spanish,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
