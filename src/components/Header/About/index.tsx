import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.About}>
      <h2>[Name LastName] Beauty Stylist</h2>
      <h4> Salon & Colorista </h4>
      <p>
        Providing day spa, massage, facial, facial spa, hydrafacial, nail, gel
        nail, gel nail design, eyelash extensions and more.
      </p>
      <a href='/' style={{ color: '#ca8fc7' }}>
        Black Friday offers, available just now!
      </a>
    </div>
  );
};

export default About;
