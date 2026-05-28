// hooks/useTranslation.js - Returns translation function bound to current language
import { translations } from "../data/translation";
import { useLanguageStore } from "../store/languageStore";

export const useTranslation = () => {
  const currentLang = useLanguageStore((state) => state.currentLang);

  const t = (key) => {
    return (
      translations[currentLang]?.[key] ??
      translations.EN?.[key] ??
      key
    );
  };

  return { t, currentLang };
};
