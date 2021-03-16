import React, { FunctionComponent } from 'react';

import styles from './SliderCard.module.scss';
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage
} from 'react-compare-slider';

import image1 from '../../assets/images/blonde-hair.jpg';
import image2 from '../../assets/images/red-hair.jpeg';

interface ISliderCardProps {}

const SliderCard: FunctionComponent<ISliderCardProps> = () => {
  return (
    <div className={styles.SlideCard}>
      <div className={styles.SlideCard__container}>
        <ReactCompareSlider
          handle={
            <ReactCompareSliderHandle
              buttonStyle={{
                width: '0.35rem',
                height: '0.35rem'
              }}
            />
          }
          itemOne={
            <ReactCompareSliderImage
              src={image1}
              srcSet={image1}
              alt='image1'
              style={{ borderRadius: '1rem', opacity: 0.9 }}
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={image2}
              srcSet={image2}
              alt='image2'
              style={{ borderRadius: '1rem', opacity: 0.7 }}
            />
          }
          onlyHandleDraggable
          boundsPadding={25}
          position={65}
        />
        <div className={styles.SlideCard__description}>
          <p>description</p>
          <a href='/'>color</a>
          {/* <div style={{ width: '1rem', height: '1rem', color: '#fff' }}></div> */}
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
