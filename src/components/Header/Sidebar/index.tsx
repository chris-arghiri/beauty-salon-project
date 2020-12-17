import React from 'react';
import styles from './Sidebar.module.scss';

import Menu from '../../Menu';
import NavigationItems from '../../NavigationItems';

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <Menu />
      <NavigationItems />
      <p
        style={{
          color: '#fff',
          margin: 'auto 0 auto 2rem',
          fontSize: '0.5rem'
        }}>
        Lorem dolor sit amet consectetur adipisicing elit. Dignissimos qui
        explicabo eius dolores blanditiis non adipisci dicta doloremque ea
      </p>
    </div>
  );
};

export default Sidebar;
