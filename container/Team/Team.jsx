import React, { useRef } from 'react';
import { useTranslation } from 'next-i18next';
import styles from './Team.module.scss';
import Wrapper from '../../components/Wrapper';
import Title from '../../components/Title';
import TeamCard from '../../components/TeamCard';
import cn from 'classnames';
import useAnimateFade from '../../hooks/useAnimateFade';
import { getFullPath } from '../../utils';

const Team = ({
  team,
}) => {
  const { t } = useTranslation();
  const titleRef = useRef();
  const cardsRef = useRef();

  const cards = team.map((member) => ({
    id: member.id,
    fullName: member.attributes.fullname,
    position: member.attributes.position,
    facebookLink: member.attributes.facebook,
    telegramLink: member.attributes.telegram,
    instagramLink: member.attributes.instagram,
    imageUrl: getFullPath(member.attributes.image.data?.attributes.url),
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
    <div className={styles.team} id="team">
      <Wrapper>
        <div className={titleClasses} ref={titleRef}>
          <Title title={t('Our Team')} subTitle={t('Experts Team Member will Ready for your Services')} />
        </div>
        <div className={cardsContainerClasses} ref={cardsRef}>
          {
            cards.map((card) => (
              <div className={styles.card} key={card.id}>
                <TeamCard
                  url={card.imageUrl}
                  fullName={card.fullName}
                  position={card.position}
                  facebookLink={card.facebookLink}
                  telegramLink={card.telegramLink}
                  instagramLink={card.instagramLink}
                />
              </div>
            ))
          }
        </div>
      </Wrapper>
    </div>
  )
}

export default Team;
