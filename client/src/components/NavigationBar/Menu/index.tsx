import React, {
  FunctionComponent,
  useState,
  useRef,
  useEffect,
  useCallback
} from 'react';
import styles from './Menu.module.scss';
import Sidebar from '../../Sidebar';

interface IMenuProps {}

const Menu: FunctionComponent<IMenuProps> = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLInputElement>(null);

  const handleEscapeKey = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !(wrapperRef.current! as any).contains(event.target)
    ) {
      closeMenu?.();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keyup', handleEscapeKey);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keyup', handleEscapeKey);
    };
  }, [handleClickOutside, handleEscapeKey]);

  const showMenu = () => {
    setIsToggled(true);
  };

  const closeMenu = () => {
    setIsToggled(false);
  };

  return (
    <div className={styles.Menu} ref={wrapperRef}>
      <div
        className={
          isToggled ? styles.Menu__buttonClose : styles.Menu__buttonOpen
        }
        onClick={isToggled ? closeMenu : showMenu}
      />
      <Sidebar isOpened={isToggled} />
    </div>
  );
};

export default Menu;
