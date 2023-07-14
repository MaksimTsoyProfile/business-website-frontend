import React, { useRef } from 'react';
import Wrapper from '../../components/Wrapper';
import styles from './BrandsBlock.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import useAnimateFade from '../../hooks/useAnimateFade';
import cn from 'classnames';

const BrandsBlock = () => {
  const brandsContainerRef = useRef();

  const slides = [
    {
      id: 1,
      url: '/logo.png',
    },
    {
      id: 2,
      url: '/logo2.png',
    },
    {
      id: 3,
      url: '/logo.png',
    },
    {
      id: 4,
      url: '/logo2.png',
    },
    {
      id: 5,
      url: '/logo.png',
    },
    {
      id: 6,
      url: '/logo2.png',
    },
    {
      id: 7,
      url: '/logo.png',
    },
  ];

  const brandsContainerClasses = cn({
    [styles.brandsContainer]: true,
    animate__animated: true,
  });

  useAnimateFade(brandsContainerRef);

  return (
    <div className={styles.brands}>
      <Wrapper>
        <div className={brandsContainerClasses} ref={brandsContainerRef}>
          <Swiper
            modules={[Autoplay]}
            speed={1000}
            autoplay={{
              delay: 5000,
              reverseDirection: true,
              disableOnInteraction: false,
            }}
            spaceBetween={80}
            slidesPerView={6}
            breakpoints={{
              320: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            onSlideChange={() => {}}
            onSwiper={(swiper) => {}}
          >
            {
              slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className={styles.brandItem}>
                    <img src={slide.url} alt="slide"/>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </Wrapper>
    </div>
  );
};

export default BrandsBlock;
