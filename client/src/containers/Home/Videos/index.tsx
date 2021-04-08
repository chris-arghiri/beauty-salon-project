import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
  useRef
} from 'react';
import styles from './Videos.module.scss';

import axios from 'axios';

import SectionName from '../../../utilities/SectionName';
import VideoCard from '../../../components/VideoCard';

interface IVideosProps {}

const Videos: FunctionComponent<IVideosProps> = () => {
  const videoCardsRef = useRef<HTMLDivElement>(null);

  const [url, setURL] = useState<string | undefined>('');
  const [autoplayArea, setAutoplayArea] = useState<boolean>(false);

  const fetchAPI = useCallback(async () => {
    await axios
      .get('https://api.pexels.com/videos/videos/3996898', {
        headers: {
          Authorization:
            '563492ad6f91700001000001c7556e8ee0f24cb6a0d7a0291a166a7b',
          Accept: 'application/json'
        }
      })
      .then((result) => {
        const data = result.data;
        const videoFiles = data.video_files;
        const link = videoFiles[0].link;
        setURL(link);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  useEffect(() => {
    window.addEventListener('scroll', startAutoplay);
    return () => {
      window.removeEventListener('scroll', startAutoplay);
    };
  });

  const startAutoplay = () => {
    if (window.pageYOffset >= 600) {
      setAutoplayArea(true);
    } else {
      setAutoplayArea(false);
    }
  };

  return (
    <div className={styles.Videos} id='videos'>
      <SectionName name='Videos' color='#fff' top='3vh' left='7vw' />
      <div ref={videoCardsRef} className={styles.Videos__cards}>
        <VideoCard url={url} autoplay={autoplayArea} />
        <VideoCard url={url} autoplay={false} />
        <VideoCard url={url} autoplay={false} />
      </div>
    </div>
  );
};

export default Videos;
