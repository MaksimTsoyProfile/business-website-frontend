import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import styles from './StatisticNumbers.module.scss';
import Wrapper from '../../components/Wrapper';
import cn from 'classnames';
import useAnimateFade from '../../hooks/useAnimateFade';

const StatisticNumbers = ({
  statistics,
}) => {
  const { t, i18n } = useTranslation();
  const statContainerRef = useRef();

  const stats = statistics.map((stat) => ({
    id: stat.id,
    number: stat.attributes.number,
    name: stat.attributes.label,
  }));

  useEffect(() => {
    const statNumbers = document.querySelectorAll('.statNumber')
    const interval = 5000;
    statNumbers.forEach((statNumber) => {
      let startValue = 0;
      const endValue = parseInt(statNumber.getAttribute('data-val'));
      const duration = Math.floor(interval / endValue);
      const counter = setInterval(() => {
        startValue += 1;
        statNumber.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }, [i18n.language]);

  useAnimateFade(statContainerRef);

  const statContainerClasses = cn({
    [styles.statContainer]: true,
    animate__animated: true,
  })

  const statNumberClasses = cn({
    [styles.statNumber]: true,
    statNumber: true,
  })

  return (
    <div className={styles.stat}>
      <Wrapper>
        <div className={statContainerClasses} ref={statContainerRef}>
          {
            stats.map((stat) => (
              <div className={styles.statItem} key={stat.id}>
                <div data-val={stat.number} className={statNumberClasses}>000</div>
                <div className={styles.statName}>{stat.name}</div>
              </div>
            ))
          }
        </div>
      </Wrapper>
    </div>
  );
};

export default StatisticNumbers;
