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
          {t('vision_mission')}
        </Title>

        {/* Mission & Vision Cards */}
        <div className={styles.cardsContainer}>
          <MissionCard 
            variant="orange-gradient"
            icon={<Target size={28} color="#E67A35" />}
            title= {t("mission_title")}
            description= {t("mission_description")}
            textAlign="left"
          />

          <MissionCard 
            variant="purple-gradient"
            icon={<Lightbulb size={28} color="#8B5FBF" />}
            title= {t("vision_title")}
            description= {t("vision_description")}
          />
        </div>
      </div>
    </section>
  );
}

export default MissionVisionSection;