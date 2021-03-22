import React, { FunctionComponent } from 'react';
import styles from './Header.module.scss';

import headerImg from '../../../assets/images/header-bg-1.jpg';

import NavigationBar from '../../../components/NavigationBar';
import NavigationItems from '../../../components/NavigationItems';
import About from '../../../components/About';

interface IHeaderProps {}

const Header: FunctionComponent<IHeaderProps> = () => {
  return (
    // <div className={styles.Header__overlay}>
    <div className={styles.Header}>
      <NavigationBar />
      <NavigationItems />
      <About />
      <div className={styles.Header__image}>
        <img src={headerImg} alt='img' />
      </div>
    </div>
    // </div>
  );
};

export default Header;
