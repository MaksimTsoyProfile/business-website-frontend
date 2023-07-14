import React from 'react';
import { MdAdd, MdArrowRightAlt, MdCalendarToday, MdOutlinePersonOutline } from 'react-icons/md';
import styles from './NewsCard.module.scss';
import Text from '../Text';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const NewsCard = ({
  newsId,
  url,
  date,
  title,
  text,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <img src={url} alt='img' />
        </div>
        <div className={styles.iconContainer}>
          <MdAdd size={40} />
        </div>
      </div>
      <div className={styles.info}>
        <MdCalendarToday size={11} />
        <span className={styles.infoDate}>{date}</span>
      </div>
      <div className={styles.title}>
        <Text weight="bold">{title}</Text>
      </div>
      <div className={styles.text}>
        <Text color="grey" size="small">{text}</Text>
      </div>
      <div className={styles.more}>
        <Link
          href={{
            pathname: '/news',
            query: { newsId },
          }}
          className={styles.moreText}
        >
          {t('Read more')}
        </Link>
        <MdArrowRightAlt />
      </div>
    </div>
  );
};

export default NewsCard;
