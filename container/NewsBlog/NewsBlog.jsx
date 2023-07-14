import React from 'react';
import styles from './NewsBlog.module.scss';
import Wrapper from '../../components/Wrapper';
import NewsMiniCard from '../../components/NewsMiniCard';
import { getDataByLocale, getFullPath } from '../../utils';
import { useTranslation } from 'next-i18next';
import Text from '../../components/Text';
import { MdAdd, MdCalendarToday } from 'react-icons/md';
import ReactMarkdown from 'react-markdown';

const NewsBlog = ({
  news,
  currentNews,
}) => {
  const { t, i18n } = useTranslation();
  const sideNewsCards = news.map((newsItem) => ({
    id: newsItem.id,
    title: newsItem.attributes.title,
    date: newsItem.attributes.postDate,
    imageUrl: getFullPath(newsItem.attributes.image.data.attributes.url),
  }));

  const newsDataByLocale = getDataByLocale(currentNews, i18n.language);

  const post = {
    title: newsDataByLocale?.attributes?.title,
    imageUrl: getFullPath(currentNews?.attributes.image.data.attributes.url),
    date: newsDataByLocale?.attributes.postDate,
    text: newsDataByLocale?.attributes.text,
  };

  return (
    <div className={styles.newsBlog}>
      <Wrapper>
        <div className={styles.newsBlogContainer}>
          <div className={styles.sideNews}>
          <div className={styles.sideTitle}>
            <Text weight="bold">{t('Recent posts')}</Text>
          </div>
          <div className={styles.divider} />
          {
            sideNewsCards.map((card) => (
              <div className={styles.card} key={card.id}>
                <NewsMiniCard
                  title={card.title}
                  date={card.date}
                  imageUrl={card.imageUrl}
                />
              </div>
            ))
          }
          </div>
          <div className={styles.mainNews}>
            <div className={styles.imageContainer}>
              <img src={post.imageUrl} alt='img' />
            </div>
            <div className={styles.info}>
              <MdCalendarToday size={14} />
              <span className={styles.infoDate}>{post.date}</span>
            </div>
            <div className={styles.title}>
              <Text weight="bold" size="large">{post.title}</Text>
            </div>
            <div className={styles.content}>
              <ReactMarkdown>
                {post.text}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default NewsBlog;
