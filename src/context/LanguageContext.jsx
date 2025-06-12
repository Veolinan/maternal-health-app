import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const defaultLang = localStorage.getItem('lang') || 'en';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(defaultLang);

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'sw' : 'en'));
  };

  const t = (key) => {
    const translations = {
      en: {
        welcome: 'Welcome',
        logout: 'Logout',
        dashboard: 'Dashboard',
      },
      sw: {
        welcome: 'Karibu',
        logout: 'Toka',
        dashboard: 'Dashibodi',
      },
    };
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
