import React, { useState } from "react";
import styles from "./ContactSection.module.css";
import Button from "../../ui/Button/Button";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useTranslation } from "../../../hooks/useTranslation";
import CreditsSection from "../CreditsSection/CreditsSection.jsx";

const ContactSection = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  // PTIT coordinates
  const latitude = 20.980953040050267;
  const longitude = 105.7874126085195;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // TODO: Handle newsletter signup
    setEmail("");
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left Content - Contact Information */}
          <div className={styles.leftContent}>
            <h2 className={styles.title}> 
              {t("contact_title") || "Contact Us"}
            </h2>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPin size={20} />
                <div>
                  <span className={styles.contactLabel}>{t("contact_office_title")}: </span>
                  <span className={styles.contactValue}>
                    {t("contact_office_address") || "PTIT - Posts and Telecommunications Institute of Technology, Km10, Nguyen Trai Road, Ha Dong District, Hanoi, Vietnam"}
                  </span>
                </div>
              </div>

              <div className={styles.contactItem}>
                <Phone size={20} />
                <div>
                  <span className={styles.contactLabel}>{t("contact_hotline_title")}: </span>
                  <span className={styles.contactValue}>
                    {t("contact_hotline_number") || "+84 (024) 3854 2308"}
                  </span>
                </div>
              </div>

              <div className={styles.contactItem}>
                <Mail size={20} />
                <div>
                  <span className={styles.contactLabel}>{t("contact_email_title")}: </span>
                  <span className={styles.contactValue}>
                    {t("contact_email_address") || "vcc@ptit.edu.vn"}
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className={styles.newsletterSection}>
              <h3 className={styles.newsletterTitle}>
                {t("newsletter_title") || "Stay Updated"}
              </h3>
              <p className={styles.newsletterDescription}>
                {t("newsletter_description")}
              </p>
              <form onSubmit={handleSubmit} className={styles.newsletterForm}>
                <div className={styles.inputContainer}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("newsletter_placeholder") || "Enter your email address"}
                    className={styles.emailInput}
                    required
                  />
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="medium"
                    className={styles.submitButton}
                  >
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Content - Map */}
          <div className={styles.rightContent}>
            <div className={styles.mapContainer}>
              <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                  longitude - 0.01
                },${latitude - 0.005},${longitude + 0.01},${
                  latitude + 0.005
                }&layer=mapnik&marker=${latitude},${longitude}`}
                className={styles.mapElement}
                title="PTIT VCC Location Map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className={styles.mapOverlay}>
                <a
                  href={`https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=16/${latitude}/${longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapLink}
                >
                  {t("view_larger_map")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Credits Section */}
      <CreditsSection />
    </section>
  );
};

export default ContactSection;