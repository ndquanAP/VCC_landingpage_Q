import React from "react";
import { Sparkle } from "lucide-react";
import styles from "./StudentBenefitSection.module.css";
import { useTranslation } from "../../../hooks/useTranslation.js";
import CreditsSection from "../CreditsSection/CreditsSection.jsx";
import groupImage from "../../../assets/student_benifits/Group 1224.png";


const StudentBenefitSection = () => {
  const { t } = useTranslation();
  const benefits = [
    {
      id: 1,
      title: t('benefit_1_title'),
      description: t('benefit_1_decs'),
    },
    {
      id: 2,
      title: t('benefit_2_title'),
      description: t('benefit_2_decs'),
    },
    {
      id: 3,
      title: t('benefit_3_title'),
      description:t('benefit_3_decs'),
    },
    {
      id: 4,
      title: t('benefit_4_title'),
      description: t('benefit_4_decs'),
    },
    {
      id: 5,
      title: t('benefit_5_title'),
      description: t('benefit_5_decs'),
    },
    {
      id: 6,
      title: t('benefit_6_title'),
      description: t('benefit_6_decs'),
    },
    {
      id: 7,
      title: t('benefit_7_title'),
      description: t('benefit_7_decs'),
    },
  ];

  return (
    <section className={styles.studentBenefitSection} id="student-benefits">
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          
          <h2 className={styles.studentTitle}> 
            {t("student_title")}
            <div className={styles.titleBox}></div>
          </h2>

          <h2 className={styles.benefitsTitle}>
          <div className={styles.titleBox2}></div>
            {t("benefits_title")}
          </h2>
        </div>

        <div className={styles.benefitsPath}>
          {benefits.map((benefit, index) => (
            <div key={benefit.id} className={styles.benefitWrapper}>
              <div
                className={`${styles.benefitRow} ${
                  index % 2 === 0 ? styles.leftLayout : styles.rightLayout
                }`}
              >
                {/* Left side layout: Sparkles + Content */}
                {index % 2 === 0 ? (
                  <>
                    <div className={styles.benefitContent}>
                      <p className={styles.benefitDescription}>
                        {benefit.description}
                      </p>
                      <div className={styles.iconContainer}>
                        <Sparkle
                          size={24}
                          className={styles.icon}
                          fill="currentColor"
                        />
                    </div>
                    </div>
                    <div className={styles.stickLeft}></div>
                  </>
                ) : (
                  <>
                  <div></div>
                  <div></div>
                  <div className={styles.stickRight}></div>
                    <div className={styles.benefitContent}>
                      <div className={styles.iconContainer}>
                        <Sparkle
                          size={24}
                          className={styles.icon}
                          fill="currentColor"
                        />
                      </div>
                      <p className={styles.benefitDescription}>
                        {benefit.description}
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Connecting Line - only show if not the last item */}
              {index < benefits.length - 1 && (
                <div className={styles.connectingLine}></div>
              )}
            </div>
          ))}
        </div>
        <img src={groupImage} className={styles.image}/>
      </div>
      {/* Credits Section */}
      <CreditsSection />
    </section>
  );
};



export default StudentBenefitSection;
