import React, { FunctionComponent } from 'react';
import styles from './Modal.module.scss';
import logo from '../../assets/svgs/logo.svg';

export interface IModalProps {
  isOpened: boolean;
  buttonClassName?: string;
  onCloseMenu(): void;
}

const Modal: FunctionComponent<IModalProps> = ({
  isOpened,
  buttonClassName,
  onCloseMenu
}) => {
  return (
    <div className={isOpened ? styles.Modal : undefined} hidden={!isOpened}>
      <a href='/' className={buttonClassName} onClick={onCloseMenu}>
        {' '}
      </a>
      <>
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
      </>
      <img src={logo} alt='123' />
    </div>
  );
};

export default Modal;
