import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.About}>
      <div className={styles.About__topText}>
        <span>Here will be some</span>
        <span>text maybe </span>
      </div>
      <div className={styles.About__bottomText}>
        <a href='/'>Here will be a link! Don't judge!</a>
      </div>
    </div>
  );
};

export default About;
