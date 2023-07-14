import React from 'react';
import styles from './CaseImageCard.module.scss';
import Text from '../Text';

const CaseImageCard = ({
  url,
  hoverTitle,
  hoverText,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.image}>
        <img src={url} alt="img"/>
      </div>
      <div className={styles.textContainer}>
        <Text weight="bold" isColorChange style={{ marginBottom: '10px' }}>{hoverTitle}</Text>
        <Text color="grey" size="small" isColorChange>{hoverText}</Text>
      </div>
    </div>
  );
};

export default CaseImageCard;
