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

  const [firstUrl, setFirstUrl] = useState<string | undefined>('');
  const [secondUrl, setSecondUrl] = useState<string | undefined>('');
  const [thirdUrl, setThirdUrl] = useState<string | undefined>('');
  const [autoplayArea, setAutoplayArea] = useState<boolean>(false);

  const fetchAPI = useCallback(async () => {
    const headers = {
      headers: {
        Authorization:
          '563492ad6f91700001000001c7556e8ee0f24cb6a0d7a0291a166a7b',
        Accept: 'application/json'
      }
    };
    const requestOne = axios.get(
      'https://api.pexels.com/videos/videos/3996898',
      headers
    );
    const requestTwo = axios.get(
      'https://api.pexels.com/videos/videos/3996890',
      headers
    );
    const requestThree = axios.get(
      'https://api.pexels.com/videos/videos/3996895',
      headers
    );
    await axios
      .all([requestOne, requestTwo, requestThree])
      .then(
        axios.spread((...responses) => {
          const firstLink = responses[0].data.video_files[0].link;
          setFirstUrl(firstLink);
          const secondLink = responses[1].data.video_files[0].link;
          setSecondUrl(secondLink);
          const thirdLink = responses[2].data.video_files[0].link;
          setThirdUrl(thirdLink);
        })
      )
      .catch((errors) => {
        console.log(errors);
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
      <SectionName
        name='Just.'
        color='var(--color-white)'
        top='4vh'
        left='14vw'
        right=''
        bottom=''
      />
      <SectionName
        name='Do.'
        color='var(--color-white)'
        top='4vh'
        left='47vw'
        right=''
        bottom=''
      />
      <SectionName
        name='It.'
        color='var(--color-white)'
        top='4vh'
        right='15vw'
        bottom=''
        left=''
      />
      <div ref={videoCardsRef} className={styles.Videos__cards}>
        <VideoCard url={firstUrl} autoplay={autoplayArea} />
        <VideoCard url={secondUrl} autoplay={false} />
        <VideoCard url={thirdUrl} autoplay={false} />
      </div>
    </div>
  );
};

export default Videos;
