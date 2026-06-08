import React, { useState } from 'react';
import styles from './ExpertOpinionSection.module.css';
import Title from '../../ui/Title/Title';
import Button from '../../ui/Button/Button';
import Modal from '../../ui/Modal/Modal';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

function ExpertOpinionSection() {
  const { t } = useTranslation();
  const [currentExpert, setCurrentExpert] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const experts = [
    {
      name: t('expert_name_1'),
      position: t('expert_position_1'),
      opinion: t('expert_opinion_1'),
      fullOpinion: t('expert_opinion_1'),
      image: "/src/v2/assets/image.webp",
      hasMore: false
    },
    {
      name: t('expert_name_2'),
      position: t('expert_position_2'),
      opinion: t('expert_opinion_2'),
      fullOpinion: t('expert_opinion_2_full'),
      image: "/src/v2/assets/image2.webp",
      hasMore: true
    },
    {
      name: t('expert_name_3'),
      position: t('expert_position_3'),
      opinion: t('expert_opinion_3'),
      fullOpinion: t('expert_opinion_3'),
      image: "/src/v2/assets/TranthiB.webp",
      hasMore: false
    },
  ];

  const nextExpert = () => {
    setCurrentExpert((prev) => (prev + 1) % experts.length);
  };

  const prevExpert = () => {
    setCurrentExpert((prev) => (prev - 1 + experts.length) % experts.length);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const currentExpertData = experts[currentExpert];

  return (
    <section className={styles.expertOpinionSection}>
      <div className={styles.container}>
        {/* Section Title */}
        <Title level="h2" color="orange" variant="gradient-lines">
          {t('expert_opinions_title')}
        </Title>

        {/* Expert Card with Side Navigation */}
        <div className={styles.expertCardContainer}>
          {/* Left Arrow */}
          <Button 
            variant="outline" 
            size="small"
            onClick={prevExpert}
            className={styles.navButton}
          >
            <ChevronLeft size={20} />
          </Button>

          {/* Expert Card */}
          <div className={styles.expertCard}>
            <div className={styles.expertImage}>
              <img 
                src={currentExpertData.image} 
                alt={currentExpertData.name}
                className={styles.image}
              />
            </div>
            
            <div className={styles.expertContent}>
              <div className={styles.opinion}>
                "{currentExpertData.opinion}"
              </div>

              {currentExpertData.hasMore && (
                <div className={styles.seeMoreContainer}>
                  <Button
                    variant="outline-orange"
                    size="small"
                    onClick={openModal}
                    icon={<ExternalLink size={16} />}
                    className={styles.seeMoreButton}
                  >
                    {t('see_more')}
                  </Button>
                </div>
              )}

              <div className={styles.expertInfo}>
                <h3 className={styles.name}>{currentExpertData.name}</h3>
                <p className={styles.position}>{currentExpertData.position}</p>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <Button 
            variant="outline" 
            size="small"
            onClick={nextExpert}
            className={styles.navButton}
          >
            <ChevronRight size={20} />
          </Button>
        </div>

        {/* Bottom Indicators Only */}
        <div className={styles.indicators}>
          {experts.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentExpert ? styles.active : ''}`}
              onClick={() => setCurrentExpert(index)}
            />
          ))}
        </div>
      </div>

      {/* Modal for full expert opinion */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={currentExpertData.name}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalExpertInfo}>
            <img
              src={currentExpertData.image}
              alt={currentExpertData.name}
              className={styles.modalImage}
            />
            <div className={styles.modalExpertDetails}>
              <h3 className={styles.modalName}>{currentExpertData.name}</h3>
              <p className={styles.modalPosition}>{currentExpertData.position}</p>
            </div>
          </div>

          <div className={styles.modalOpinion}>
            {currentExpertData.fullOpinion.split('\n\n').map((paragraph, index) => (
              <p key={index} className={styles.modalParagraph}>
                {paragraph.replace(/^\n/, '').replace(/\n$/, '')}
              </p>
            ))}
          </div>
        </div>
      </Modal>
    </section>
  );
}

export default ExpertOpinionSection;