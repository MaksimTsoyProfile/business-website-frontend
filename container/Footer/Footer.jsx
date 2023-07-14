import React, { useRef } from 'react';
import styles from './Footer.module.scss';
import { useTranslation } from 'next-i18next';
import Wrapper from '../../components/Wrapper';
import { MdFacebook } from 'react-icons/md';
import { FaTelegram, FaInstagramSquare } from 'react-icons/fa';
import Text from '../../components/Text';
import cn from 'classnames';
import useAnimateFade from '../../hooks/useAnimateFade';

const Footer = ({
  services,
  main,
}) => {
  const { t } = useTranslation();
  const footerContainerRef = useRef();

  const footerContainerClasses = cn({
    [styles.footerContainer]: true,
    animate__animated: true,
  });

  useAnimateFade(footerContainerRef);

  const servicesLinks = services.map((service) => ({
    id: service.id,
    name: service.attributes.subtitle,
  }));

  const mainData = {
    text: main.attributes.footerText,
    address: main.attributes.address,
    phoneNumber: main.attributes.phoneNumber,
    facebookLink: main.attributes.facebookLink,
    instagramLink: main.attributes.instagramLink,
    telegramLink: main.attributes.telegramLink,
    email: main.attributes.email,
  };

  return (
    <div className={styles.footer}>
      <Wrapper>
        <div className={footerContainerClasses} ref={footerContainerRef}>
          <div className={styles.footerContent}>
            <div className={styles.footerContentLogo}>
              <img src="/logo3.png" alt="logo" />
            </div>
            <div className={styles.footerContentText}>
              {mainData.text}
            </div>
            <div className={styles.footerContentIcons}>
              <a className={styles.icon} href={mainData.facebookLink} target="_blank" rel="noreferrer">
                <MdFacebook size={26} />
              </a>
              <a className={styles.icon} href={mainData.instagramLink} target="_blank" rel="noreferrer">
                <FaInstagramSquare size={26} />
              </a>
              <a className={styles.icon} href={mainData.telegramLink} target="_blank" rel="noreferrer">
                <FaTelegram size={26} />
              </a>
            </div>
          </div>
          <div className={styles.footerServices}>
            <div className={styles.footerTitle}>
              <Text size="large" weight="bold">{t('Services')}</Text>
              <div className={styles.divider} />
            </div>
            <div className={styles.footerServicesLinks}>
              {
                servicesLinks.map((link) => (
                  <div className={styles.link} key={link.id}>{link.name}</div>
                ))
              }
            </div>
          </div>
          <div className={styles.footerContacts}>
            <div className={styles.footerTitle}>
              <Text size="large" weight="bold">{t('Get in Touch')}</Text>
              <div className={styles.divider} />
            </div>
            <div className={styles.footerContactsInfo}>
              <div className={styles.phone}>{mainData.phoneNumber}</div>
              <div className={styles.address}>{mainData.address}</div>
              <div className={styles.link}>{'example.com'}</div>
            </div>
          </div>
        </div>
        <div className={styles.authors}>
          <div>
            Created by Endpoint
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
