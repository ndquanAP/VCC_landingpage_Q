import React from "react";
import { Star } from "lucide-react";
import styles from "./StudentBenefitSection.module.css";

const StudentBenefitSection = () => {
  const benefits = [
    {
      id: 1,
      title: "Transfer to CAU Korea",
      description: "Transfer opportunities to CAU Korea in the 3rd or 4th year",
    },
    {
      id: 2,
      title: "International Degree",
      description: "Receive a degree issued by Chung-Ang University (CAU)",
    },
    {
      id: 3,
      title: "World-Class Curriculum",
      description:
        "Access to international-standard curriculum and teaching methods",
    },
    {
      id: 4,
      title: "Global Competitions",
      description: "Participate in international hackathons and workshops",
    },
    {
      id: 5,
      title: "Scholarship Support",
      description: "Scholarships and financial support opportunities available",
    },
    {
      id: 6,
      title: "Career Orientation",
      description: "Modern learning environment with clear career guidance",
    },
  ];

  return (
    <section className={styles.studentBenefitSection}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.studentTitle}>Student</h2>
          <h2 className={styles.benefitsTitle}>Benefits</h2>
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
