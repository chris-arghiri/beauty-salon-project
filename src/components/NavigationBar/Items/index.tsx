import React, { FunctionComponent } from 'react';
import styles from './Items.module.scss';

interface IitemsProps {}

const Items: FunctionComponent<IitemsProps> = () => {
  return (
    <div className={styles.Items}>
      <a href='/'>Gallery</a>
      <a href='/'>Shop</a>
    </div>
  );
};

export default Items;
