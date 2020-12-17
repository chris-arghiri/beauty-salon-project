import React, { FunctionComponent, useState } from 'react';
import styles from './Menu.module.scss';

interface IMenuProps {}

const Menu: FunctionComponent<IMenuProps> = (props) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const menuOpenHandler = () => {
    setIsToggled(true);
  };

  const menuClosedHandler = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={styles.Menu}>
      <a
        href='#'
        className={
          isToggled ? styles.Menu__buttonClose : styles.Menu__buttonOpen
        }
        onClick={isToggled ? menuClosedHandler : menuOpenHandler}>
        {''}
      </a>
      <p className={styles.Menu__text}>ABSC.</p>
    </div>
  );
};

export default Menu;
