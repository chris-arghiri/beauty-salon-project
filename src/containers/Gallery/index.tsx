import React, { FunctionComponent } from 'react';
import styles from './Gallery.module.scss';

import SectionName from '../../utilities/SectionName';
import InfoCard from '../../components/InfoCard';
import SliderCard from '../../components/SliderCard';

interface IGalleryProps {}

const Gallery: FunctionComponent<IGalleryProps> = () => {
  return (
    <div className={styles.Gallery} id='gallery'>
      <div className={styles.Gallery__above}>
        <SectionName color='#fff' name='Gallery' top='0' left='5vw' />
        <InfoCard />
        <div className={styles.Gallery__cards}>
          <SliderCard />
          <SliderCard />
          <SliderCard />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
