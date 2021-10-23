import React, { Component } from 'react';
import DiscountImg from '../img/news/img-2.jpg'; 

export default class HeaderMenu extends Component {
  render() {
    return(
      <ul className="header__menu">

        <li>
          <div className="header__menu-arrow">
            <a href="#">Курсы</a>
            <div className="header__submenu">

              <div className="header__submenu-box">
                <a className="header__submenu-name" href="#">Акция Комбо</a>
                <a className="header__submenu-discount" href="#"><img src={DiscountImg} alt="img" /></a>
              </div>

              <div className="header__submenu-box">
                <a className="header__submenu-name" href="#">Курсы диджеинга</a>
                <ul className="header__submenu-list">
                  <li><a href="#">Базовый курс диджеинга</a></li>
                  <li><a href="#">PRO курс диджеинга</a></li>
                  <li><a href="#">Базовый интенсив курс диджеинга</a></li>
                  <li><a href="#">PRO интенсив курс диджеинга</a></li>
                  <li><a href="#">Kids DJ курс</a></li>
                </ul>
              </div>

              <div className="header__submenu-box">
                <a className="header__submenu-name" href="#">Написание музыки</a>
                <ul className="header__submenu-list">
                  <li><a href="#">Базовый курс по написанию музыки</a></li>
                  <li><a href="#">PRO курс по написанию музыки</a></li>
                  <li><a href="#">Базовый интенсив курс по написанию музыки</a></li>
                  <li><a href="#">PRO интенсив курс по написанию музыки</a></li>
                </ul>
              </div>

              <div className="header__submenu-box">
                <a className="header__submenu-name" href="#">Авторские курсы</a>
                <ul className="header__submenu-list">
                  <li><a href="#">Scratch курс от DJ Scream One</a></li>
                  <li><a href="#">Техничный диджеинг от DJ Scream One</a></li>
                </ul>
              </div>

            </div>
          </div>
        </li>

        <li><a href="#">О школе</a></li>

        <li><a href="#">Услуги</a></li>

        <li><a href="#">Контакты</a></li>

      </ul>
    ) 
  }
}
