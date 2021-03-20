import React, { FunctionComponent } from 'react';
import styles from './Videos.module.scss';

import SectionName from '../../utilities/SectionName';
import VideoCard from '../../components/VideoCard';

import productionVideo from '../../assets/videos/production.mp4';
import image1 from '../../assets/images/blonde-hair.jpeg';
import image2 from '../../assets/images/blonde-hair.jpg';

interface IVideosProps {}

const Videos: FunctionComponent<IVideosProps> = () => {
  return (
    <div className={styles.Videos} id='videos'>
      <SectionName name='Videos' color='#fff' top='3vh' left='7vw' />
      <div className={styles.Videos__cards}>
        <VideoCard url={productionVideo} />
        <VideoCard url={image1} />
        <VideoCard url={image2} />
      </div>
    </div>
  );
};

export default Videos;
