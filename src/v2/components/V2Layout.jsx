import React from 'react';
import styles from './V2Layout.module.css';
// TODO: Add responsive design for tablet and mobile

const V2Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
};

export default V2Layout;