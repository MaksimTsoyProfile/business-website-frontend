import styles from './Text.module.scss';
import cn from 'classnames';

const Text = ({
  color = 'black',
  size = 'medium',
  weight = 'normal',
  isColorChange = false,
  children,
  ...rest
}) => {
  const textClasses = cn({
    [styles.textContainer]: true,
    [styles.black]: color === 'black',
    [styles.grey]: color === 'grey',
    [styles.large]: size === 'large',
    [styles.medium]: size === 'medium',
    [styles.small]: size === 'small',
    [styles.light]: weight === 'light',
    [styles.normal]: weight === 'normal',
    [styles.bold]: weight === 'bold',
    [styles.colorChange]: isColorChange,
  });

  return (
    <div className={textClasses} {...rest}>
      {children}
    </div>
  )
}

export default Text;
