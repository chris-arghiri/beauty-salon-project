import React, { FunctionComponent } from 'react';
import styles from './Header.module.scss';

import photo1 from '../../assets/images/blonde-hair.jpg';
import photo2 from '../../assets/images/red-hair.jpeg';

import NavigationBar from '../../components/NavigationBar';
import NavigationItems from '../../components/NavigationItems';
import About from '../../components/About';

interface IHeaderProps {}

const Header: FunctionComponent<IHeaderProps> = () => {
  return (
    <div className={styles.Header}>
      <NavigationBar />
      <NavigationItems />
      <About />
      {/* <img src={cover} alt='cover' className={styles.Header__cover} /> */}
      <img
        src={photo1}
        alt='1'
        style={{
          width: '12rem',
          marginRight: '1.5rem',
          top: '23vh',
          right: '7vw',
          position: 'absolute'
        }}
      />
      <img
        src={photo2}
        alt='2'
        style={{
          width: '12rem',
          height: '15rem',
          marginTop: '1rem',
          marginRight: '3.5rem',
          top: '53vh',
          right: '7vw',
          position: 'absolute'
        }}
      />
    </div>
  );
};

export default Header;
