import React, { Component } from 'react';

import HeadImage from '../img/header/Pioneer-DJ-School.jpg';

import MobileMenu from '../components/MobileMenu';
import Header from '../components/Header';

import Head from '../components/Head';
import SliderBoxs from '../components/SliderBoxs';
import PopularCourses from '../components/PopularCourses';
import TeachersMain from '../components/TeachersMain';
import StudentReviews from '../components/StudentReviews';
import TrialLesson from '../components/TrialLesson';
import LogoSlider from '../components/LogoSlider';
import StepsChange from '../components/StepsChange';
import VideoBox from '../components/VideoBox';
import SliderImages from '../components/SliderImages';
import NewsComp from '../components/NewsComp';
import HelpChoosing from '../components/HelpChoosing';
import OtherProjects from '../components/OtherProjects';

import NewsImg1 from '../img/news/img-1.jpg'; 
import NewsImg2 from '../img/news/img-2.jpg'; 
import NewsImg3 from '../img/news/img-3.jpg'; 
import NewsImg4 from '../img/news/img-4.jpg'; 
import NewsImg5 from '../img/news/img-5.jpg'; 
import NewsImg6 from '../img/news/img-6.jpg'; 
import NewsImg7 from '../img/news/img-7.jpg'; 
import NewsImg8 from '../img/news/img-8.jpg'; 

import SliderImg1 from '../img/our-school/img-1.jpg'; 
import SliderImg2 from '../img/our-school/img-2.jpg'; 
import SliderImg3 from '../img/our-school/img-3.jpg'; 

export default class Main extends Component {
  render() {

    const heatData = {
      image: {
        src: HeadImage,
        alt: 'image-pioneer-dj-school'
      },
      title: {
        name: 'Pioneer DJ School'
      },
      text: ['Единственная сертифицированная школа диджеинга от бренда Pioneer DJ в России'],
      link: {
        name: 'Бесплатный пробный урок',
        src: '#'
      }
    }

    const newsData = {
      title: {
        value: [
          ['dark', 'Новости'],
          ['red', 'и акции']
        ],
        valueLink: 'Все новости',
        link: '/news',
        mobile: true
      },
      box: [
        {
          link: '/news/detail',
          srcImg: NewsImg1
        },
        {
          link: '/news/detail',
          srcImg: NewsImg2
        },
        {
          link: '/news/detail',
          srcImg: NewsImg3
        },
        {
          link: '/news/detail',
          srcImg: NewsImg4
        },
        {
          link: '/news/detail',
          srcImg: NewsImg5
        },
        {
          link: '/news/detail',
          srcImg: NewsImg6
        },
        {
          link: '/news/detail',
          srcImg: NewsImg7
        },
        {
          link: '/news/detail',
          srcImg: NewsImg8
        }
      ]
    }

    const sliderImagesData = {
      title: {
        value: [
          ['dark', 'Наша школа']
        ],
        valueLink: 'Подробнее о школе',
        link: '#',
        mobile: true
      },
      description: [
        'Pioneer DJ School — специализированная площадка для выступлений, лекций, воркшопов и других ивентов'
      ],
      box: [
        {src: SliderImg1},
        {src: SliderImg2},
        {src: SliderImg3},
        {src: SliderImg2},
        {src: SliderImg1},
        {src: SliderImg3},
        {src: SliderImg2}
      ]
    }

    return (
      <>
        <MobileMenu />
        <Header />
        
        <Head data={heatData} />
        <SliderBoxs />
        <PopularCourses />
        <TeachersMain />
        <StudentReviews />
        <TrialLesson />
        <LogoSlider />
        <StepsChange />
        <VideoBox />
        <SliderImages data={sliderImagesData} positionCenter={true} />
        <NewsComp data={newsData} dataClass={'main'} />
        <HelpChoosing />
        <OtherProjects />
      </>
    )
  }
}
