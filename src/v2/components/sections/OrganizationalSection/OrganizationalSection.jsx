import React from 'react';
import Title from '../../ui/Title/Title';
import { Settings } from 'lucide-react';
import styles from './OrganizationalSection.module.css';
import { useTranslation } from '../../../hooks/useTranslation';

const OrganizationalSection = () => {
  const { t, currentLang } = useTranslation();
  return (
    <section className={styles.organizationalSection} id="organizational-structure">
      <div className={styles.container}>
        <Title 
          level="h2" 
          color="orange" 
          variant="gradient-lines"
          icon={<Settings size={24} color="#E67A35" />}
        >
          {t("organizational")}
        </Title>
        
        <div className={styles.imageContainer}>
          <img
            src={
              currentLang === "EN"
                ? `/src/v2/assets/organizational_structure.png`
                : `/src/v2/assets/oraganizational_vi.png`
            }
            alt="PTIT VCC Organizational Structure"
            className={styles.structureImage}
          />
        </div>
      </div>
    </section>
  );
};

export default OrganizationalSection;