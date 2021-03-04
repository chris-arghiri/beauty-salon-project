import React from 'react';
import NavigationItem from './NavigationItem';
import styles from './NavigationItems.module.scss';

const NavigationItems = () => (
  <>
    <ul className={styles.NavigationItems}>
      <NavigationItem link='/' color='#5bd1d7'>
        Gallery
      </NavigationItem>
      <NavigationItem link='/' color='pink'>
        Credentials
      </NavigationItem>
      <NavigationItem link='/' color='#f0bf4c'>
        Videos
      </NavigationItem>
      <NavigationItem link='/' color='#bbcefb'>
        Shop
      </NavigationItem>
      <NavigationItem link='/' color='#f59794'>
        Info
      </NavigationItem>
    </ul>
  </>
);

export default NavigationItems;
