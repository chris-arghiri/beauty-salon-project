import React from 'react';
import styles from './About.module.scss';
import logo from '../../../assets/images/tiny_logo.png';

import AutoWrittingText from '../../../utilities/AutoWrittingText';
import SNS from './SNS';

const About = () => {
  return (
    <>
      <div className={styles.About__logo}>
        <img src={logo} alt='Logo' />
      </div>
      <div className={styles.About}>
        <AutoWrittingText
          title={'[Name LastName]'}
          message={['Beauty Stylist', 'Colorista', 'Barber']}
        />
        <h4> Salon & Colorista </h4>
        <p>
          Providing day spa, massage, facial, facial spa, hydrafacial, nail, gel
          nail, gel nail design, eyelash extensions and more.
        </p>
        <a href='/'>
          Black Friday offers, available just now! But still need a longer link!
        </a>
        <SNS />
      </div>
    </>
  );
};

export default About;
