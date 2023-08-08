import es from './es.json' 
import en from './en.json'

export async function loadTranslations(lang) {
  switch(lang) {
    case 'es':
      return es 
    case 'en':
      return en
    default:
      return en 
  }
}