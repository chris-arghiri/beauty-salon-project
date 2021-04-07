import React, { FunctionComponent, useState, useEffect } from 'react';
import styles from './GallerySection.module.scss';

import SectionName from '../../../utilities/SectionName';
import InfoCard from '../../../components/InfoCard';
import SliderCard from '../../../components/SliderCard';

import image1 from '../../../assets/images/blonde-hair.jpeg';
import image2 from '../../../assets/images/blonde-hair.jpg';
import image3 from '../../../assets/images/tiny_hair_studio.jpg';
import image4 from '../../../assets/images/makeup.jpg';
import image5 from '../../../assets/images/red-hair.jpeg';
import image6 from '../../../assets/images/tiny_header_bg.jpg';

interface IGallerySectionProps {}

const GallerySection: FunctionComponent<IGallerySectionProps> = () => {
  return (
    <div className={styles.GallerySection} id='gallery'>
      <div className={styles.GallerySection__above}>
        <SectionName color='#fff' name='Gallery' top='0' left='5vw' />
        <InfoCard />
        <div className={styles.GallerySection__cards}>
          <SliderCard
            aboveImageURL={image1}
            behindImageURL={image2}
            id={'1'}
            description={'description'}
            color={'white'}
          />
          <SliderCard
            aboveImageURL={image3}
            behindImageURL={image4}
            id={'2'}
            description={'description'}
            color={'black'}
          />
          <SliderCard
            aboveImageURL={image5}
            behindImageURL={image6}
            id={'3'}
            description={'description'}
            color={'yellow'}
          />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
