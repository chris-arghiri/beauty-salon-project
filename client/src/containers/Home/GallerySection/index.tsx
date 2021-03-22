import React, { FunctionComponent } from 'react';
import styles from './GallerySection.module.scss';

import SectionName from '../../../utilities/SectionName';
import InfoCard from '../../../components/InfoCard';
import SliderCard from '../../../components/SliderCard';

interface IGallerySectionProps {}

const GallerySection: FunctionComponent<IGallerySectionProps> = () => {
  return (
    <div className={styles.GallerySection} id='gallery'>
      <div className={styles.GallerySection__above}>
        <SectionName color='#fff' name='Gallery' top='0' left='5vw' />
        <InfoCard />
        <div className={styles.GallerySection__cards}>
          <SliderCard />
          <SliderCard />
          <SliderCard />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
