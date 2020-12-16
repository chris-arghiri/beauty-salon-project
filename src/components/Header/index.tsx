import React from 'react';
import styles from './Header.module.scss';
import Sidebar from './Sidebar';

const Header = () => {
  return (
    <div className={styles.Header}>
      <Sidebar />
      {/* <h1 className={styles.Header__text}>The App is working! Don't worry</h1>; */}
    </div>
  );
};

export default Header;
