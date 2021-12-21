import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import DiscountImg from '../img/news/img-2.jpg';

export default class Header extends Component {

  componentDidMount = () => {
    window.scrollTo(0, 0)
    const body = document.querySelector('body')
    const header = document.querySelector('.header')
    const head = document.querySelector('.head')

    if (body.classList.contains('activeMobileMenu') || body.classList.contains('visibleMobileMenu')) {
      body.classList.remove('activeMobileMenu')
      body.classList.remove('visibleMobileMenu')
    }

    this.openMenu()
    this.switchingMenu()

    if (!head) {
      header.classList.add('active')
    } else {
      this.headerAddClass()
      window.addEventListener('scroll', () => {
        this.headerAddClass()
      })
    } 
  }

  headerAddClass = () => {
    const header = document.querySelector('.header')
    const head = document.querySelector('.head')

    if (!head) return

    if (window.scrollY > 5) {
      header.classList.add('active')
    } else {
      header.classList.remove('active')
    }
  }

  openMenu = () => {
    const body = document.querySelector('body')
    const nav = document.querySelector('.header__navMobile')
    const mobileMenu = document.querySelector('.mobileMenu')
    let setTim = null;
  
    nav.addEventListener('click', () => {
      if (nav.classList.contains('active')) {
        nav.classList.remove('active')
        mobileMenu.classList.remove('visible')
        body.classList.remove('visibleMobileMenu')

        setTim = setTimeout(() => {
          mobileMenu.classList.remove('active')
          body.classList.remove('activeMobileMenu')
        }, 250)
  
      } else {
        clearTimeout(setTim)
        nav.classList.add('active')
        mobileMenu.classList.add('active')
  
        setTimeout(() => {
          mobileMenu.classList.add('visible')
          body.classList.add('activeMobileMenu')
          body.classList.add('visibleMobileMenu')
          window.scrollTo(0, 0);
        }, 1)
      }
    })
  }

  switchingMenu = () => {
    const butt = document.querySelectorAll('.mobileMenu__menu-box > .mobileMenu__menu-title')
    const subbutt = document.querySelectorAll('.mobileMenu__menu-list > li > .mobileMenu__menu-title')
  
    butt.forEach(element => {
      element.addEventListener('click', event => {
        const th = event.target
        const btn = th.parentElement.querySelector('.mobileMenu .button-plus')
        const lst = th.parentElement.querySelector('.mobileMenu__menu-list')

        if (btn.classList.contains('active')) {
          btn.classList.remove('active')
          lst.classList.remove('active')
        } else {
          btn.classList.add('active')
          lst.classList.add('active')
        }
      })
    })
  
    subbutt.forEach(element => {
      element.addEventListener('click', event => {
        const th = event.target
        const btn = th.parentElement.querySelector('.mobileMenu .button-plus')
        const lst = th.parentElement.querySelector('.mobileMenu__menu-list')

        if (btn.classList.contains('active')) {
          btn.classList.remove('active')
          lst.classList.remove('active')
        } else {
          btn.classList.add('active')
          lst.classList.add('active')
        }
      })
    })
  }

  render() {
    return (
      <header className="header">

        <div className="header__block">

          <div className="container">

            <div className="header__cont">

              <div className="header__cont-logo">
                <Link className="header__logo" to="/" />
              </div>

              <div className="header__cont-menu">
              
                <ul className="header__menu">

                  <li>
                    <div className="header__menu-arrow header__menu-border">
                      <a href="#">Курсы</a>
                      <div className="header__submenu header__submenu--full">
                        <div className="header__submenu-block">

                          <div className="header__submenu-box">
                            {Combo()} 
                          </div>

                          <div className="header__submenu-box">
                            <NavLink className="header__submenu-name" to="/course">Курсы диджеинга</NavLink>
                            <div className="header__submenu-list">
                              <ul>
                                <li><NavLink to="/course">Базовый DJ Курс</NavLink></li>
                                <li><NavLink to="/course">PRO DJ Курс</NavLink></li>
                                <li><NavLink to="/course">Kids DJ курс</NavLink><b>для детей</b></li>
                                <li><NavLink to="/course">Интенсив Базовый DJ Курс</NavLink></li>
                                <li><NavLink to="/course">Интенсив PRO DJ Курс</NavLink></li>
                              </ul>
                            </div>
                          </div>

                          <div className="header__submenu-box">
                            <NavLink className="header__submenu-name" to="/course">Написание музыки</NavLink>
                            <div className="header__submenu-list">
                              <ul>
                                <li><NavLink to="/course">Базовый курс по написанию музыки</NavLink></li>
                                <li><NavLink to="/course">PRO курс по написанию музыки</NavLink></li>
                                <li><NavLink to="/course">Интенсив Базовый курс написания музыки</NavLink></li>
                                <li><NavLink to="/course">Интенсив PRO курс написания музыки</NavLink></li>
                              </ul>
                            </div>
                          </div>

                          <div className="header__submenu-box">
                            <NavLink className="header__submenu-name" to="/course">Авторские курсы</NavLink>
                            <div className="header__submenu-list">
                              <ul>
                                <li><NavLink to="/course">Scratch курс от DJ SCREAM ОNE</NavLink></li>
                                <li><NavLink to="/course">Техничный диджеинг курс от DJ SCREAM ОNE</NavLink></li>
                              </ul>
                            </div>
                          </div>

                          <div className="header__submenu-box">
                            <NavLink className="header__submenu-name" to="/course">Онлайн-курсы</NavLink>
                            <div className="header__submenu-list">
                              <ul>
                                <li><NavLink to="/course">Онлайн Базовый курс написания музыки</NavLink></li>
                                <li><NavLink to="/course">Онлайн PRO курс написания музыки</NavLink></li>
                              </ul>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="header__menu-arrow">
                      <a href="#">О школе</a>
                      <div className="header__submenu">
                        <div className="header__submenu-block">

                          <div className="header__submenu-box">
                            {Combo()} 
                          </div>

                          <div className="header__submenu-box">
                            <a className="header__submenu-name" href="#">О нашей школе</a>
                            <div className="header__submenu-list header__submenu-list--double">
                              <ul>
                                <li><a href="#">О школе</a></li>
                                <li><a href="#">Фото школы</a></li>
                                <li><NavLink to="/teachers">Преподаватели</NavLink></li>
                                <li><a href="#">Pioneer DJ Family</a></li>
                              </ul>
                              <ul>
                                <li><NavLink to="/news">Новости и акции</NavLink></li>
                                <li><a href="#">Отзывы</a></li>
                                <li><NavLink to="/contacts">Контакты</NavLink></li>
                              </ul>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="header__menu-arrow">
                      <a href="#">Услуги</a>
                      <div className="header__submenu">
                        <div className="header__submenu-block">

                          <div className="header__submenu-box">
                            {Combo()} 
                          </div>

                          <div className="header__submenu-box">
                            <a className="header__submenu-name" href="#">Дополнительные услуги</a>
                            <div className="header__submenu-list header__submenu-list--double">
                              <ul>
                                <li><a href="#">Подарочный сертификат</a></li>
                                <li><a href="#">Тренинг</a></li>
                                <li><a href="#">Промо-видео</a></li>
                              </ul>
                              <ul>
                                <li><a href="#">Партнерская программа</a></li>
                                <li><a href="#">Фотосессия</a></li>
                              </ul>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </li>

                </ul>

                <a className="header__phone" href="#">+ 7 916  942 5248</a>

                <div className="header__navMobile">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

              </div>

            </div>

          </div>

        </div>  

      </header>
    ) 
  }
}

function Combo() {
  return (
    <>
      <NavLink className="header__submenu-name" to="/combo">Акция Комбо</NavLink>
      <NavLink className="header__submenu-discount" to="/combo"><img src={DiscountImg} alt="img" /></NavLink>
    </>
  )
}
