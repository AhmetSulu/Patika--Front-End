import React, { createContext, useState } from 'react';
import translations from '../locales';

export const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState('tr');
  
  const t = (key) => {
    try {
      const keys = key.split('.');
      let value = translations[locale];
      
      for (const k of keys) {
        if (!value || !value[k]) {
          console.warn(`Translation missing for key: ${key} in locale: ${locale}`);
          return key;
        }
        value = value[k];
      }
      return value;
    } catch (error) {
      console.error(`Error getting translation for key: ${key}`, error);
      return key;
    }
  };
  
  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};