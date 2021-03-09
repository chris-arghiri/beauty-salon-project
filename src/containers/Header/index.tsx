import React, { FunctionComponent } from 'react';
import styles from './Header.module.scss';
import cover from '../../assets/images/header_illustration.png';

import NavigationBar from '../../components/NavigationBar';
import NavigationItems from '../../components/NavigationItems';
import About from '../../components/About';

interface IHeaderProps {}

const Header: FunctionComponent<IHeaderProps> = () => {
  return (
    <div className={styles.Header}>
      <img src={cover} alt='cover' className={styles.Header__cover} />
      <NavigationBar />
      <NavigationItems />
      <About />
    </div>
  );
};

export default Header;
