import React from 'react';
import styles from './About.module.scss';

import GradientBorderButton from '../../utilities/GradientBorderButton';

const About = () => {
  return (
    <div className={styles.About}>
      <div className={styles.About__topText}>
        <span>Perfection at ease</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Ut
          unde doloremque quisquam facilis ipsa. <br />
        </p>
      </div>
      <div className={styles.About__bottomText}>
        <a href='/'>Here will be a link! Don't judge!</a>
      </div>
      <GradientBorderButton url='#' text='Hover me' />
    </div>
  );
};

export default About;
