import React from "react";
import { useLanguageStore } from "../../../store/languageStore";
import styles from "./LanguageSwitch.module.css";

const LANGUAGES = [
  { code: "EN", label: "EN" },
  { code: "VN", label: "VN" },
];

const LanguageSwitch = () => {
  const { currentLang, setLanguage } = useLanguageStore();

  return (
    <div className={styles.languageToggle} role="group" aria-label="Language switcher">
      {LANGUAGES.map((lang, index) => (
        <React.Fragment key={lang.code}>
          <button
            type="button"
            className={`${styles.languageButton} ${
              currentLang === lang.code ? styles.active : ""
            }`}
            onClick={() => setLanguage(lang.code)}
            aria-pressed={currentLang === lang.code}
            aria-label={`Switch to ${lang.code === "EN" ? "English" : "Vietnamese"}`}
          >
            {lang.label}
          </button>
          {index < LANGUAGES.length - 1 && (
            <span className={styles.separator} aria-hidden="true">
              |
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguageSwitch;
