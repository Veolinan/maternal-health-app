// src/i18n/index.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import sw from './sw.json';
import so from './so.json';

const resources = {
  en: { translation: en },
  sw: { translation: sw },
  so: { translation: so }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
