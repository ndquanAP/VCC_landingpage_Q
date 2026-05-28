import React from "react";
import ContactSection from "../components/sections/ContactSection/ContactSection";
import styles from "./Page.module.css";

const ContactPage = () => {
  return (
    <div className={styles.pageContainer}>
      <ContactSection />
    </div>
  );
};

export default ContactPage;