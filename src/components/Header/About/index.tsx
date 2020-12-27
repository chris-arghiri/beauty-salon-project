import React from 'react';
import styles from './About.module.scss';

import AutoWrittingText from '../../../utilities/AutoWrittingText';
import SNS from './SNS';

const About = () => {
  return (
    <div className={styles.About}>
      <AutoWrittingText
        title={'[Name LastName]'}
        message={['Beauty Stylist', 'Colorista', 'Barber']}
      />
      <h4> Salon & Colorista </h4>
      <p>
        <b>
          Providing day spa, massage, facial, facial spa, hydrafacial, nail, gel
          nail, gel nail design, eyelash extensions and more.
        </b>
      </p>
      <a href='/'>
        <b>
          Black Friday offers, available just now! But still need a longer link!
        </b>
      </a>
      <SNS />
    </div>
  );
};

export default About;
