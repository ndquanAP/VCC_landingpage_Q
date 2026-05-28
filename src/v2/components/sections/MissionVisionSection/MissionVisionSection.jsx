import React from 'react';
import styles from './MissionVisionSection.module.css';
import Title from '../../ui/Title/Title';
import MissionCard from '../../ui/MissionCard/MissionCard';
import { Target, Lightbulb } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

function MissionVisionSection() {
  const { t } = useTranslation();

  return (
    <section className={styles.missionVisionSection}>
      <div className={styles.container}>
        {/* Section Title */}
        <Title level="h2" color="orange" variant="gradient-lines">
          {t('vision_title')}
        </Title>

        {/* Mission & Vision Cards */}
        <div className={styles.cardsContainer}>
          <MissionCard 
            variant="orange-gradient"
            icon={<Target size={28} color="#E67A35" />}
            title="Our Mission"
            description="To train high-quality human resources in information technology, contributing to the development of the digital economy and smart society. We aim to provide students with cutting-edge knowledge and practical skills."
            textAlign="left"
          />

          <MissionCard 
            variant="purple-gradient"
            icon={<Lightbulb size={28} color="#8B5FBF" />}
            title="Our Vision"
            description="Becoming a leading regional center for IT training and research, with sustainable and effective international cooperation. We envision creating global opportunities for Vietnamese students."
            textAlign="left"
          />
        </div>
      </div>
    </section>
  );
}

export default MissionVisionSection;