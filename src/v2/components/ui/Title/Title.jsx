import React from 'react';
import styles from './Title.module.css';

const Title = ({ 
  children, 
  level = 'h2', 
  align = 'center', 
  color = 'dark',
  className = '',
  variant = 'simple',
  icon = null
}) => {
  const Component = level;
  
  const titleClasses = [
    styles.title,
    styles[`title--${level}`],
    styles[`title--${align}`],
    styles[`title--${color}`],
    className
  ].filter(Boolean).join(' ');

  if (variant === 'gradient-lines') {
    return (
      <div className={styles.titleWithLines}>
        <div className={styles.gradientLine}></div>
        <div className={styles.titlePill}>
          {icon && <span className={styles.titleIcon}>{icon}</span>}
          <Component className={titleClasses}>
            {children}
          </Component>
        </div>
        <div className={`${styles.gradientLine} ${styles.gradientLineReverse}`}></div>
      </div>
    );
  }

  return (
    <Component className={titleClasses}>
      {children}
    </Component>
  );
};

export default Title;