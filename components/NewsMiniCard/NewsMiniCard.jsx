import React from 'react';
import styles from './NewsMiniCard.module.scss';

const NewsMiniCard = ({
  title,
  imageUrl,
  date,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={imageUrl} alt="image"/>
      </div>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.date}>{date}</div>
      </div>
    </div>
  );
};

export default NewsMiniCard;
