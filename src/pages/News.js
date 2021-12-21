import React, { Component } from 'react';

import MobileMenu from '../components/MobileMenu';
import Header from '../components/Header';

import SidebarMenu from '../components/SidebarMenu';
import NewsComp from '../components/NewsComp';
import HelpChoosing from '../components/HelpChoosing';

import NewsImg1 from '../img/news/img-1.jpg'; 
import NewsImg2 from '../img/news/img-2.jpg'; 
import NewsImg3 from '../img/news/img-3.jpg'; 
import NewsImg4 from '../img/news/img-4.jpg'; 
import NewsImg5 from '../img/news/img-5.jpg'; 
import NewsImg6 from '../img/news/img-6.jpg'; 
import NewsImg7 from '../img/news/img-7.jpg'; 
import NewsImg8 from '../img/news/img-8.jpg'; 
import NewsImg9 from '../img/news/img-9.jpg'; 

export default class News extends Component {
  render() {

    const newsData = {
      title: {
        value: [
          ['red', 'Новости'],
          ['dark', 'и акции'],
        ],
      },
      more: {
        text: ['Показать еще', 'новостей']
      },
      mobile: true,
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
        },
        {
          link: '/news/detail',
          srcImg: NewsImg9
        }
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

        <div className="doubleBlock">

          <div className="container">

            <div className="doubleBlock__block">

              <div className="doubleBlock__sidebar">
                <SidebarMenu />
              </div>

              <div className="doubleBlock__cont">
                <NewsComp data={newsData} dataClass={'comp'} />
                <HelpChoosing data={helpChoosingData} inside={true} />
              </div>
              
            </div>

          </div>

        </div>

      </>
    )
  }
}
