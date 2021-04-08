import { FunctionComponent, useState, useEffect } from 'react';
import styles from './ScrollTopArrow.module.scss';

interface IScrollTopArrowProps {}

const ScrollTopArrow: FunctionComponent<IScrollTopArrowProps> = () => {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div
      className={styles.ScrollTopArrow}
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? 'flex' : 'none' }}>
      <span>↑</span>
    </div>
  );
};

export default ScrollTopArrow;
