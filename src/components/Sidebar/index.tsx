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
          <a href='/'>Gallery</a>
        </li>
        <li>
          <a href='/'>Credentials</a>
        </li>
        <li>
          <a href='/'>Videos</a>
        </li>
        <li>
          <a href='/'>Shop</a>
        </li>
        <li>
          <a href='/'>Info</a>
        </li>
        <li>
          <a href='/'>COVID-19 info</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
