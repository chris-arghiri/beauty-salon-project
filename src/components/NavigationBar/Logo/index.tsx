import React, { FunctionComponent } from 'react';
import styles from './Logo.module.scss';
import logo from '../../../assets/svg/logo.svg';

interface ILogoProps {}

const Logo: FunctionComponent<ILogoProps> = () => {
  return (
    <>
      <img src={logo} alt='logo' className={styles.Logo} />
      <a href='/' className={styles.Logo__name}>
        Studio
      </a>
    </>
  );
};

export default Logo;
