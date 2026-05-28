import React from 'react';
import Title from '../../ui/Title/Title';
import { useTranslation } from '../../../hooks/useTranslation';
import { activitiesData } from '../../../data/placeholderData';
import { Calendar } from 'lucide-react';
import styles from './ActivitiesSection.module.css';

const ActivitiesSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className={styles.activitiesSection} id="activities">
      <div className={styles.container}>
        <Title 
          level="h2" 
          color="orange" 
          variant="gradient-lines"
          icon={<Calendar size={24} color="#E67A35" />}
        >
          {t('noticable_activities_title')}
        </Title>

        <div className={styles.activitiesGrid}>
          {activitiesData.map((activity, index) => (
            <div key={index} className={styles.activityCard}>
              <div className={styles.imageContainer}>
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className={styles.activityImage}
                />
                <div className={styles.dateOverlay}>
                  <Calendar size={16} className={styles.dateIcon} />
                  <span className={styles.dateText}>{activity.date}</span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.activityTitle}>{activity.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;