import { FunctionComponent } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay
} from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import styles from './Swiper.module.scss';

import testImage from '../../assets/images/tiny_makeup.jpg';
import testImage2 from '../../assets/images/hair_studio.jpg';
interface ISliderProps {}

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay, ProgressEvent]);

const Slider: FunctionComponent<ISliderProps> = () => {
  return (
    <div className={styles.Swiper}>
      <Swiper
        id='main'
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        effect='fade'
        autoplay={{ delay: 4000, disableOnInteraction: false }}>
        <SwiperSlide key={`slide-1`}>
          <img
            src={testImage}
            alt='1'
            style={{ listStyle: 'none', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide key={`slide-2`}>
          <img
            src={testImage2}
            alt='2'
            style={{ listStyle: 'none', height: 'auto' }}
          />
        </SwiperSlide>
        <SwiperSlide key={`slide-3`}>
          <img
            src={testImage}
            alt='3'
            style={{ listStyle: 'none', height: 'auto' }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
