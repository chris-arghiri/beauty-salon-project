import React, { FunctionComponent } from 'react';

import styles from './SlideCard.module.scss';
import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from 'react-compare-slider';

import image1 from '../../assets/images/blonde-hair.jpg';
import image2 from '../../assets/images/red-hair.jpeg';

interface ISlideCardProps {}

const SlideCard: FunctionComponent<ISlideCardProps> = () => {
  return (
    <div className={styles.SlideCard}>
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={image1}
            srcSet={image1}
            alt='image1'
            style={{ borderRadius: '1rem' }}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={image2}
            srcSet={image2}
            alt='image2'
            style={{ borderRadius: '1rem' }}
          />
        }
        position={65}
      />
    </div>
  );
};

export default SlideCard;
