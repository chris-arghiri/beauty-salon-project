import React, { FunctionComponent } from 'react';
import styles from './NavigationBar.module.scss';

import Logo from '../../components/NavigationBar/Logo';
import Menu from '../../components/NavigationBar/Menu';

interface INavigationBarProps {}

const NavigationBar: FunctionComponent<INavigationBarProps> = () => {
  return (
    <div className={styles.NavigationBar}>
      <Logo />
      <Menu />
    </div>
  );
};

export default NavigationBar;
