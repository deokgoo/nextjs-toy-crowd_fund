import React from 'react';
import styles from './menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuItem}>
        Create
      </div>
      <div className={styles.menuItem}>
        Modify
      </div>
    </div>
  );
};

export default Menu;
