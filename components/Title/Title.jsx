import React from 'react';
import styles from './Title.module.scss';
import Text from '../Text';

const Title = ({
  title,
  subTitle,
}) => {
  return (
    <div>
      <div className={styles.title}>
        <Text color="grey">{title}</Text>
      </div>
      <div className={styles.subtitle}>
        <Text weight="bold" size="large">{subTitle}</Text>
      </div>
      <div className={styles.highLighter} />
    </div>
  );
};

export default Title;
