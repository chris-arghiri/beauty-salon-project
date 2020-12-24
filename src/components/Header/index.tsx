import React from 'react';
import styles from './Header.module.scss';

import Sidebar from './Sidebar';
import About from './About';

const Header = () => {
  return (
    <div className={styles.Header}>
      <Sidebar />
      <About />
    </div>
  );
};

export default Header;
