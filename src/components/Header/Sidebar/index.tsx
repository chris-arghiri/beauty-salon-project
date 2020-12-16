import React from 'react';
import styles from './Sidebar.module.scss';
import Menu from '../../Menu';

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <Menu />
    </div>
  );
};

export default Sidebar;
