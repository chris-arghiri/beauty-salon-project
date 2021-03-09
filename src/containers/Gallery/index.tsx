import React, { FunctionComponent } from 'react';
import styles from './Gallery.module.scss';

interface IGalleryProps {}

const Gallery: FunctionComponent<IGalleryProps> = () => {
  return <div className={styles.Gallery} id='gallery'></div>;
};

export default Gallery;
