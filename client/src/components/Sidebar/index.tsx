import React, { FunctionComponent } from 'react';
import styles from './Sidebar.module.scss';

export interface IModalProps {
  isOpened: boolean;
}

const Sidebar: FunctionComponent<IModalProps> = ({ isOpened }) => {
  return (
    <div className={isOpened ? styles.Sidebar : undefined} hidden={!isOpened}>
      <ul>
        <li>
          <a href='#gallery'>GALLERY</a>
        </li>
        <li>
          <a href='#credentials'>CREDENTIALS</a>
        </li>
        <li>
          <a href='#videos'>VIDEOS</a>
        </li>
        <li>
          <a href='#shop'>SHOP</a>
        </li>
        <li>
          <a href='#info'>INFO</a>
        </li>
        <li>
          <a href='/'>COVID-19</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
