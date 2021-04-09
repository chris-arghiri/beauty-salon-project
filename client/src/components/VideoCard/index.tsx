import React, { FunctionComponent } from 'react';
import styles from './VideoCard.module.scss';

interface IVideoCardProps {
  url: string | undefined;
  autoplay: boolean;
}

const VideoCard: FunctionComponent<IVideoCardProps> = ({ url, autoplay }) => (
  <div className={styles.VideoCard}>
    <div className={styles.VideoCard__wrapper}>
      <video
        src={url}
        autoPlay={autoplay}
        muted
        onMouseOver={(event) => (event.target as HTMLMediaElement).play()}
        onMouseOut={(event) => (event.target as HTMLMediaElement).pause()}
      />
    </div>
  </div>
);

export default VideoCard;
