import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';
import logo from '../../../assets/svg/logo.svg';

interface ILogoProps {}

const Logo: FunctionComponent<ILogoProps> = () => {
  return (
    <div className={styles.Logo}>
      <Link to='/'>
        <img src={logo} alt='logo' className={styles.Logo__img} />
      </Link>
      <div className={styles.Logo__name}>Studio</div>
    </div>
  );
};

export default Logo;
