import React from "react";
import styles from "./CreditsSection.module.css";

const CreditsSection = () => {

  return (
    <footer className={styles.creditsSection}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.mainContent}>
          {/* Menu Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Menu</h3>
            <div className={styles.linksList}>
              <a href="#" className={styles.link}>
                Home
              </a>
              <a href="#about" className={styles.link}>
                About VCC
              </a>
              <a href="#program" className={styles.link}>
                Program
              </a>
              <a href="#student-benefits" className={styles.link}>
                Student Benefits
              </a>
              <a href="#expert-opinions" className={styles.link}>
                Expert Opinions
              </a>
              <a href="#news" className={styles.link}>
                News & Activities
              </a>
              <a href="#contact" className={styles.link}>
                Contact
              </a>
            </div>
          </div>

          {/* Social Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Social</h3>
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
            <h3 className={styles.sectionTitle}>Policy</h3>
            <div className={styles.linksList}>
              <a href="/privacy" className={styles.link}>
                Privacy Policy
              </a>
              <a href="/terms" className={styles.link}>
                Terms of Service
              </a>
              <a href="/accessibility" className={styles.link}>
                Accessibility
              </a>
              <a href="/cookies" className={styles.link}>
                Cookies Policy
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contact Info</h3>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                PTIT - Posts and Telecommunications Institute of Technology
              </p>
              <p className={styles.contactItem}>
                Km10, Nguyen Trai Road, Ha Dong District, Hanoi, Vietnam
              </p>
              <p className={styles.contactItem}>
                Phone: +84 (024) 3854 2308
              </p>
              <p className={styles.contactItem}>
                Email: vcc@ptit.edu.vn
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
            <a href="/terms" className={styles.legalLink}>
              Terms
            </a>
            <span className={styles.divider}>,</span>
            <a href="/privacy" className={styles.legalLink}>
              Privacy
            </a>
            <span className={styles.divider}>&</span>
            <a href="/accessibility" className={styles.legalLink}>
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CreditsSection;