import React, { useState, useEffect } from 'react';
import Title from '../../ui/Title/Title';
import { useTranslation } from '../../../hooks/useTranslation';
import { getStaffMembers } from '../../../data/placeholderData';
import { Users, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './FacultySection.module.css';

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
          <button 
            className={styles.navButton} 
            onClick={prevSlide}
            aria-label="Previous faculty member"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            className={styles.navButton} 
            onClick={nextSlide}
            aria-label="Next faculty member"
          >
            <ChevronRight size={32} />
          </button>

          <div className={styles.carousel}>
            {staffMembers.map((member, index) => (
              <div
                key={member.id}
                className={`${styles.card} ${getCardClasses(index)}`}
                onClick={() => goToSlide(index)}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${member.image})`,
                }}
              >
                <div className={styles.cardContent}>
                  <h4 className={styles.cardName}>{member.name}</h4>
                  <p className={styles.cardTitle}>{member.title}</p>
                  <p className={styles.cardDesc}>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
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