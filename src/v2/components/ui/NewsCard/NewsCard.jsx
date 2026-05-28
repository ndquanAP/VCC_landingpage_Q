import React from 'react';
import styles from './NewsCard.module.css';
import placeholderImg from '../../../assets/placeholder.webp';

function NewsCard({ img, link, time, title, description, ...props }) {
  const handleCardClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div 
      className={styles.newsCard} 
      onClick={handleCardClick}
      role={link ? "button" : "article"}
      tabIndex={link ? 0 : undefined}
      {...props}
    >
      <div className={styles.imageContainer}>
        <img 
          src={img || placeholderImg} 
          alt={title} 
          className={styles.image}
        />
      </div>
      
      <div className={styles.content}>
        <time className={styles.time}>
          {time}
        </time>
        
        <h3 className={styles.title}>
          {title}
        </h3>
        
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default NewsCard;