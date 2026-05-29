import { create } from "zustand";

export const useLanguageStore = create((set) => ({
  currentLang: "VN",
  setLanguage: (langCode) => set({ currentLang: langCode }),
}));