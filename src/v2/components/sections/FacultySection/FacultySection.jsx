import React, { useState, useEffect } from "react";
import Title from "../../ui/Title/Title";
import { Mail, Users } from "lucide-react";
import { useTranslation } from "../../../hooks/useTranslation";
import styles from "./FacultySection.module.css";
import { getStaffMembers } from '../../../data/placeholderData';
import TriangleButton from "../../ui/TriangleButton/TriangleButton";


import circleBg from "../../../assets/v1/Circle BG.png";

function FacultySection() {
  const { t } = useTranslation();


  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying] = useState(true);
  const staffMembers = getStaffMembers(t);
  

  useEffect(() => {
      if (!isAutoPlaying) return;
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % staffMembers.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [isAutoPlaying, staffMembers.length]);
  

   const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % staffMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + staffMembers.length) % staffMembers.length
    );
  }; 

  const visibleMembers = Array.from({ length: 3 }, (_, i) => {
    return staffMembers[(currentSlide - i + staffMembers.length) % staffMembers.length];
  });


  return (
    <section
      id="faculty"
      className={styles.section}
    >
      <div className={styles.container}>
        <div className={styles.header}>
            <Title
                level="h2"
                color="orange"
                variant="gradient-lines"
                icon={<Users size={24} color="#E67A35" />}
                >
                {t("teachers_title")}
            </Title>

          <h2 className={styles.title}>
            {t("teachers_title")}
          </h2>
        </div>

        <div className={styles.sliderWrapper}>
           <TriangleButton
            direction="left"
            onClick={prevSlide}
          /> 

          <div className={styles.cardGrid}>
            {visibleMembers.map((member) => (
              <div
                key={member.id}
                className={styles.card}
              >
                <div className={styles.imageArea}>
                  <img
                    src={circleBg}
                    className={styles.circle}
                  />

                  <img
                    src={member.image}
                    alt={member.name}
                    className={styles.person}
                  />
                </div>

                <div className={styles.content}>
                  <h3>{member.name}</h3>
                  <h4>{member.position}</h4>
                  <span>{member.title}</span>
                  <p><Mail size={18} color="#E67A35"/> {member.description}</p>
                  <a href={member.experience} target="_blank" rel="noopener noreferrer">{member.experience}</a>
                </div>
              </div>
            ))}
          </div>

          <TriangleButton
            direction="right"
            onClick={nextSlide}
          />
        </div>

        <div className={styles.pagination}>
            {staffMembers.map((_, index) => (
                <span
                key={index}
                className={
                    currentSlide === index
                    ? styles.active
                    : ""
                }
                onClick={() => setCurrentSlide(index)}
                />
            ))}
        </div>
      </div>
    </section>
  );
}

export default FacultySection;