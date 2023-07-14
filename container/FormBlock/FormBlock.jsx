import React, { useEffect, useRef, useState } from 'react';
import styles from './FormBlock.module.scss';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';
import { MdArrowRightAlt } from 'react-icons/md';
import Wrapper from '../../components/Wrapper';
import useAnimateFade from '../../hooks/useAnimateFade';
import { sendMessage } from '../../backendApi';
import Text from '../../components/Text';
import useWindowSize from '../../hooks/useWindowSize';

const FormBlock = ({
  main,
}) => {
  const { t } = useTranslation();
  const formContainerRef = useRef();
  const [sendSuccess, setSendSuccess] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [toggle, setToggle] = useState(false);
  const windowSize = useWindowSize();

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    grecaptcha.ready(function() {
      grecaptcha.execute('reCAPTCHA_site_key', {action: 'submit'})
        .then((token) => {
          const body = {
            data: {
              firstName,
              lastName,
              email,
              subject,
              message,
            }
          };
          sendMessage(body);
      })
        .then(() => {
          clearForm();
          setSendSuccess(true);
        })
    });
  };

  const textAreaClasses = cn({
    [styles.input]: true,
    [styles.textArea]: true,
  });

  const formContainerClasses = cn({
    [styles.formContainer]: true,
    animate__animated: true,
  });

  useAnimateFade(formContainerRef);

  useEffect(() => {
    if (windowSize.width < 576) {
      setToggle(true);
      return;
    }
    setToggle(false);
  }, [windowSize.width]);

  return (
    <div className={styles.formWrapper}>
      <Wrapper>
        <div className={formContainerClasses} ref={formContainerRef}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="firstName"
              className={styles.input}
              placeholder={t("First Name")}
              value={firstName}
              onChange={(e) => {setFirstName(e.target.value)}}
            />
            <input
              type="text"
              name="lastName"
              className={styles.input}
              placeholder={t("Last Name")}
              value={lastName}
              onChange={(e) => {setLastName(e.target.value)}}
            />
            <input
              type="email"
              name="email"
              className={styles.input}
              placeholder={t("Email")}
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
            />
            <input
              type="text"
              name="subject"
              className={styles.input}
              placeholder={t("Subject")}
              value={subject}
              onChange={(e) => {setSubject(e.target.value)}}
            />
            <textarea
              name="message"
              className={textAreaClasses}
              placeholder={t("More")}
              rows={7}
              value={message}
              onChange={(e) => {setMessage(e.target.value)}}
            />
            {
              sendSuccess ?
                (
                  <Text color="white" weight="bold">{t('Form submitted successfully')}</Text>
                ) : (
                  <button className={styles.button} type="submit">
                    <span style={{ marginRight: '14px' }}>{t('Send Message')}</span>
                    <MdArrowRightAlt size={24} />
                  </button>
                )
            }
          </form>
          {
            !toggle && (
              <div className={styles.contactInfo}>
                <div className={styles.title}>
                  {t('Contact Us')}
                </div>
                <div className={styles.text}>
                  {t('Contact for any Kind of Information')}
                </div>
                <div className={styles.title}>
                  {t('Call us at this number')}
                </div>
                <div className={styles.text}>
                  {main.attributes.phoneNumber}
                </div>
              </div>
            )
          }
        </div>
      </Wrapper>
    </div>
  );
};

export default FormBlock;
