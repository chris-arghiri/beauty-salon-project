import React, { FunctionComponent, MouseEvent, useState } from 'react';
import styles from './Menu.module.scss';
import stylesModal from '../Modal/Modal.module.scss';
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
      <Modal isOpened={isToggled} /*close={closeMenu} */>
        <a
          href='#'
          className={styles.Menu__buttonClose}
          hidden={!isToggled}
          onClick={closeMenu}></a>
        <ul style={{ backgroundColor: '#000' }}>
          <li style={{ color: 'white' }}>
            <a href='/'></a>
            <a href='/'></a>
            <a href='/'></a>
            <a href='/'></a>
            <a href='/'></a>
            <a href='/'></a>
          </li>
        </ul>
      </Modal>
      <h3 className={styles.Menu__text}>ABSC.</h3>
    </div>
  );
};

export default Menu;
