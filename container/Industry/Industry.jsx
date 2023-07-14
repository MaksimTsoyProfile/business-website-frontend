import React, { useEffect, useRef } from 'react';
import cn from 'classnames';
import { MdAirplanemodeActive, MdBusinessCenter, MdExtension, MdAccountBalanceWallet, MdApartment, MdAutoGraph } from 'react-icons/md';
import styles from './Industry.module.scss';
import Title from '../../components/Title';
import { useTranslation } from 'next-i18next';
import IndustryCard from '../../components/IndustryCard';
import Wrapper from '../../components/Wrapper';
import useAnimateFade from '../../hooks/useAnimateFade';

const Industry = ({
  industries,
}) => {
  const { t } = useTranslation();
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  const iconsByAlies = {
    plane: <MdAirplanemodeActive size={50} />,
    suitcase: <MdBusinessCenter size={50} />,
    estate: <MdApartment size={50} />,
    statistic: <MdAutoGraph size={50} />,
    merch: <MdExtension size={50} />,
    money: <MdAccountBalanceWallet size={50} />,
  };

  const cards = industries.map((industry) => ({
    id: industry.id,
    icon: iconsByAlies[industry.attributes.alias],
    title: industry.attributes.title,
    text: industry.attributes.description,
  }));

  useAnimateFade(titleRef);
  useAnimateFade(cardsRef);

  const cardsContainerClasses = cn({
    [styles.cards]: true,
    animate__animated: true,
  });

  const titleClasses = cn({
    [styles.titleContainer]: true,
    animate__animated: true,
  });

  return (
    <div className={styles.industry} id="industries">
      <Wrapper>
        <div className={titleClasses} ref={titleRef}>
          <Title title={t('Our Industries')} subTitle={t('There are Many Types of Industries In Consulting')} />
        </div>
        <div className={cardsContainerClasses} ref={cardsRef}>
          {
            cards.map((card) => (
              <div className={styles.card} key={card.id}>
                <IndustryCard
                  icon={card.icon}
                  title={card.title}
                  text={card.text}
                />
              </div>
            ))
          }
        </div>
      </Wrapper>
    </div>
  );
};

export default Industry;
