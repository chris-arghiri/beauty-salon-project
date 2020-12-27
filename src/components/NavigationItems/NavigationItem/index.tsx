import React, { FunctionComponent } from 'react';
import styles from './NavigationItem.module.scss';

interface IProps {
  link: string;
  color: string;
}

const NavigationItem: FunctionComponent<IProps> = ({
  children,
  link,
  color
}) => {
  return (
    <div className={styles.NavigationItem}>
      <a
        href={link}
        className={styles.NavigationItem__link}
        style={{ border: `0.1rem solid ${color}` }}>
        &nbsp;
      </a>
      <p className={styles.NavigationItem__pg} style={{ color: `${color}` }}>
        {children}
      </p>
    </div>
  );
};

export default NavigationItem;
