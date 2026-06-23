import React from 'react';
import Title from '../../ui/Title/Title';
import Button from '../../ui/Button/Button';
import { useTranslation } from '../../../hooks/useTranslation';
import { Play, ExternalLink } from 'lucide-react';
import styles from './VideoSection.module.css';
import song from '../../../assets/v1/song.png';
import svg from '../../../assets/v1/SVG.png';

const VideoSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className={styles.videoSection} id="video">
    <img src={song} className={styles.song}/>
      <div className={styles.container}>
        <div className={styles.videoContent}>
          <div className={styles.videoWrapper}>
            <div className={styles.videoContainer}>
              <iframe
                src= "https://www.youtube.com/embed/n581vo7CHRY"
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
            <div className={styles.title}>
              <div className={styles.banner}>
                {t('vcc_opening_card_title')}
              </div>
              <img src={svg}/>
            </div>
            <p className={styles.description}>
              {t('vcc_opening_card_description')}
            </p>
            
            {/*<Button 
              variant="outline-orange"
              icon={<ExternalLink size={18} />}
              className={styles.seeMoreButton}
            >
              {t('see_more')}
            </Button>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;