import React from 'react';
import styles from './Card.module.css';

const Card = ({ 
  children, 
  variant = 'default', 
  className = '',
  padding = 'medium',
  shadow = 'light',
  textAlign = 'left',
  icon = null
}) => {
  const cardClasses = [
    styles.card,
    styles[`card--${variant}`],
    styles[`card--padding-${padding}`],
    styles[`card--shadow-${shadow}`],
    styles[`card--align-${textAlign}`],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;