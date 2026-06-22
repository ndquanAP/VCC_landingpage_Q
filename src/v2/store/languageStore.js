import { create } from "zustand";

export const useLanguageStore = create((set) => ({
  currentLang: "EN",
  setLanguage: (langCode) => set({ currentLang: langCode }),
}));