import React, { FunctionComponent, useRef } from 'react';
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

import productImg from '../../assets/images/product1.png';

import styles from './Shop.module.scss';
import GradientBorderButton from '../../utilities/GradientBorderButton';

SwiperCore.use([
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
  ProgressEvent
]);

interface IShopProps {}

const Shop: FunctionComponent<IShopProps> = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);

  return (
    <div className={styles.Shop} id='shop'>
      <div className={styles.Shop__info}>
        <h1>
          <span id='headerInfo'> Some text</span>
        </h1>
        <h4>And another text, w/ price</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Omnis ex necessitatibus velit aliquid voluptas est odit, ea <br />
          perferendis at delectus esse illo! Minus rerum, animi a fugiat <br />
          mollitia iste. Suscipit.
        </p>
        <GradientBorderButton url='#' text='buy?' />
      </div>
      <div className={styles.Shop__slider}>
        <Swiper
          id='main'
          navigation
          centeredSlides
          slidesPerView={2}
          onSlideChange={(slide) => {
            if (slide.activeIndex === 1) {
              document.getElementById('headerInfo')!.innerText = 'Another text';
            } else {
              document.getElementById('headerInfo')!.innerText = 'Some text';
            }
          }}
          //   headerRef.current?.textContent ? 'Another Text' : 'ASD'
          // }
          pagination={{ clickable: true }}
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

export default Shop;
