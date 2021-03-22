import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState
} from 'react';
import styles from './Videos.module.scss';

import axios from 'axios';

import SectionName from '../../../utilities/SectionName';
import VideoCard from '../../../components/VideoCard';

interface IVideosProps {}

const Videos: FunctionComponent<IVideosProps> = () => {
  const [url, setURL] = useState<string | undefined>('');

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

  return (
    <div className={styles.Videos} id='videos'>
      <SectionName name='Videos' color='#fff' top='3vh' left='7vw' />
      <div className={styles.Videos__cards}>
        <VideoCard url={url} autoplay={true} />
        <VideoCard url={url} autoplay={false} />
        <VideoCard url={url} autoplay={false} />
      </div>
    </div>
  );
};

export default Videos;