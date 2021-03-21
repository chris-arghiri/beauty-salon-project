import React, { FunctionComponent } from 'react';
import styles from './VideoCard.module.scss';

interface IVideoCardProps {
  url: string | undefined;
  autoplay: boolean;
}

const VideoCard: FunctionComponent<IVideoCardProps> = ({ url, autoplay }) => (
  <div className={styles.VideoCard}>
    <video
      src={url}
      autoPlay={autoplay}
      muted
      onMouseOver={(event) => (event.target as HTMLMediaElement).play()}
      onMouseOut={(event) => (event.target as HTMLMediaElement).pause()}
    />
  </div>
);

export default VideoCard;
