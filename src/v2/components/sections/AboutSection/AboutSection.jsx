import React from 'react';
import Title from '../../ui/Title/Title';
import { useTranslation } from '../../../hooks/useTranslation';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <div className={styles.content}>
          <Title level="h1" align="center" color="blue" className={styles.title}>
            {t('about_title')}
          </Title> 
          <p className={styles.description}>
            {t('about_description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;