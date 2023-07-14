import React, { useRef } from 'react';
import styles from './News.module.scss';
import { useTranslation } from 'next-i18next';
import Title from '../../components/Title';
import Wrapper from '../../components/Wrapper';
import NewsCard from '../../components/NewsCard';
import useAnimateFade from '../../hooks/useAnimateFade';
import cn from 'classnames';
import { getFullPath } from '../../utils';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const News = ({
  news,
}) => {
  const { t, i18n } = useTranslation();
  const titleRef = useRef();
  const cardsRef = useRef();

  const cards = news.map((newsItem) => ({
    id: newsItem.id,
    title: newsItem.attributes.title,
    text: newsItem.attributes.description,
    date: newsItem.attributes.postDate,
    imageUrl: getFullPath(newsItem.attributes.image.data.attributes.url),
  }));

  const titleClasses = cn({
    [styles.titleContainer]: true,
    animate__animated: true,
  });

  const cardsContainerClasses = cn({
    [styles.cards]: true,
    animate__animated: true,
  });

  useAnimateFade(titleRef);
  useAnimateFade(cardsRef);

  return (
    <div className={styles.news} id="news">
      <Wrapper>
        <div className={titleClasses} ref={titleRef}>
          <Title title={t('Latest news')} subTitle={t('View the Latest News in Consultancy')} />
        </div>
        <div className={cardsContainerClasses} ref={cardsRef}>
          <Swiper
            modules={[Autoplay]}
            speed={1000}
            autoplay={{
              delay: 5000,
              reverseDirection: true,
              disableOnInteraction: false,
            }}
            spaceBetween={80}
            slidesPerView={3}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            onSlideChange={() => {}}
            onSwiper={(swiper) => {}}
          >
            {
              cards.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className={styles.card}>
                    <NewsCard
                      newsId={card.id}
                      url={card.imageUrl}
                      date={card.date}
                      title={card.title}
                      text={card.text}
                    />
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

export default News;
