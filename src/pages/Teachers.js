import React, { Component } from 'react';

import MobileMenu from '../components/MobileMenu';
import Header from '../components/Header';

import SidebarMenu from '../components/SidebarMenu';
import TeachersComp from '../components/TeachersComp';
import HelpChoosing from '../components/HelpChoosing';

export default class Teachers extends Component {
  render() {

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
                <TeachersComp />
                <HelpChoosing data={helpChoosingData} inside={true} />
              </div>
              
            </div>

          </div>

        </div>

      </>
    )
  }
}
