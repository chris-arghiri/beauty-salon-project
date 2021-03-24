import React, { FunctionComponent, useRef } from 'react';

import styles from './SliderCard.module.scss';
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage
} from 'react-compare-slider';

interface ISliderCardProps {
  aboveImageURL: string;
  behindImageURL: string;
  id: number;
}

const SliderCard: FunctionComponent<ISliderCardProps> = ({
  aboveImageURL,
  behindImageURL,
  id
}) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const setOpacity = (name: string, value: string) => {
    document.documentElement.style.setProperty(name, value);
  };

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
              src={aboveImageURL}
              srcSet={aboveImageURL}
              alt='image1'
              style={{ borderRadius: '1rem', opacity: 0.9 }}
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={behindImageURL}
              srcSet={behindImageURL}
              alt='image2'
              style={{ borderRadius: '1rem', opacity: 0.7 }}
            />
          }
          onlyHandleDraggable
          boundsPadding={25}
          position={65}
          id={`item-${id}`}
          onPositionChange={(position) => {
            if (position < 30) {
              setOpacity('--before-opacity', '0.6');
              setOpacity('--after-opacity', '1');
              return;
            }
            if (position < 40) {
              setOpacity('--before-opacity', '0.7');
              setOpacity('--after-opacity', '0.9');
              return;
            }
            if (position < 50) {
              setOpacity('--before-opacity', '0.8');
              setOpacity('--after-opacity', '0.8');
              return;
            }
            if (position < 60) {
              setOpacity('--before-opacity', '0.9');
              setOpacity('--after-opacity', '0.7');
              return;
            }
            if (position < 70) {
              setOpacity('--before-opacity', '1');
              setOpacity('--after-opacity', '0.6');
              return;
            }
          }}
        />
        <div className={styles.SlideCard__description}>
          <p ref={paragraphRef} className={styles.SlideCard__description__1}>
            description
          </p>
          <a ref={linkRef} href='/'>
            color
          </a>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
