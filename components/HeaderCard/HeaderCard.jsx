import styles from './HeaderCard.module.scss';
import { useTranslation } from 'next-i18next';
import Text from '../Text';
import { MdArrowRightAlt } from 'react-icons/md';

const HeaderCard = ({
  icon,
  title,
  boldTitle,
  text,
  ...rest
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.cardContainer} {...rest}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>
        <Text color="grey" size="small">{title}</Text>
      </div>
      <div className={styles.boldTitle}>
        <Text color="black" weight="bold">{boldTitle}</Text>
      </div>
      <div className={styles.text}>
        <Text color="grey" weight="light" size="small">{text}</Text>
      </div>
      <div className={styles.more}>
        <span className={styles.moreText}>{t('read more')}</span>
        <MdArrowRightAlt />
      </div>
    </div>
  );
};

export default HeaderCard;
