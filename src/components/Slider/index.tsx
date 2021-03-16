import React, { FunctionComponent, useState } from 'react';
import styles from './Slider.module.scss';

import sliderImage1 from '../../assets/images/tiny_makeup.jpg';
import sliderImage2 from '../../assets/images/tiny_makeup.jpg';
import sliderImage3 from '../../assets/images/tiny_makeup.jpg';

import SliderContent from './SliderContent';

interface ISliderProps {}

const Slider: FunctionComponent<ISliderProps> = () => {
  const [state, setState] = useState({
    translate: 0,
    transition: 0.45
  });

  const { translate, transition } = state;

  return (
    <div className={styles.Slider}>
      <SliderContent
        translate={translate}
        transition={transition}></SliderContent>
    </div>
  );
};

export default Slider;
