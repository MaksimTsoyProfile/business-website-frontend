import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import NewsHeader from '../container/NewsHeader';
import { getMain, getNews, getNewsById, getServices } from '../backendApi';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NewsBlog from '../container/NewsBlog';
import Footer from '../container/Footer';
import { useRouter } from 'next/router';

const NewsPage = ({
  main = {},
  news = [],
  services = [],
}) => {
  const { t, i18n } = useTranslation();
  const { query } = useRouter()
  const { newsId } = query;
  const [currentNews, setCurrentNews] = useState(null);

  useEffect(() => {
    const getNewsByQuery = async () => {
      const normalizedValues = {
        id: newsId,
        params: {
          locale: i18n.language,
          populate: '*',
        }
      };
      const data = await getNewsById(normalizedValues);
      setCurrentNews(data);
    }
    getNewsByQuery();
  }, [newsId, i18n.language]);

  return (
    <div>
      <NewsHeader main={main} />
      <NewsBlog news={news} currentNews={currentNews} />
      <Footer services={services} main={main} />
    </div>
  );
};

export async function getServerSideProps({ locale }) {
  try {
    const rootQueryParams = { locale };
    const services = await getServices(rootQueryParams);
    const main = await getMain(rootQueryParams);
    const news = await getNews({ ...rootQueryParams, populate: '*' });
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
        main,
        news: news,
        services,
      },
    }
  } catch (e) {
    console.log(e);
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
        main: {},
        news: [],
        services: [],
      }
    }
  }
}

export default NewsPage;
