import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import ko from './locales/ko.json';
import ja from './locales/ja.json';
import zh from './locales/zh.json';
import ar from './locales/ar.json';
import ru from './locales/ru.json';
import hy from './locales/hy.json';

// Idiomas disponibles
export const availableLanguages = [
  { code: 'en', name: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'es', name: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'ko', name: '한국어', flag: '🇰🇷', dir: 'ltr' },
  { code: 'ja', name: '日本語', flag: '🇯🇵', dir: 'ltr' },
  { code: 'zh', name: '中文', flag: '🇨🇳', dir: 'ltr' },
  { code: 'ar', name: 'العربية', flag: '🇦🇪', dir: 'rtl' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺', dir: 'ltr' },
  { code: 'hy', name: 'Հայերեն', flag: '🇦🇲', dir: 'ltr' },
];

const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  ko: { translation: ko },
  ja: { translation: ja },
  zh: { translation: zh },
  ar: { translation: ar },
  ru: { translation: ru },
  hy: { translation: hy },
};

// Detectar idioma del navegador o usar inglés por defecto
const getBrowserLanguage = () => {
  const browserLang = navigator.language.split('-')[0];
  return availableLanguages.some(lang => lang.code === browserLang) ? browserLang : 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || getBrowserLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

// Configurar dirección del texto según el idioma
i18n.on('languageChanged', (lng) => {
  const language = availableLanguages.find(l => l.code === lng);
  if (language) {
    document.documentElement.dir = language.dir;
    document.documentElement.lang = lng;
  }
});

// Establecer dirección inicial
const initialLanguage = availableLanguages.find(l => l.code === i18n.language);
if (initialLanguage) {
  document.documentElement.dir = initialLanguage.dir;
  document.documentElement.lang = i18n.language;
}

export default i18n;
