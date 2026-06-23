import React from 'react';
import Title from '../../ui/Title/Title';
import { useTranslation } from '../../../hooks/useTranslation';
import { facilitiesImages } from '../../../data/placeholderData';
import { Building } from 'lucide-react';
import styles from './FacilitiesSection.module.css';
import footFa from '../../../assets/v1/foot_fa.png';

const FacilitiesSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className={styles.facilitiesSection} id="facilities">
      <div className={styles.container}>
        <Title 
          level="h2" 
          color="blue"
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
      <img src={footFa} className={styles.foot}/>
    </section>
  );
};

export default FacilitiesSection;