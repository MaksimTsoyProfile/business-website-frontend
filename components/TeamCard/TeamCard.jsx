import React from 'react';
import styles from './TeamCard.module.scss';
import { MdFacebook } from 'react-icons/md';
import { FaInstagramSquare, FaTelegram } from 'react-icons/fa';
import Text from '../Text';


const TeamCard = ({
  url,
  fullName,
  position,
  facebookLink,
  telegramLink,
  instagramLink,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <img src={url} alt='img' />
        </div>
        <div className={styles.iconContainer}>
          {
            facebookLink && (
              <a className={styles.icon} href={facebookLink} target="_blank" rel="noreferrer">
                <MdFacebook size={30} />
              </a>
            )
          }
          {
            instagramLink && (
              <a className={styles.icon} href={instagramLink} target="_blank" rel="noreferrer">
                <FaInstagramSquare size={30} />
              </a>
            )
          }
          {
            telegramLink && (
              <a className={styles.icon} href={telegramLink} target="_blank" rel="noreferrer">
                <FaTelegram size={30} />
              </a>
            )
          }
        </div>
      </div>
      <div className={styles.infoContainer}>
        <Text weight="bold">{fullName}</Text>
        <Text color="grey" size="small">{position}</Text>
      </div>
    </div>
  );
};

export default TeamCard;
