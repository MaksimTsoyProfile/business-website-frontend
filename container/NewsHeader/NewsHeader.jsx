import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Wrapper from '../../components/Wrapper';
import styles from './NewsHeader.module.scss';
import { FaEnvelope, FaInstagramSquare, FaTelegram } from 'react-icons/fa';
import { MdFacebook } from 'react-icons/md';
import Link from 'next/link';
import HeaderNavigation from '../../components/HeaderNavigation';
import cn from 'classnames';
import { useRouter } from 'next/router';
import useWindowSize from '../../hooks/useWindowSize';

const NewsHeader = ({
  main,
}) => {
  const { t, i18n } = useTranslation();
  const { query } = useRouter();
  const windowSize = useWindowSize();
  const [toggle, setToggle] = useState(false);

  const getLangClassesByName = (lang) => {
    return cn({
      [styles.lang]: true,
      [styles.active]: lang === i18n.language,
    })
  };

  const navigationItems = [
    {
      name: t('Home'),
      alias: 'home',
      id: 1,
      href: '/#main',
    },
    {
      name: t('Industries'),
      alias: 'industries',
      id: 2,
      href: '/#industries',
    },
    {
      name: t('Cases'),
      alias: 'cases',
      id: 3,
      href: '/#cases',
    },
    {
      name: t('News'),
      alias: 'news',
      id: 4,
      href: '/#news',
    },
    {
      name: t('Team'),
      alias: 'team',
      id: 5,
      href: '/#team',
    }
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

  useEffect(() => {
    if (windowSize.width < 800) {
      setToggle(true);
      return;
    }
    setToggle(false);
  }, [windowSize.width]);

  return (
    <div className={styles.newsHeader}>
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
                  href={{
                    pathname: '/news',
                    query,
                  }}
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
      </Wrapper>
    </div>
  );
};

export default NewsHeader;
