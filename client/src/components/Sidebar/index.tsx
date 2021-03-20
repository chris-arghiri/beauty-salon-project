import React, { FunctionComponent } from 'react';
import styles from './Sidebar.module.scss';

export interface IModalProps {
  isOpened: boolean;
}

const Sidebar: FunctionComponent<IModalProps> = ({ isOpened }) => {
  return (
    <div
      className={
        isOpened ? styles.Sidebar : undefined /*styles.Sidebar__close*/
      }
      hidden={!isOpened}>
      <ul>
        <li>
          <a href='/'>GALLERY</a>
        </li>
        <li>
          <a href='/'>CREDENTIALS</a>
        </li>
        <li>
          <a href='/'>VIDEOS</a>
        </li>
        <li>
          <a href='/'>SHOP</a>
        </li>
        <li>
          <a href='/'>INFO</a>
        </li>
        <li>
          <a href='/'>COVID-19</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
