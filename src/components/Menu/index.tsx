import React, { FunctionComponent, MouseEvent, useState } from 'react';
import styles from './Menu.module.scss';
import Modal from '../Modal';

interface IMenuProps {}

const Menu: FunctionComponent<IMenuProps> = (props) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const showMenu = (event: MouseEvent<HTMLElement>) => {
    setIsToggled(true);
  };

  const closeMenu = (event: MouseEvent<HTMLElement>) => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={styles.Menu}>
      <a href='#' className={styles.Menu__buttonOpen} onClick={showMenu}></a>
      <h3 className={styles.Menu__text}>ABSC.</h3>
      <Modal isOpened={isToggled} buttonClassName={styles.Menu__buttonClose} />
    </div>
  );
};

export default Menu;
