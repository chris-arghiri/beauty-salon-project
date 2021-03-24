import React from 'react';
import styles from './About.module.scss';

import GradientBorderButton from '../../utilities/GradientBorderButton';

const About = () => {
  return (
    <div className={styles.About}>
      <div className={styles.About__topText}>
        <span>Perfection at ease</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut unde
          doloremque quisquam facilis ipsa.
        </p>
      </div>
      <div className={styles.About__bottomText}>
        <a href='/'>
          <span>See available dates!</span>
        </a>
      </div>
      <GradientBorderButton url='#' text='Hover me' marginTop='1rem' />
    </div>
  );
};

export default About;
