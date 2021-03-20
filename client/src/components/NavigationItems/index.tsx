import React from 'react';
import NavigationItem from './NavigationItem';
import styles from './NavigationItems.module.scss';

const NavigationItems = () => (
  <>
    <ul className={styles.NavigationItems}>
      <NavigationItem id='gallery' color='#5bd1d7'>
        Gallery
      </NavigationItem>
      <NavigationItem id='credentials' color='pink'>
        Credentials
      </NavigationItem>
      <NavigationItem id='videos' color='#f0bf4c'>
        Videos
      </NavigationItem>
      <NavigationItem id='shop' color='#bbcefb'>
        Shop
      </NavigationItem>
      <NavigationItem id='info' color='#f59794'>
        Info
      </NavigationItem>
    </ul>
  </>
);

export default NavigationItems;
