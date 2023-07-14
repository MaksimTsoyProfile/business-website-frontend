import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { MdArrowRightAlt, MdFacebook, MdBusinessCenter, MdExtension, MdAccountBalanceWallet } from 'react-icons/md';
import { FaEnvelope, FaTelegram, FaInstagramSquare } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';
import Wrapper from '../../components/Wrapper';
import HeaderNavigation from '../../components/HeaderNavigation';
import HeaderCard from '../../components/HeaderCard';
import cn from 'classnames';
import Link from 'next/link';
import useWindowSize from '../../hooks/useWindowSize';

const Header = ({
  main,
  services,
}) => {
  const { t, i18n } = useTranslation();
  const windowSize = useWindowSize();
  const [toggle, setToggle] = useState(false);

  const iconsByAlias = {
    business: <MdBusinessCenter size={50} />,
    consulting: <MdExtension size={50} />,
    taxes: <MdAccountBalanceWallet size={50} />,
  };

  const cards = services.map((service) => ({
    id: service.id,
    icon: iconsByAlias[service.attributes.alias],
    title: service.attributes.title,
    subtitle: service.attributes.subtitle,
    text: service.attributes.description,
  }));

  const navigationItems = [
    {
      name: t('Home'),
      alias: 'home',
      id: 1,
      href: '#main',
    },
    {
      name: t('Industries'),
      alias: 'industries',
      id: 2,
      href: '#industries',
    },
    {
      name: t('Cases'),
      alias: 'cases',
      id: 3,
      href: '#cases',
    },
    {
      name: t('News'),
      alias: 'news',
      id: 4,
      href: '#news',
    },
    {
      name: t('Team'),
      alias: 'team',
      id: 5,
      href: '#team',
    }
  ];

  const languages = [
    {
      id: 1,
      name: 'ru',
    },
    {
      id: 2,
      name: 'en',
    },
    {
      id: 3,
      name: 'uz',
    },
  ];

  const mainData = {
    title: main.attributes.headerTitle,
    subtitle: main.attributes.headerSubtitle,
    phoneNumber: main.attributes.phoneNumber,
    facebookLink: main.attributes.facebookLink,
    instagramLink: main.attributes.instagramLink,
    telegramLink: main.attributes.telegramLink,
    email: main.attributes.email,
  };

  const getLangClassesByName = (lang) => {
    return cn({
      [styles.lang]: true,
      [styles.active]: lang === i18n.language,
    })
  };

  useEffect(() => {
    if (windowSize.width < 800) {
      setToggle(true);
      return;
    }
    setToggle(false);
  }, [windowSize.width]);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.imageContainer} />
      <Wrapper>
        <div className={styles.contacts}>
          {
            !toggle && (
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <FaEnvelope size={10} />
                  <span style={{margin: '0 30px 0 10px'}}>{mainData.email}</span>
                </div>
                <div className={styles.contactItem}>
                  <span>{t('Call us')}</span>
                  <span>{mainData.phoneNumber}</span>
                </div>
                <div className={styles.followInfo}>
                  <span>{t('Follow')}</span>
                  <a className={styles.icon} href={mainData.facebookLink} target="_blank" rel="noreferrer">
                    <MdFacebook size={14} />
                  </a>
                  <a className={styles.icon} href={mainData.instagramLink} target="_blank" rel="noreferrer">
                    <FaInstagramSquare size={14} />
                  </a>
                  <a className={styles.icon} href={mainData.telegramLink} target="_blank" rel="noreferrer">
                    <FaTelegram size={14} />
                  </a>
                </div>
              </div>
            )
          }
          <div className={styles.languages}>
            <span>{t('Languages')}</span>
            {
              languages.map((lang) => (
                <Link
                  key={lang.id}
                  href="/"
                  className={getLangClassesByName(lang.name)}
                  locale={lang.name}
                >
                  {lang.name}
                </Link>
              ))
            }
          </div>
        </div>
        <HeaderNavigation items={navigationItems} />
        <div className={styles.content}>
          <div className={styles.contentTitle}>{mainData.title}</div>
          <div className={styles.contentText}>{mainData.subtitle}</div>
          <div className={styles.button}>
            <span style={{ marginRight: '10px' }}>{t('Purchase now')}</span>
            <MdArrowRightAlt size={20} />
          </div>
        </div>
        <div className={styles.cards}>
          {
            cards.map((card) => (
              <div className={styles.card} key={card.id}>
                <HeaderCard
                  icon={card.icon}
                  title={card.title}
                  boldTitle={card.subtitle}
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

export default Header;
