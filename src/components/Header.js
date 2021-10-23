import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu';
import MobileMenu from './MobileMenu';
import HeaderFon from '../img/header/Pioneer-DJ-School.jpg';

export default class Header extends Component {
  render() {
    return(
      <header className="header">

        <div className="header__fon">
          <img src={HeaderFon} alt="img" />
        </div>

        <div className="container">

          <div className="header__top">

            <div className="header__top-logo">
              <a className="header__logo" href="#"></a>
            </div>

            <div className="header__top-menu">
              <HeaderMenu />
              <a className="header__phone" href="#">+ 7 916  942 5248</a>

              <div className="header__navMobile">
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>

            <MobileMenu />

          </div>

          <div className="header__cont">

            <div className="header__text">
              <h1>Pioneer DJ School</h1>
              <p>Единственная сертифицированная школа диджеинга от бренда Pioneer DJ в России </p>
            </div>

            <a className="button-empty" href="#"><span>Бесплатный пробный урок</span></a>

          </div>

          <a className="button-play" href="#"></a>

        </div>

        <div className="header__sliderBoxs">

          <div className="header__sliderBoxs-cont">
            <a className="header__sliderBoxs-unit" href="#">Продвижение после обучения</a>
          </div>

          <div className="header__sliderBoxs-cont">
            <a className="header__sliderBoxs-unit" href="#">Большой тренинг-класс</a>
          </div>

          <div className="header__sliderBoxs-cont">
            <a className="header__sliderBoxs-unit" href="#">Индивидуальное обучение</a>
          </div>

          <div className="header__sliderBoxs-cont">
            <a className="header__sliderBoxs-unit" href="#">Продвижение после обучения</a>
          </div>

          <div className="header__sliderBoxs-cont">
            <a className="header__sliderBoxs-unit" href="#">Просторные классы</a>
          </div>
          
        </div> 

      </header>
    ) 
  }
}
