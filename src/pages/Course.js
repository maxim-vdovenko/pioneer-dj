import React, { Component } from 'react';

import MobileMenu from '../components/MobileMenu';
import Header from '../components/Header';

import Head from '../components/Head';
import SliderBoxs from '../components/SliderBoxs';
import TrialLesson from '../components/TrialLesson';
import StepsChange from '../components/StepsChange';
import TeachersMain from '../components/TeachersMain';

export default class Course extends Component {
  render() {

    const heatData = {
      image: {
        src: ''
      },
      title: {
        name: 'Базовый DJ Курс',
        addclass: 'internal'
      },
      text: ['Станешь DJ и овладеешь навыками игры на DJ оборудовании для начала выступлений в ночных заведениях'],
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
        title: 'Безлимитная практика',
        link: '#'
      },
      {
        title: 'Международный сертификат',
        link: '#'
      },
      {
        title: 'Продвижение после обучения',
        link: '#'
      }
    ]

    const stepsChangeData = {
      title: {
        value: [
          ['red', 'Как'],
          ['dark', 'проходит обучение на этом курсе']
        ],
      },
      val: [
        {
          title: 'Получаете только практические знания и навыки',
          text: 'Только практические уроки один-на-один с преподавателем с методическими материалами, которые остаются у вас'
        },
        {
          title: 'Обучаешься на флагманском оборудовании',
          text: 'Только в нашей школе ты сможешь обучаться на самом топовом, новом оборудовании мирового лидера Pioneer DJ'
        },
        {
          title: 'Практикуешься сколько угодно на оборудовании в школе',
          text: 'Просторный тренинг-класс с актуальным оборудованием безлимитно и бесплатно, приходи когда удобно без предупреждения'
        },
        {
          title: 'Вступаешь в систему по продвижеию Pioneer DJ Family',
          text: 'Продвижение в проф. соц.сетях, закрытые мастер-классы, организация выступлений (в том числе оплачиваемых)'
        }
      ]
    }

    return (
      <>
        <MobileMenu />
        <Header />

        <Head data={heatData} />
        <SliderBoxs data={sliderBoxsData} />

        <TrialLesson />
        <StepsChange data={stepsChangeData} />

        <TeachersMain />

      </>
    )
  }
}
