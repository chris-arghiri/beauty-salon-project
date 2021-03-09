import React, {
  FunctionComponent,
  useEffect,
  useCallback,
  useRef
} from 'react';
import styles from './NavigationItem.module.scss';

interface IProps {
  id: string;
  color: string;
}

const NavigationItem: FunctionComponent<IProps> = ({ children, id, color }) => {
  const smoothScrollTo = () => {
    const element = document.getElementById(id);
    element
      ? element.scrollIntoView({ block: 'start', behavior: 'smooth' })
      : console.log("element doesn't exist", `id:${id}`);
    element?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  return (
    <div className={styles.NavigationItem}>
      <div
        onClick={smoothScrollTo}
        className={styles.NavigationItem__link}
        style={{ border: `0.13rem solid ${color}` }}
      />
      <p className={styles.NavigationItem__pg} style={{ color: `#fff` }}>
        {children}
      </p>
    </div>
  );
};

export default NavigationItem;
