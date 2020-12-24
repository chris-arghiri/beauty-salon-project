import React, { FunctionComponent } from 'react';
import styles from './Modal.module.scss';

interface IModalProps {
  isOpened: boolean;
  buttonClassName?: string;
  // closeMenu: (event: React.MouseEvent<HTMLElement>) => {

  // }
}

const Modal: FunctionComponent<IModalProps> = ({
  isOpened,
  buttonClassName
}) => {
  return (
    <div className={isOpened ? styles.Modal : undefined} hidden={!isOpened}>
      <a
        href='/'
        className={buttonClassName}
        /*onClick={closeMenu} */
      ></a>
      <ul style={{ color: 'white' }}>
        <li style={{ color: 'black' }}>
          <a href='/'>Content</a>
        </li>
        <li style={{ color: 'black' }}>
          <a href='/'>Content</a>
        </li>
        <li style={{ color: 'black' }}>
          <a href='/'>Content</a>
        </li>
        <li style={{ color: 'black' }}>
          <a href='/'>Content</a>
        </li>
        <li style={{ color: 'black' }}>
          <a href='/'>Content</a>
        </li>
        <li style={{ color: 'black' }}>
          <a href='/'>Content</a>
        </li>
      </ul>
    </div>
  );
};

export default Modal;
