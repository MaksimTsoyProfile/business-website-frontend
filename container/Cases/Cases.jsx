import React, { useRef } from 'react';
import styles from './Cases.module.scss';
import Wrapper from '../../components/Wrapper';
import Title from '../../components/Title';
import { useTranslation } from 'next-i18next';
import CaseImageCard from '../../components/CaseImageCard';
import cn from 'classnames';
import useAnimateFade from '../../hooks/useAnimateFade';
import { getFullPath } from '../../utils';

const Cases = ({
  cases,
}) => {
  const { t } = useTranslation();
  const titleRef = useRef();
  const cardsRef = useRef();

  const cards = cases.map((caseItem) => ({
    id: caseItem.id,
    imageUrl: getFullPath(caseItem.attributes.image.data?.attributes.url),
    title: caseItem.attributes.title,
    text: caseItem.attributes.description,
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
    <div className={styles.cases} id="cases">
      <Wrapper>
        <div className={titleClasses} ref={titleRef}>
          <Title title={t('Our Cases')} subTitle={t('Doing the Right Thing, at the Right Time')} />
        </div>
        <div className={cardsContainerClasses} ref={cardsRef}>
          {
            cards.map((card) => (
              <div className={styles.card} key={card.id}>
                <CaseImageCard
                  url={card.imageUrl}
                  hoverTitle={card.title}
                  hoverText={card.text}
                />
              </div>
            ))
          }
        </div>
      </Wrapper>
    </div>
  );
};

export default Cases;
