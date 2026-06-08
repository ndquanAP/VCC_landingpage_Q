import React from "react";
import styles from "./CreditsSection.module.css";
import { useTranslation } from "../../../hooks/useTranslation";

const CreditsSection = () => {

  const {t} = useTranslation();

  return (
    <footer className={styles.creditsSection}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.mainContent}>
          {/* Menu Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{t("footer_menu")}</h3>
            <div className={styles.linksList}>
              <a href="/" className={styles.link}>
                {t("nav_home")}
              </a>
              <a href="/about" className={styles.link}>
                {t("nav_about")}
              </a>
              <a href="#program" className={styles.link}>
                {t("nav_program")}
              </a>
              <a href="/student-benefits" className={styles.link}>
                {t("nav_student_benefits")}
              </a>
              <a href="/expert-opinions" className={styles.link}>
                {t("nav_expert_opinions")}
              </a>
              <a href="/news" className={styles.link}>
                {t("nav_news_and_activities")}
              </a>
              <a href="/contact" className={styles.link}>
                {t("nav_contact")}
              </a>
            </div>
          </div>

          {/* Social Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{t("footer_social")}</h3>
            <div className={styles.linksList}>
              <a href="#" className={styles.link} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="#" className={styles.link} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="#" className={styles.link} target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
              <a href="#" className={styles.link} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="#" className={styles.link} target="_blank" rel="noopener noreferrer">
                TikTok
              </a>
            </div>
          </div>

          {/* Policy Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{t("footer_policy")}</h3>
            <div className={styles.linksList}>
              <a href="/privacy" className={styles.link}>
                {t("footer_privacy_policy")}
              </a>
              <a href="/terms" className={styles.link}>
                {t("footer_terms_of_service")}
              </a>
              <a href="/accessibility" className={styles.link}>
                {t("footer_accessibility")}
              </a>
              <a href="/cookies" className={styles.link}>
                {t("footer_cookies_policy")}
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{t("footer_contact_info")}</h3>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                {t("footer_company_name")}
              </p>
              <p className={styles.contactItem}>
                {t("footer_address")}
              </p>
              <p className={styles.contactItem}>
                {t("footer_phone")}
              </p>
              <p className={styles.contactItem}>
                {t("footer_email")}
              </p>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className={styles.separator}></div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            © 2024 PTIT VCC - Vietnam-Korea Center. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <a href="#terms" className={styles.legalLink}>
              Terms
            </a>
            <span className={styles.divider}>,</span>
            <a href="#privacy" className={styles.legalLink}>
              Privacy
            </a>
            <span className={styles.divider}>&</span>
            <a href="#accessibility" className={styles.legalLink}>
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CreditsSection;