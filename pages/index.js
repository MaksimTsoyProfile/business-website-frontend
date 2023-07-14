import React from 'react';
import {
  getCases,
  getIndustries,
  getMain,
  getNews,
  getServices,
  getStatistics,
  getTeam,
  getTestimonials
} from '../backendApi';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'animate.css';
import Header from '../container/Header';
import Industry from '../container/Industry';
import Cases from '../container/Cases';
import News from '../container/News';
import Team from '../container/Team';
import FormBlock from '../container/FormBlock';
import StatisticNumbers from '../container/StatisticNumbers';
import SwiperBlock from '../container/SwiperBlock';
import BrandsBlock from '../container/BrandsBlock';
import Footer from '../container/Footer';
import { useRouter } from 'next/router';
import CustomHead from '../components/CustomHead';

const Home = ({
  main = {},
  services = [],
  industries = [],
  cases = [],
  statistics = [],
  testimonials = [],
  team = [],
  news = [],
}) => {
  return (
    <div id='main'>
      <CustomHead />
      <Header services={services} main={main} />
      <Industry industries={industries} />
      <StatisticNumbers statistics={statistics} />
      <Cases cases={cases} />
      <SwiperBlock testimonials={testimonials} />
      <News news={news} />
      <BrandsBlock />
      <Team team={team} />
      <FormBlock main={main} />
      <Footer services={services} main={main} />
    </div>
  );
};

export async function getServerSideProps({ locale }) {
  try {
    const rootQueryParams = { locale };

    const main = await getMain(rootQueryParams);
    const services = await getServices(rootQueryParams);
    const industries = await getIndustries(rootQueryParams);
    const cases = await getCases({ ...rootQueryParams, populate: '*' });
    const statistics = await getStatistics(rootQueryParams);
    const testimonials = await getTestimonials(rootQueryParams);
    const team = await getTeam({ ...rootQueryParams, populate: '*' });
    const news = await getNews({ ...rootQueryParams, populate: '*' });


    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
        main,
        services,
        industries,
        cases,
        statistics,
        testimonials,
        team,
        news,
      },
    }
  } catch (e) {
    console.log(e);
    return {
      props: {
        main: {},
        services: [],
        industries: [],
        cases: [],
        statistics: [],
        testimonials: [],
        team: [],
        news: [],
      }
    }
  }
}

export default  Home;
