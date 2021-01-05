import React, { FunctionComponent, useState } from 'react';
import styles from './Menu.module.scss';
import Modal from '../Modal';

interface IMenuProps {}

const Menu: FunctionComponent<IMenuProps> = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const showMenu = () => {
    setIsToggled(true);
  };

  const closeMenu = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <div className={styles.Menu}>
        <div className={styles.Menu__buttonOpen} onClick={showMenu} />
        <h3 className={styles.Menu__text}>ABSC.</h3>
      </div>
      <Modal
        isOpened={isToggled}
        buttonClassName={styles.Menu__buttonClose}
        onCloseMenu={closeMenu}
      />
    </>
  );
};

export default Menu;
