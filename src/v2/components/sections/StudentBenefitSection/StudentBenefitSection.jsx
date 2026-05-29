import React from "react";
import { Star } from "lucide-react";
import styles from "./StudentBenefitSection.module.css";
import { useTranslation } from "../../../hooks/useTranslation.js";

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
  ];

  return (
    <section className={styles.studentBenefitSection}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.studentTitle}>
            {t("student_title")}
          </h2>

          <h2 className={styles.benefitsTitle}>
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
                {/* Left side layout: Star + Content */}
                {index % 2 === 0 ? (
                  <>
                    <div className={styles.iconContainer}>
                      <Star
                        size={24}
                        className={styles.icon}
                        fill="currentColor"
                      />
                    </div>
                    <div className={styles.benefitContent}>
                      <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                      <p className={styles.benefitDescription}>
                        {benefit.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.benefitContent}>
                      <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                      <p className={styles.benefitDescription}>
                        {benefit.description}
                      </p>
                    </div>
                    <div className={styles.iconContainer}>
                      <Star
                        size={24}
                        className={styles.icon}
                        fill="currentColor"
                      />
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
      </div>
    </section>
  );
};

export default StudentBenefitSection;
