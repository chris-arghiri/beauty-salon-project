import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from './NavigationBar.module.scss';

import Logo from './Logo';
import Items from './Items';
import Menu from './Menu';

interface INavigationBarProps {}

const NavigationBar: FunctionComponent<INavigationBarProps> = () => {
  const [scrollState, setScrollState] = useState<boolean>(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 60;
      if (scrollCheck !== scrollState) {
        setScrollState(scrollCheck);
      }
    };

    scrollState
      ? document.documentElement.style.setProperty('--opacity', '0')
      : document.documentElement.style.setProperty('--opacity', '1');

    document.addEventListener('scroll', onScroll);

    return () => {
      document.documentElement.style.setProperty('--opacity', '0');
      document.removeEventListener('scroll', onScroll);
    };
  }, [scrollState, setScrollState]);

  return (
    <nav
      className={styles.NavigationBar}
      style={scrollState ? undefined : { position: 'fixed' }}>
      <Logo />
      <Items />
      <Menu />
    </nav>
  );
};

export default NavigationBar;

// const [isToggled, setIsToggled] = useState<boolean>(false);
// const wrapperRef = useRef<HTMLInputElement>(null);

// const handleEscapeKey = useCallback((event: KeyboardEvent) => {
//   if (event.key === 'Escape') {
//     closeMenu();
//   }
// }, []);

// const handleClickOutside = useCallback((event: MouseEvent) => {
//   if (
//     wrapperRef.current &&
//     !(wrapperRef.current! as any).contains(event.target)
//   ) {
//     closeMenu?.();
//   }
// }, []);

// useEffect(() => {
//   document.addEventListener('click', handleClickOutside);
//   document.addEventListener('keyup', handleEscapeKey);

//   return () => {
//     document.removeEventListener('click', handleClickOutside);
//     document.removeEventListener('keyup', handleEscapeKey);
//   };
// }, [handleClickOutside, handleEscapeKey]);

// const showMenu = () => {
//   setIsToggled(true);
// };

// const closeMenu = () => {
//   setIsToggled(false);
// };

// return (
//   <div className={styles.Menu} ref={wrapperRef}>
//     <div
//       className={
//         isToggled ? styles.Menu__buttonClose : styles.Menu__buttonOpen
//       }
//       onClick={isToggled ? closeMenu : showMenu}
//     />
//     <Sidebar isOpened={isToggled} />
//   </div>
// );
// };

// export default Menu;
