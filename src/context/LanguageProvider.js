"use client";
import { createContext, useState, useContext } from 'react';
import en from './languages/en';
import es from './languages/es';

export const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(en);

  const providerValue = {
    language,
    setLanguage
  };

  return (
    <LanguageContext.Provider value={providerValue}>
      {children}
    </LanguageContext.Provider>
  );
}

// export function useLanguage() {
//   const context = useContext(LanguageContext);

//   if (!context) {
//     throw new Error('useLanguage must be used within a LanguageProvider'); 
//   }

//   return context;
// }