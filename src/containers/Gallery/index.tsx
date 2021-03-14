import React, { FunctionComponent } from 'react';
import styles from './Gallery.module.scss';

import SectionName from '../../utilities/SectionName';
import InfoCard from '../../components/InfoCard';
import SlideCard from '../../components/SlideCard';

interface IGalleryProps {}

const Gallery: FunctionComponent<IGalleryProps> = () => {
  return (
    <div className={styles.Gallery} id='gallery'>
      <SectionName color='#000' name='Gallery' />
      <InfoCard />
      <div className={styles.Gallery__cards}>
        <SlideCard />
        <SlideCard />
        <SlideCard />
      </div>
    </div>
  );
};

export default Gallery;
