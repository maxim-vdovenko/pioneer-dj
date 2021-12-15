import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import DiscountImg from '../img/news/img-2.jpg'; 

export default class MobileMenu extends Component {
  render() {
    return (
      <div className="mobileMenu">

        <div className="mobileMenu__cont">

          <div className="mobileMenu__menu">

            <div className="mobileMenu__menu-discount">
              <Link className="mobileMenu__menu-discount-img" to="/combo"><img src={DiscountImg} alt="img" /></Link>
              <Link className="mobileMenu__menu-discount-val" to="/combo">Акция Комбо</Link>
            </div>

            <div className="mobileMenu__menu-box">

              <span className="mobileMenu__menu-title">Курсы</span>
              <div className="mobileMenu__menu-butt"></div>

              <ul className="mobileMenu__menu-list">

                <li>
                  <span className="mobileMenu__menu-title">Курсы диджеинга</span>
                  <div className="mobileMenu__menu-butt"></div>

                  <ul className="mobileMenu__menu-list">
                    <li><a href="#">Базовый DJ Курс</a></li>
                    <li><a href="#">PRO DJ Курс</a></li>
                    <li><a href="#">Kids DJ курс</a><b>для детей</b></li>
                    <li><a href="#">Интенсив Базовый DJ Курс</a></li>
                    <li><a href="#">Интенсив PRO DJ Курс</a></li>
                  </ul>
                </li>

                <li>
                  <span className="mobileMenu__menu-title">Написание музыки</span>
                  <div className="mobileMenu__menu-butt"></div>

                  <ul className="mobileMenu__menu-list">
                    <li><a href="#">Базовый курс по написанию музыки</a></li>
                    <li><a href="#">PRO курс по написанию музыки</a></li>
                    <li><a href="#">Интенсив Базовый курс написания музыки</a></li>
                    <li><a href="#">Интенсив PRO курс написания музыки</a></li>
                  </ul>
                </li>

                <li>
                  <span className="mobileMenu__menu-title">Авторские курсы</span>
                  <div className="mobileMenu__menu-butt"></div>

                  <ul className="mobileMenu__menu-list">
                    <li><a href="#">Scratch курс от DJ SCREAM ОNE</a></li>
                    <li><a href="#">Техничный диджеинг курс от DJ SCREAM ОNE</a></li>
                  </ul>
                </li>

                <li>
                  <span className="mobileMenu__menu-title">Онлайн-курсы</span>
                  <div className="mobileMenu__menu-butt"></div>

                  <ul className="mobileMenu__menu-list">
                    <li><a href="#">Онлайн Базовый курс написания музыки</a></li>
                    <li><a href="#">Онлайн PRO курс написания музыки</a></li>
                  </ul>
                </li>

              </ul>
              
            </div>

            <div className="mobileMenu__menu-box">
              <span className="mobileMenu__menu-title">О школе</span>
              <div className="mobileMenu__menu-butt"></div>

              <ul className="mobileMenu__menu-list">
                <li><a href="#">О школе</a></li>
                <li><a href="#">Фото школы</a></li>
                <li><Link to="/teachers">Преподаватели</Link></li>
                <li><a href="#">Pioneer DJ Family</a></li>
                <li><Link to="/news">Новости и акции</Link></li>
                <li><a href="#">Отзывы</a></li>
                <li><Link to="/contacts">Контакты</Link></li>
              </ul>
            </div>

            <div className="mobileMenu__menu-box">
              <span className="mobileMenu__menu-title">Услуги</span>
              <div className="mobileMenu__menu-butt"></div>

              <ul className="mobileMenu__menu-list">
                <li><a href="#">Подарочный сертификат</a></li>
                <li><a href="#">Тренинг</a></li>
                <li><a href="#">Промо-видео</a></li>
                <li><a href="#">Партнерская программа</a></li>
                <li><a href="#">Фотосессия</a></li>
              </ul>
            </div>

            <div className="mobileMenu__menu-box">
              <a className="mobileMenu__menu-title" href="#">Как добраться?</a>
            </div>

            <div className="mobileMenu__menu-box">
              <a className="mobileMenu__menu-title" href="tel:+ 7 916  942 5248">+ 7 916  942 5248</a>
            </div>

          </div>

        </div>
      </div>
    ) 
  }
}
