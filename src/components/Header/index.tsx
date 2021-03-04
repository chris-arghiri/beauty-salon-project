import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png';

import Menu from '../Menu';
import NavigationItems from '../NavigationItems';
import About from './About';

const Header = () => {
  return (
    <div className={styles.Header}>
      <img src={logo} alt='logo' className={styles.Header__logo} />
      <NavigationItems />
      <About />
      <Menu />
    </div>
  );
};

export default Header;
