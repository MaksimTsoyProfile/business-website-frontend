import React, { useRef } from 'react';
import { useTranslation } from 'next-i18next';
import styles from './SwiperBlock.module.scss';
import Wrapper from '../../components/Wrapper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Text from '../../components/Text';
import { Navigation, Scrollbar } from 'swiper';
import cn from 'classnames';
import useAnimateFade from '../../hooks/useAnimateFade';

const SwiperBlock = ({
  testimonials,
}) => {
  const { t } = useTranslation();
  const swiperContainerRef = useRef();

  const slides = testimonials.map((testimonial) => ({
    id: testimonial.id,
    text: testimonial.attributes.text,
    info: [testimonial.attributes.fullname, testimonial.attributes.position].join(' - ')
  }));

  const swiperContainerClasses = cn({
    [styles.swiperContainer]: true,
    animate__animated: true,
  });

  useAnimateFade(swiperContainerRef);

  return (
    <div className={styles.swiper}>
      <Wrapper>
        <div className={swiperContainerClasses} ref={swiperContainerRef}>
          <div className={styles.slideTitle}>{t('Our Testimonial')}</div>
          <div className={styles.slideSubtitle}>{t('We care about your opinion')}</div>
          <div className={styles.divider} />
          <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={50}
            speed={1000}
            navigation
            slidesPerView={1}
            onSlideChange={() => {}}
            onSwiper={(swiper) => {}}
          >
            {
              slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className={styles.slideContainer}>
                    <div className={styles.slideText}>{slide.text}</div>
                    <div className={styles.slideInfo}>{slide.info}</div>
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

export default SwiperBlock;
