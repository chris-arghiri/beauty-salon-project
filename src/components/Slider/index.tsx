import React, { FunctionComponent, useState } from 'react';
import styles from './Slider.module.scss';

import Slide from './Slide';
import SliderContent from './SliderContent';

interface ISliderProps {
  slides: string[];
}

const Slider: FunctionComponent<ISliderProps> = ({ slides }) => {
  const [state, setState] = useState({
    translate: 0,
    transition: 0.45
  });

  const { translate, transition } = state;

  return (
    <div className={styles.Slider}>
      <SliderContent translate={translate} transition={transition}>
        {slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>
    </div>
  );
};

export default Slider;
