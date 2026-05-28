import React from "react";
import ExpertOpinionSection from "../components/sections/ExpertOpinionSection/ExpertOpinionSection";
import styles from "./Page.module.css";

const ExpertOpinionPage = () => {
  return (
    <div className={styles.pageContainer}>
      <ExpertOpinionSection />
    </div>
  );
};

export default ExpertOpinionPage;