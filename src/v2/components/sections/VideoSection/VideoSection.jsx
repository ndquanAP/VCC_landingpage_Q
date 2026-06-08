import React from 'react';
import Title from '../../ui/Title/Title';
import Button from '../../ui/Button/Button';
import { useTranslation } from '../../../hooks/useTranslation';
import { Play, ExternalLink } from 'lucide-react';
import styles from './VideoSection.module.css';

const VideoSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className={styles.videoSection} id="video">
      <div className={styles.container}>
        <Title 
          level="h2" 
          color="orange" 
          variant="gradient-lines"
          icon={<Play size={24} color="#E67A35" />}
        >
          {t('vcc_opening_card_title')}
        </Title>

        <div className={styles.videoContent}>
          <div className={styles.videoWrapper}>
            <div className={styles.videoContainer}>
              <iframe
                src= "https://www.youtube.com/embed/Fq6ZR6vNDJk?rel=0"
                title="VCC Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className={styles.videoFrame}
              />
            </div>
            
            {/* New overlay approach - decorative elements instead of heavy overlay */}
            <div className={styles.decorativeOverlay}>
              <div className={styles.topLeftDecor}></div>
              <div className={styles.bottomRightDecor}></div>
            </div>
          </div>

          <div className={styles.textContent}>
            <p className={styles.description}>
              {t('vcc_opening_card_description')}
            </p>
            
            <Button 
              variant="outline-orange"
              icon={<ExternalLink size={18} />}
              className={styles.seeMoreButton}
            >
              {t('see_more')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;