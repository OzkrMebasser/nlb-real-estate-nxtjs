"use client"

import useLanguage from '../../../context/hooks/useLanguage';
import en from '../../../context/languages/en'; 
import es from '../../../context/languages/es';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div>
      <button 
        onClick={() => setLanguage(en)}
        disabled={language === en}  
      >
        English
      </button>
      <button
        onClick={() => setLanguage(es)}
        disabled={language === es}
      >
        Español
      </button>
    </div>
  );
}