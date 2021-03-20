import React, { FunctionComponent } from 'react';
import styles from './VideoCard.module.scss';

interface IVideoCardProps {
  url: string;
}

const VideoCard: FunctionComponent<IVideoCardProps> = ({ url }) => (
  <div className={styles.VideoCard}>
    <video
      src={url}
      onMouseOver={(event) => (event.target as HTMLMediaElement).play()}
      onMouseOut={(event) => (event.target as HTMLMediaElement).pause()}
    />
  </div>
);

export default VideoCard;
