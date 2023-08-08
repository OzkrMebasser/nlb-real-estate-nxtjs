import useLanguage from "@/context/hooks/useLanguage";
import en from "@/context/languages/en";
import es from "@/context/languages/es";


export  function useLabelText(index) {
    const { language } = useLanguage();
  
    const text = language === 'es' ? es[`labelHero_${index}`] : en[`labelHero_${index}`];
  
    return text; 
  }
  
