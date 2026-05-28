import React from 'react';
import Card from '../Card/Card';
import styles from './MissionCard.module.css';

const MissionCard = ({ 
  icon, 
  title, 
  description, 
  variant = 'orange-gradient',
  textAlign = 'left'
}) => {
  return (
    <Card variant={variant} padding="medium" textAlign={textAlign}>
      <div className={styles.header}>
        <div className={styles.icon}>
          {icon}
        </div>
        <div className={styles.title}>
          {title}
        </div>
      </div>
      <div className={styles.description}>
        {description}
      </div>
    </Card>
  );
};

export default MissionCard;