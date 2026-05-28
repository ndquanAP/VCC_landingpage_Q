import React from "react";
import StudentBenefitSection from "../components/sections/StudentBenefitSection/StudentBenefitSection";
import styles from "./Page.module.css";

const StudentBenefitsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <StudentBenefitSection />
    </div>
  );
};

export default StudentBenefitsPage;