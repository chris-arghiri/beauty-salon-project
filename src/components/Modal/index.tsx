import { ReactComponent } from '*.svg';
import React, { CSSProperties, FunctionComponent } from 'react';
import styles from './Modal.module.scss';

interface IModalProps {
  children: React.ReactNode;
  isOpened: boolean;
  //   anchorStyle: { [key: string]: string };
}

const Modal: FunctionComponent<IModalProps> = ({ children, isOpened }) => {
  return <div className={isOpened ? styles.Modal : undefined}>{children}</div>;
};

export default Modal;
