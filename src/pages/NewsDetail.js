import React, { Component } from 'react';

import MobileMenu from '../components/MobileMenu';
import Header from '../components/Header';

import SidebarMenu from '../components/SidebarMenu';
import NewsDetailComp from '../components/NewsDetailComp';
import NewsComp from '../components/NewsComp';
import HelpChoosing from '../components/HelpChoosing';

import NewsImg1 from '../img/news/img-1.jpg'; 
import NewsImg2 from '../img/news/img-2.jpg'; 
import NewsImg3 from '../img/news/img-3.jpg'; 
import NewsImg4 from '../img/news/img-4.jpg'; 

export default class NewsDetail extends Component {
  render() {

    const newsData = {
      title: {
        value: [
          ['dark', 'Другие новости и акции']
        ],
        mobile: false
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
        }
      ]
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
                <NewsDetailComp />
                <NewsComp data={newsData} dataClass={'detail'} />
                <HelpChoosing inside={true} />
              </div>
              
            </div>

          </div>

        </div>

      </>
    )
  }
}
