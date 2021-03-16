import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from './NavigationBar.module.scss';

import Logo from './Logo';
import NavBarItems from './NavBarItems';
import Menu from './Menu';

interface INavigationBarProps {}

const NavigationBar: FunctionComponent<INavigationBarProps> = () => {
  const [scrollState, setScrollState] = useState<boolean>(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 60;
      if (scrollCheck !== scrollState) {
        setScrollState(scrollCheck);
      }
    };

    scrollState
      ? document.documentElement.style.setProperty('--opacity', '0')
      : document.documentElement.style.setProperty('--opacity', '1');

    document.addEventListener('scroll', onScroll);

    return () => {
      document.documentElement.style.setProperty('--opacity', '0');
      document.removeEventListener('scroll', onScroll);
    };
  }, [scrollState, setScrollState]);

  return (
    <nav
      className={styles.NavigationBar}
      style={scrollState ? undefined : { position: 'fixed' }}>
      <Logo />
      <NavBarItems />
      <Menu />
    </nav>
  );
};

export default NavigationBar;
