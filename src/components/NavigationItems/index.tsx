import React from 'react';
import NavigationItem from './NavigationItem';
import styles from './NavigationItems.module.scss';

const NavigationItems = () => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link='/' color='#5bd1d7'>
      About
    </NavigationItem>
    <NavigationItem link='/' color='pink'>
      About
    </NavigationItem>
    <NavigationItem link='/' color='#f0bf4c'>
      About
    </NavigationItem>
    <NavigationItem link='/' color='#fff'>
      About
    </NavigationItem>
    <NavigationItem link='/' color='#f59794'>
      About
    </NavigationItem>
    <NavigationItem link='/' color='#bccefb'>
      About
    </NavigationItem>
  </ul>
);

export default NavigationItems;
