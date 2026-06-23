import React, { useState, useEffect } from 'react';
import Title from '../../ui/Title/Title';
import TriangleButton from "../../ui/TriangleButton/TriangleButton";
import { useTranslation } from '../../../hooks/useTranslation';
import { getStaffMembers } from '../../../data/placeholderData';
import { Users, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './FacultySection.module.css';
import characterBg from '../../../assets/v1/character-background.webp';
import hoiThoai from '../../../assets/v1/hoi_thoai.png';

const FacultySection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const staffMembers = getStaffMembers(t);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % staffMembers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, staffMembers.length]);

  const stopAutoPlay = (callback) => {
    setIsAutoPlaying(false);
    callback();
  };

  const nextSlide = () =>
    stopAutoPlay(() =>
      setCurrentSlide((prev) => (prev + 1) % staffMembers.length)
    );
  
  const prevSlide = () =>
    stopAutoPlay(() =>
      setCurrentSlide(
        (prev) => (prev - 1 + staffMembers.length) % staffMembers.length
      )
    );
  
  const goToSlide = (index) => stopAutoPlay(() => setCurrentSlide(index));

  const getCardClasses = (index) => {
    const total = staffMembers.length;
    const diff = (index - currentSlide + total) % total;

    if (diff === 0) return styles.cardCenter;
    if (diff === 1 || diff === -(total - 1)) return styles.cardRight;
    if (diff === total - 1 || diff === -1) return styles.cardLeft;

    return styles.cardHidden;
  };

  return (
    <section className={styles.facultySection} id="faculty">
      <div className={styles.container}>
        <Title 
          level="h2" 
          color="orange" 
          variant="gradient-lines"
          icon={<Users size={24} color="#E67A35" />}
        >
          {t('teachers_title')}
        </Title>

        <div className={styles.carouselContainer}>
          <TriangleButton
            direction="left"

            onClick={prevSlide}
          />

          <div className={styles.carousel}>
            {staffMembers.map((member, index) => (
              <div
                key={member.id}
                className={`${styles.card} ${getCardClasses(index)}`}
                onClick={() => goToSlide(index)}
              >
                <img
                  src={characterBg}
                  alt=""
                  className={styles.arcadeBg}
                />

                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.person}
                />

                {index === currentSlide && (
                  <div className={styles.bubbleWrapper}>
                    <img
                      src={hoiThoai}
                      alt=""
                      className={styles.bubble}
                    />

                    <div className={styles.cardContent}>
                      <h4 className={styles.cardName}>{member.name}</h4>
                      <p className={styles.cardTitle}>{member.title}</p>
                      <p className={styles.cardDesc}>{member.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <TriangleButton
            direction="right"
            
            onClick={nextSlide}
          />
        </div> 

        <div className={styles.dotsContainer}>
          {staffMembers.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentSlide ? styles.dotActive : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to faculty member ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;