import React, { FunctionComponent } from 'react';
import styles from './Sidebar.module.scss';

export interface IModalProps {
  isOpened: boolean;
}

const Sidebar: FunctionComponent<IModalProps> = ({ isOpened }) => {
  const handleClickOutside = (event: MouseEvent) => {};

  return (
    <div
      className={isOpened ? styles.Sidebar : undefined /*styles.Sidebar*/}
      hidden={!isOpened}>
      <ul>
        <li>
          <a href='/'>Something here</a>
        </li>
        <li>
          <a href='/'>Something here</a>
        </li>
        <li>
          <a href='/'>Something here</a>
        </li>
        <li>
          <a href='/'>Something here</a>
        </li>
        <li>
          <a href='/'>Something here</a>
        </li>
        <li>
          <a href='/'>Something here</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
