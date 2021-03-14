import React, { FunctionComponent } from 'react';

import styles from './SlideCard.module.scss';

import image1 from '../../assets/images/blonde-hair.jpg';
import image2 from '../../assets/images/red-hair.jpeg';

interface ISlideCardProps {}

const SlideCard: FunctionComponent<ISlideCardProps> = () => {
  return (
    <div className={styles.SlideCard}>
      <div className={styles.SlideCard__before}>
        <img src={image1} alt='image1' />
      </div>
      <div className={styles.SlideCard__after}>
        <img src={image2} alt='image2' />
      </div>
      <div className={styles.SlideCard__slider}></div>
    </div>
  );
};

export default SlideCard;
