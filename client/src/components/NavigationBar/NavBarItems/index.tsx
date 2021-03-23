import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';
import styles from './NavBarItems.module.scss';

import shoppingIcon from '../../../assets/svg/shopping-bag.svg';
import galleryIcon from '../../../assets/svg/gallery.svg';

interface INavBarItemsProps {}

const Items: FunctionComponent<INavBarItemsProps> = () => {
  return (
    <div className={styles.NavBarItems}>
      <div className={styles.NavBarItems__item}>
        <img src={galleryIcon} alt='change' />
        <Link to='/gallery'>Gallery</Link>
      </div>
      <div className={styles.NavBarItems__item}>
        <img src={shoppingIcon} alt='shoppingIcon' />
        <Link to='/shop'>Shop</Link>
      </div>
    </div>
  );
};

export default Items;
