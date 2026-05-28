import React from 'react';
import Title from '../../ui/Title/Title';
import { Building2 } from 'lucide-react';
import styles from './OrganizationalSection.module.css';
import orgStructureImg from '../../../assets/organizational_structure.webp';

const OrganizationalSection = () => {
  return (
    <section className={styles.organizationalSection} id="organizational-structure">
      <div className={styles.container}>
        <Title 
          level="h2" 
          color="orange" 
          variant="gradient-lines"
          icon={<Building2 size={24} color="#E67A35" />}
        >
          Organizational Structure
        </Title>
        
        <div className={styles.imageContainer}>
          <img 
            src={orgStructureImg} 
            alt="PTIT VCC Organizational Structure"
            className={styles.structureImage}
          />
        </div>
      </div>
    </section>
  );
};

export default OrganizationalSection;