import React from "react";
import Layout from "./components/Layout";
import AboutSection from "./components/about/AboutSection";
import { useEffect } from "react";
import { useLanguageStore } from "./components/store/languageStore";
// Import other page sections here as needed, e.g., import HeroSection from './components/HeroSection';

function App() {
  const { currentLang, setLanguage } = useLanguageStore();

  // Initialize language from localStorage or browser preference
  useEffect(() => {
    const savedLang = localStorage.getItem("preferredLanguage");
    const browserLang = navigator.language.startsWith("vi") ? "VN" : "EN";
    const initialLang = savedLang || browserLang;

    if (initialLang !== currentLang) {
      setLanguage(initialLang);
    }
  }, []);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("preferredLanguage", currentLang);

    // Update document language attribute for accessibility
    document.documentElement.lang = currentLang === "VN" ? "vi" : "en";
  }, [currentLang]);

  return (
    <Layout>
      <div id="about">
        <AboutSection />
      </div>
    </Layout>
  );
}

export default App;
