import React, { FunctionComponent, MouseEvent, useState } from 'react';
import styles from './Menu.module.scss';

interface IMenuProps {}

const Menu: FunctionComponent<IMenuProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuOpenHandler = (event: MouseEvent<HTMLElement>) => {
    setIsOpen(true);
  };

  const menuClosedHandler = (event: MouseEvent<HTMLElement>) => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.Menu}>
      <a
        href='#'
        className={styles.Menu__button}
        onClick={isOpen ? menuOpenHandler : menuClosedHandler}>
        {' '}
      </a>
      <p className={styles.Menu__text}>ABSC.</p>
    </div>
  );
};

export default Menu;
