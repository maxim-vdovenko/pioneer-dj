import React, { Component } from 'react';
import DiscountImg from '../img/news/img-2.jpg'; 

export default class MobileMenu extends Component {
  render() {
    return(
      <div className="mobileMenu">
        <div className="mobileMenu__logo"></div>
        <div className="mobileMenu__cont">

          <div className="mobileMenu__menu">

            <div className="mobileMenu__menu-discount">
              <a className="mobileMenu__menu-discount-img" href="#"><img src={DiscountImg} alt="img" /></a>
              <a className="mobileMenu__menu-discount-val" href="#">Акция Комбо</a>
            </div>

            <div className="mobileMenu__menu-box">

              <span className="mobileMenu__menu-title">Курсы</span>
              <div className="mobileMenu__menu-butt"></div>

              <ul className="mobileMenu__menu-list">

                <li>
                  <span className="mobileMenu__menu-title">Курсы диджеинга</span>
                  <div className="mobileMenu__menu-butt"></div>

                  <ul className="mobileMenu__menu-list">
                    <li><a href="#">Базовый курс диджеинга</a></li>
                    <li><a href="#">PRO курс диджеинга</a></li>
                    <li><a href="#">Базовый интенсив курс диджеинга</a></li>
                    <li><a href="#">PRO интенсив курс диджеинга</a></li>
                    <li><a href="#">Kids DJ курс</a></li>
                  </ul>
                </li>

                <li>
                  <span className="mobileMenu__menu-title">Написание музыки</span>
                  <div className="mobileMenu__menu-butt"></div>

                  <ul className="mobileMenu__menu-list">
                    <li><a href="#">Базовый курс по написанию музыки</a></li>
                    <li><a href="#">PRO курс по написанию музыки</a></li>
                    <li><a href="#">Базовый интенсив курс по написанию музыки</a></li>
                    <li><a href="#">PRO интенсив курс по написанию музыки</a></li>
                  </ul>
                </li>

                <li>
                  <span className="mobileMenu__menu-title">Авторские курсы</span>
                  <div className="mobileMenu__menu-butt"></div>

                  <ul className="mobileMenu__menu-list">
                    <li><a href="#">Scratch курс от DJ Scream One</a></li>
                    <li><a href="#">Техничный диджеинг от DJ Scream One</a></li>
                  </ul>
                </li>

              </ul>
              
            </div>

            <div className="mobileMenu__menu-box">
              <a className="mobileMenu__menu-title" href="#">Услуги</a>
            </div>

            <div className="mobileMenu__menu-box">
              <a className="mobileMenu__menu-title" href="#">О школе</a>
            </div>

            <div className="mobileMenu__menu-box">
              <a className="mobileMenu__menu-title" href="#">Контакты</a>
            </div>

          </div>

        </div>
      </div>
    ) 
  }
}
