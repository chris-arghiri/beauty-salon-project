import React, { FunctionComponent } from 'react';
import styles from './NavBarItems.module.scss';

import shoppingIcon from '../../../assets/svg/shopping-bag.svg';
import galleryIcon from '../../../assets/svg/gallery.svg';

interface INavBarItemsProps {}

const Items: FunctionComponent<INavBarItemsProps> = () => {
  return (
    <div className={styles.NavBarItems}>
      <div className={styles.NavBarItems__item}>
        <img src={galleryIcon} alt='change' />
        <a href='/'>Gallery</a>
      </div>
      <div className={styles.NavBarItems__item}>
        <img src={shoppingIcon} alt='shoppingIcon' />
        <a href='/'>Shop</a>
      </div>
    </div>
  );
};

export default Items;
