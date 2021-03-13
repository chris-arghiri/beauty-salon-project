import React, { FunctionComponent } from 'react';
import styles from './Gallery.module.scss';

import SectionName from '../../utilities/SectionName';
import InfoCard from '../../components/InfoCard';

interface IGalleryProps {}

const Gallery: FunctionComponent<IGalleryProps> = () => {
  return (
    <div className={styles.Gallery} id='gallery'>
      <SectionName color='#fff' name='Gallery' />
      <InfoCard />
    </div>
  );
};

export default Gallery;
