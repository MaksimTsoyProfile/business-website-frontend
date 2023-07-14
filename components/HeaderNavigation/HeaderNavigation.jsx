import React, { useEffect, useState } from 'react';
import styles from './HeaderNavigation.module.scss';
import Text from '../Text';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';
import Link from 'next/link';
import useWindowSize from '../../hooks/useWindowSize';

const HeaderNavigation = ({
  items = [],
}) => {
  const { t } = useTranslation();
  const [active, setActive] = useState(false);
  const windowSize = useWindowSize();
  const [currentNav, setCurrentNav] = useState(null);
  const [toggle, setToggle] = useState(false);

  const activateNavigation = () => {
    if (window.scrollY >= 140) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const handleClickNav = (navName) => () => {
    setCurrentNav(navName);
  };

  useEffect(() => {
    window.addEventListener('scroll', activateNavigation);
  }, []);

  useEffect(() => {
    if (windowSize.width < 800) {
      setToggle(true);
      return;
    }
    setToggle(false);
  }, [windowSize.width]);

  const navigationClasses = cn({
    [styles.navigation]: true,
    [styles.active]: active,
  });

  const getLinkClasses = (nav) => cn({
    [styles.link]: true,
    [styles.activeNav]: nav === currentNav,
  });

  return (
    <nav className={styles.navigationContainer}>
      <div className={navigationClasses}>
        <Link className={styles.logo} href="/">
          <img src="/logo3.png" alt="logo" />
        </Link>
        <ul className={styles.navItemsContainer}>
          {
            !toggle &&
              items.map((item) => (
                <li className={styles.navItem} key={item.id} onClick={handleClickNav(item.alias)}>
                  <Link href={item.href} className={getLinkClasses(item.alias)}>{item.name}</Link>
                </li>
              ))
          }
          <li>
            <div className={styles.actionButton}>
              {t('Free consultation')}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNavigation;
