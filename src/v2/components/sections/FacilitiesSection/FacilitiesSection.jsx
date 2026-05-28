import React from 'react';
import Title from '../../ui/Title/Title';
import { useTranslation } from '../../../hooks/useTranslation';
import { facilitiesImages } from '../../../data/placeholderData';
import { Building } from 'lucide-react';
import styles from './FacilitiesSection.module.css';

const FacilitiesSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className={styles.facilitiesSection} id="facilities">
      <div className={styles.container}>
        <Title 
          level="h2" 
          color="orange" 
          variant="gradient-lines"
          icon={<Building size={24} color="#E67A35" />}
        >
          {t('infrastructure_title')}
        </Title>

        <div className={styles.galleryGrid}>
          {facilitiesImages.map((image, index) => (
            <div
              key={image.id}
              className={`${styles.galleryItem} ${styles[`item${index + 1}`]}`}
            >
              <img
                src={image.image}
                alt={image.title}
                className={styles.facilityImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;