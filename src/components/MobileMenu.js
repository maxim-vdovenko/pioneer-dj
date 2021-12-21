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
              <NavLink className="mobileMenu__menu-discount-img" to="/combo"><img src={DiscountImg} alt="img" /></NavLink>
              <NavLink className="mobileMenu__menu-discount-val" to="/combo">Акция Комбо</NavLink>
            </div>

            <div className="mobileMenu__menu-box">

              <span className="mobileMenu__menu-title">Курсы</span>
              <div className="button-plus"></div>

              <ul className="mobileMenu__menu-list">

                <li>
                  <span className="mobileMenu__menu-title">Курсы диджеинга</span>
                  <div className="button-plus button-plus--empty"></div>

                  <ul className="mobileMenu__menu-list">
                    <li><NavLink to="/course">Базовый DJ Курс</NavLink></li>
                    <li><NavLink to="/course">PRO DJ Курс</NavLink></li>
                    <li><NavLink to="/course">Kids DJ курс</NavLink><b>для детей</b></li>
                    <li><NavLink to="/course">Интенсив Базовый DJ Курс</NavLink></li>
                    <li><NavLink to="/course">Интенсив PRO DJ Курс</NavLink></li>
                  </ul>
                </li>

                <li>
                  <span className="mobileMenu__menu-title">Написание музыки</span>
                  <div className="button-plus button-plus--empty"></div>

                  <ul className="mobileMenu__menu-list">
                    <li><a href="#">Базовый курс по написанию музыки</a></li>
                    <li><a href="#">PRO курс по написанию музыки</a></li>
                    <li><a href="#">Интенсив Базовый курс написания музыки</a></li>
                    <li><a href="#">Интенсив PRO курс написания музыки</a></li>
                  </ul>
                </li>

                <li>
                  <span className="mobileMenu__menu-title">Авторские курсы</span>
                  <div className="button-plus button-plus--empty"></div>

                  <ul className="mobileMenu__menu-list">
                    <li><a href="#">Scratch курс от DJ SCREAM ОNE</a></li>
                    <li><a href="#">Техничный диджеинг курс от DJ SCREAM ОNE</a></li>
                  </ul>
                </li>

                <li>
                  <span className="mobileMenu__menu-title">Онлайн-курсы</span>
                  <div className="button-plus button-plus--empty"></div>

                  <ul className="mobileMenu__menu-list">
                    <li><a href="#">Онлайн Базовый курс написания музыки</a></li>
                    <li><a href="#">Онлайн PRO курс написания музыки</a></li>
                  </ul>
                </li>

              </ul>
              
            </div>

            <div className="mobileMenu__menu-box">
              <span className="mobileMenu__menu-title">О школе</span>
              <div className="button-plus"></div>

              <ul className="mobileMenu__menu-list">
                <li><a href="#">О школе</a></li>
                <li><a href="#">Фото школы</a></li>
                <li><NavLink to="/teachers">Преподаватели</NavLink></li>
                <li><a href="#">Pioneer DJ Family</a></li>
                <li><NavLink to="/news">Новости и акции</NavLink></li>
                <li><a href="#">Отзывы</a></li>
                <li><NavLink to="/contacts">Контакты</NavLink></li>
              </ul>
            </div>

            <div className="mobileMenu__menu-box">
              <span className="mobileMenu__menu-title">Услуги</span>
              <div className="button-plus"></div>

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
