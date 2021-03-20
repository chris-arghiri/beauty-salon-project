import React, { FunctionComponent } from 'react';
import styles from './Shop.module.scss';

interface IShopProps {}

const Shop: FunctionComponent<IShopProps> = () => {
  return <div className={styles.Shop} id='shop'></div>;
};

export default Shop;
