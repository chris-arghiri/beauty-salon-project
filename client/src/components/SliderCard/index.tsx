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
  id: string;
  description: string;
  color: string;
}

const SliderCard: FunctionComponent<ISliderCardProps> = ({
  aboveImageURL,
  behindImageURL,
  id,
  description,
  color
}) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const setOpacity = (element: React.RefObject<HTMLElement>, value: string) => {
    if (element.current) {
      element.current.style.opacity = value;
    }
  };

  const setItemOpacity = (position: number, itemId: string) => {
    if (itemId === id) {
      if (position < 30) {
        setOpacity(paragraphRef, '0.6');
        setOpacity(linkRef, '1');
      } else if (position < 40) {
        setOpacity(paragraphRef, '0.7');
        setOpacity(linkRef, '0.9');
      } else if (position < 50) {
        setOpacity(paragraphRef, '0.8');
        setOpacity(linkRef, '0.8');
      } else if (position < 60) {
        setOpacity(paragraphRef, '0.9');
        setOpacity(linkRef, '0.7');
      } else {
        setOpacity(paragraphRef, '1');
        setOpacity(linkRef, '0.6');
      }
    }
  };

  return (
    <div className={styles.SlideCard}>
      <ReactCompareSlider
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              width: '0',
              height: '0'
            }}
          />
        }
        itemOne={
          <ReactCompareSliderImage
            src={aboveImageURL}
            srcSet={aboveImageURL}
            alt='image1'
            style={{ borderRadius: '1rem', opacity: 0.9, width: '100%' }}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={behindImageURL}
            srcSet={behindImageURL}
            alt='image2'
            style={{ borderRadius: '1rem', opacity: 0.7, width: '100%' }}
          />
        }
        style={{ width: '14.5rem', height: '100%' }}
        onlyHandleDraggable
        boundsPadding={25}
        position={65}
        id={id}
        onPositionChange={(position) => {
          setItemOpacity(position, id);
        }}
      />
      <div className={styles.SlideCard__description}>
        <p style={{ opacity: '0.4' }} ref={paragraphRef}>
          {description}
        </p>
        <a ref={linkRef} href='/'>
          {color}
        </a>
      </div>
    </div>
  );
};

export default SliderCard;
