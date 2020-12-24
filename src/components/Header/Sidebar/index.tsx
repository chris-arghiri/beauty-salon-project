import React from 'react';
import styles from './Sidebar.module.scss';

import Menu from '../../Menu';
import NavigationItems from '../../NavigationItems';
import Info from './Info';

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <Menu />
      <NavigationItems />
      <Info />
    </div>
  );
};

export default Sidebar;
