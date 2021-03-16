import React, { FunctionComponent } from 'react';
import style from './SliderContent.module.scss';

interface ISliderContentProps {
  translate: number;
  transition: number;
}

const SliderContent: FunctionComponent<ISliderContentProps> = ({
  translate,
  transition
}) => {
  return (
    <div
      style={{
        transform: `translateX(-${translate}px)`,
        transition: `transform ease-out ${transition}s`,
        height: '100%',
        width: `100%`,
        display: 'flex'
      }}
    />
  );
};

export default SliderContent;
