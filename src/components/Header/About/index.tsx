import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <>
      <div className={styles.About}>
        <h1>Here will be some</h1>
        <h2> Text maybe</h2>
        <a href='/'>
          Black Friday offers, available just now! But still need a longer link!
        </a>
      </div>
    </>
  );
};

export default About;

{
  /* <div className={styles.Modal__animatedTitle}>
        <div className={styles.Modal__topText}>
          <>
            <span>How about here</span>
            <span>is gonna be </span>
          </>
        </div>
        <div className={styles.Modal__bottomText}>
          <span>some text</span>
        </div>
      </div>
    </div> */
}
