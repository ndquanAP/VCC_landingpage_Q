import React from 'react';
import styles from './MissionVisionSection.module.css';
import Title from '../../ui/Title/Title';
import MissionCard from '../../ui/MissionCard/MissionCard';
import { ShieldCheck } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
/* import { imageOverlay } from 'leaflet'; */

function MissionVisionSection() {
  const { t } = useTranslation();

  return (
    <section className={styles.missionVisionSection}>
      <div className={styles.container}>
        {/* Section Title */}
        <Title level="h2" color="orange" variant="gradient-lines" icon={<ShieldCheck size={24} color="#E67A35" />}>
          {t('vision_mission')}
        </Title>

        {/* Mission & Vision Cards */}
        <div className={styles.cardsContainer}>
          <MissionCard 
            variant="orange-gradient"
            icon={  <img src="/public/src/v2/assets/v1/mission.png"/>}
            title= {t("mission_title")}
            description= {t("mission_description")}
            textAlign="left"
          />

          <MissionCard 
            variant="purple-gradient"
            icon={  <img src="/public/src/v2/assets/v1/vision.png"/>}
            title= {t("vision_title")}
            description= {t("vision_description")}
          />
        </div>
      </div>
    </section>
  );
}

export default MissionVisionSection;