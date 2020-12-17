import React from 'react';
import NavigationItem from './NavigationItem';
import styles from './NavigationItems.module.scss';

const NavigationItems = () => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link='/' color='#5bd1d7'></NavigationItem>
    <NavigationItem link='/' color='pink'></NavigationItem>
    <NavigationItem link='/' color='#f0bf4c'></NavigationItem>
    <NavigationItem link='/' color='#fff'></NavigationItem>
    <NavigationItem link='/' color='#f59794'></NavigationItem>
    <NavigationItem link='/' color='#bccefb'></NavigationItem>
  </ul>
);

export default NavigationItems;
