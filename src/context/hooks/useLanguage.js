import { useContext } from 'react';
import { LanguageContext } from '../LanguageProvider';

export default function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider'); 
  }

  return context;
}