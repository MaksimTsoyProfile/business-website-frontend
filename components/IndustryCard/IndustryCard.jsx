import React from 'react';
import styles from './IndustryCard.module.scss';
import Text from '../Text';

const IndustryCard = ({
  icon,
  title,
  text,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.icon}>{icon}</div>
      <div>
        <Text weight="bold" style={{ marginBottom: '10px' }}>{title}</Text>
        <div className={styles.textContainer}>
          <Text size="small" color="grey" weight="light" >{text}</Text>
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
