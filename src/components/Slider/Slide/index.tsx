import React, { FunctionComponent } from 'react';
import style from './Slide.module.scss';

interface ISlideProps {
  content: string;
}

const SliderContent: FunctionComponent<ISlideProps> = ({ content }) => {
  return (
    <div
      className={style.Slide}
      style={{
        backgroundImage: `url(${content})`
      }}
    />
  );
};

export default SliderContent;
