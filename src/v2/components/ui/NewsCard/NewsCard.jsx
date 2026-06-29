import React from 'react';
import styles from './NewsCard.module.css';

function NewsCard({
  img,
  time,
  title,
  description,
  onClick,
  ...props
}) {
  return (
    <div
      className={styles.newsCard}
      onClick={onClick}
      role={onClick ? "button" : "article"}
      tabIndex={onClick ? 0 : undefined}
      {...props}
    >
      <div className={styles.imageContainer}>
        <img
          src={img || `${import.meta.env.BASE_URL}src/v2/assets/placeholder.webp`}
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