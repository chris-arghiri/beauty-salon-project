import React, { FunctionComponent } from 'react';
import styles from './Logo.module.scss';
import logo from '../../../assets/svg/logo.svg';

interface ILogoProps {}

const Logo: FunctionComponent<ILogoProps> = () => {
  return (
    <div className={styles.Logo}>
      <a href='/'>
        <img src={logo} alt='logo' className={styles.Logo__img} />
      </a>
      <div className={styles.Logo__name}>Studio</div>
    </div>
  );
};

export default Logo;
