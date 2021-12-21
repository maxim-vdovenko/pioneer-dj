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
      text: ['Единственная в России <br> Официальная школа бренда Pioneer DJ'],
      link: {
        name: 'Бесплатный пробный урок',
        src: '#'
      }
    }

    const sliderBoxsData = [
      {
        title: 'Индивидуальное обучение',
        link: '#'
      },
      {
        title: 'Флагманское оборудование',
        link: '#'
      },
      {
        title: 'Большой тренинг - класс',
        link: '#'
      },
      {
        title: 'Продвижение выпускников',
        link: '#'
      },
      {
        title: 'Скидки на оборудование',
        link: '#'
      },
      {
        title: 'Большой тренинг - класс',
        link: '#'
      },
      {
        title: 'Индивидуальное обучение',
        link: '#'
      }
    ]

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

    const stepsChangeData = {
      title: {
        value: [
          ['red', '4 шага'],
          ['dark', 'к переменам в жизни']
        ],
      },
      val: [
        {
          title: 'Получаете только практические знания и навыки',
          text: 'Только практические уроки один-на-один с преподавателем с методическими материалами, которые остаются у вас'
        },
        {
          title: 'Практикуетесь сколько нужно на оборудовании в школе',
          text: 'На всем оборудовании DJ Центра безлимитно и бесплатно, записываться не нужно, просто приходите, когда удобно'
        },
        {
          title: 'Защищаете свою экзаменационную работу',
          text: 'К концу обучения создадите свой микс, мы снимем выступление на видео и отправим на аттестацию в Pioneer DJ в Лондон'
        },
        {
          title: 'Вступаете в систему продвижения Pioneer DJ Family',
          text: 'Продвижение в проф. соц.сетях, закрытые мастер-классы, организация выступлений (в том числе оплачиваемых)'
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

    const helpChoosingData = {
      title: 'Получить полную информацию о курсе',
      text: 'Остались вопросы? Оставьте свой номер, мы позвоним и ответим на все ваши вопросы'
    }

    return (
      <>
        <MobileMenu />
        <Header />
        
        <Head data={heatData} />
        <SliderBoxs data={sliderBoxsData} />
        <PopularCourses />
        <TeachersMain />
        <StudentReviews />
        <TrialLesson />
        <LogoSlider />
        <StepsChange data={stepsChangeData} view={'numbering'} />
        <VideoBox />
        <SliderImages data={sliderImagesData} positionCenter={true} />
        <NewsComp data={newsData} dataClass={'main'} />
        <HelpChoosing data={helpChoosingData} />
        <OtherProjects />
      </>
    )
  }
}
