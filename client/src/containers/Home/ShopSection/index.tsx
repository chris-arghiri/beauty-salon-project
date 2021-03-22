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

  const handleInfo = (activeIndex: number) => {
    // let headerInfoText: string | undefined = document.getElementById(
    //   'headerInfo'
    // )?.innerText;
    // let priceInfoText: string | undefined = document.getElementById('priceInfo')
    //   ?.innerText;
    // let descriptionInfoText: string | undefined = document.getElementById(
    //   'descriptionInfo'
    // )?.innerText;
    // if (headerInfoText !== undefined) {
    //   if (activeIndex === 1) {
    //     headerInfoText = 'Another text';
    //   }
    // }

    // let asd = headerRef.current!.innerText;
    if (activeIndex === 1) {
    }
    // // let conditions = [headerInfoText, priceInfoText, descriptionInfoText];

    // if (activeIndex === 0 && !conditions.includes(undefined)) {
    //   headerInfoText = 'Some Text';
    //   console.log(headerInfoText);
    // } else if (activeIndex === 1 && !conditions.includes(undefined)) {
    //   headerInfoText = 'Another Text';
    //   console.log(headerInfoText);
    // } else if (activeIndex === 2 && !conditions.includes(undefined)) {
    //   headerInfoText = 'And another one';
    //   console.log(headerInfoText);
    // } else {
    //   console.log('not supported');
    // }
  };

  return (
    <div className={styles.ShopSection} id='shop'>
      <div className={styles.ShopSection__info}>
        <h1 ref={headerRef}>
          <span id='headerInfo'>Some text</span>
        </h1>
        <h4 id='priceInfo'>And another text, w/ price</h4>
        <p id='descriptionInfo'>
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
          onSlideChange={(slide) => {
            console.log(slide.activeIndex);
            handleInfo(slide.activeIndex);
          }}
          //   headerRef.current?.textContent ? 'Another Text' : 'ASD'
          // }
          // pagination={{ clickable: true }}
          effect='coverflow'>
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
