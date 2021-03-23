import { FunctionComponent, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay
} from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import productImg from '../../../assets/images/product1.png';

import styles from './ShopSection.module.scss';
import GradientBorderButton from '../../../utilities/GradientBorderButton';

SwiperCore.use([
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
  ProgressEvent
]);

interface IShopSectionProps {}

const ShopSection: FunctionComponent<IShopSectionProps> = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const priceRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const changeText = (element: React.RefObject<HTMLElement>, text: string) => {
    if (element.current?.innerText !== null) {
      return (element.current!.innerText = text);
    }
  };

  const handleInfo = (activeIndex: number) => {
    if (activeIndex === 0) {
      changeText(headerRef, 'some text');
      changeText(priceRef, 'maybe another value than the initial one??');
      changeText(
        descriptionRef,
        'and another lorem ofc, how i hate them sometimes, why doesn/t emmet work when u need it, or hmmm?'
      );
      return;
    }
    if (activeIndex === 1) {
      changeText(headerRef, 'hmm text');
      changeText(priceRef, 'ok this one for sure $$$');
      changeText(
        descriptionRef,
        'try lorem!!! just press the lorem pleassseee'
      );
      return;
    }
    if (activeIndex === 2) {
      changeText(headerRef, 'so it does work after all');
      changeText(priceRef, 'should i still try?? Someone hire me pls!!');
      changeText(
        descriptionRef,
        'SOMETIMES YOU REALISE SOMETHING, SOMETIMES NOT :))'
      );
      return;
    }
  };

  return (
    <div className={styles.ShopSection} id='shop'>
      <div className={styles.ShopSection__info}>
        <h1 ref={headerRef}>
          <span>Some text</span>
        </h1>
        <h4 ref={priceRef}>
          <span>And another text, w/ price</span>
        </h4>
        <p ref={descriptionRef}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Omnis ex necessitatibus velit aliquid voluptas est odit, ea <br />
          perferendis at delectus esse illo! Minus rerum, animi a fugiat <br />
          mollitia iste. Suscipit.
        </p>
        <GradientBorderButton url='#' text='buy?' />
      </div>
      <div className={styles.ShopSection__slider}>
        <Swiper
          id='main'
          navigation
          centeredSlides
          slidesPerView={2}
          effect='coverflow'
          onSlideChange={(slide) => handleInfo(slide.activeIndex)}>
          <SwiperSlide key={`slide-1`}>
            <img
              src={productImg}
              alt='1'
              style={{ listStyle: 'none', height: 'auto' }}
            />
          </SwiperSlide>
          <SwiperSlide key={`slide-2`}>
            <img
              src={productImg}
              alt='2'
              style={{ listStyle: 'none', height: 'auto' }}
            />
          </SwiperSlide>
          <SwiperSlide key={`slide-3`}>
            <img
              src={productImg}
              alt='3'
              style={{ listStyle: 'none', height: 'auto' }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ShopSection;
