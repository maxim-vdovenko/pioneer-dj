import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Title from './Title';
import Img1 from '../img/teachers-main/img-1.jpg'; 
import Img2 from '../img/teachers-main/img-2.jpg'; 
import Img3 from '../img/teachers-main/img-3.jpg'; 
import Img4 from '../img/teachers-main/img-4.jpg'; 

export default class TeachersMain extends Component {
  render() {
    return(
      <div className="teachersMain">

        <Title
          value={[
            ['red', 'Наши преподаватели'],
            ['dark', '— практикущие диджеи']
          ]}
          valueLink={'Все преподаватели'}
          link={'/teachers'}
        />

        <div className="container">

          <div className="teachersMain__cont">

            <div className="teachersMain__item">
              <div className="teachersMain__box">
                <div className="teachersMain__box-img"><NavLink to="/teachers/detail"><img src={Img1} alt="img" /></NavLink></div>
                <div className="teachersMain__box-cont">
                  <span className="teachersMain__box-name">MOON SUN</span>
                  <span className="teachersMain__box-subname">Дмитрий Лунев</span>
                  <div className="teachersMain__box-text">
                    <p>Преподаватель Базового и PRO Курсов Написания Музыки и Базового и PRO DJ Курсов</p>
                  </div>
                  <NavLink className="teachersMain__box-more" to="/teachers/detail">Подробнее</NavLink>
                </div>
              </div>
            </div>

            <div className="teachersMain__item">
              <div className="teachersMain__box">
                <div className="teachersMain__box-img"><NavLink to="/teachers/detail"><img src={Img2} alt="img" /></NavLink></div>
                <div className="teachersMain__box-cont">
                  <span className="teachersMain__box-name">DJ MIRONOV</span>
                  <span className="teachersMain__box-subname">Александр Миронов</span>
                  <div className="teachersMain__box-text">
                    <p>Преподаватель Базового и PRO DJ Курсов</p>
                  </div>
                  <NavLink className="teachersMain__box-more" to="/teachers/detail">Подробнее</NavLink>
                </div>
              </div>
            </div>

            <div className="teachersMain__item">
              <div className="teachersMain__box">
                <div className="teachersMain__box-img"><NavLink to="/teachers/detail"><img src={Img3} alt="img" /></NavLink></div>
                <div className="teachersMain__box-cont">
                  <span className="teachersMain__box-name">SLY</span>
                  <span className="teachersMain__box-subname">Кирилл Рябов</span>
                  <div className="teachersMain__box-text">
                    <p>Преподаватель Базового DJ Курса</p>
                  </div>
                  <NavLink className="teachersMain__box-more" to="/teachers/detail">Подробнее</NavLink>
                </div>
              </div>
            </div>

            <div className="teachersMain__item">
              <div className="teachersMain__box">
                <div className="teachersMain__box-img"><NavLink to="/teachers/detail"><img src={Img4} alt="img" /></NavLink></div>
                <div className="teachersMain__box-cont">
                  <span className="teachersMain__box-name">DJ BANG</span>
                  <span className="teachersMain__box-subname">Константин Усольцев</span>
                  <div className="teachersMain__box-text">
                    <p>Преподаватель Базового и PRO DJ Курсов</p>
                  </div>
                  <NavLink className="teachersMain__box-more" to="/teachers/detail">Подробнее</NavLink>
                </div>
              </div>
            </div>

          </div>

          <div className="titleLink"><NavLink to="/teachers">Все преподаватели</NavLink></div>

        </div>
       
      </div>
    ) 
  }
}
