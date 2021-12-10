import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Title from './Title';
import Img1 from '../img/teachers-comp/img-1.jpg'; 
import Img2 from '../img/teachers-comp/img-2.jpg'; 
import Img3 from '../img/teachers-comp/img-3.jpg'; 
import Img4 from '../img/teachers-comp/img-4.jpg'; 

export default class TeachersComp extends Component {
  render() {

    const detailLink = '/teachers/detail'

    return (
      <div className="teachers">

        <Title
          value={[
            ['dark', 'Наши'],
            ['red', 'преподаватели']
          ]}
        />

        <div className="teachers__cont">

          <div className="teachers__item">
            <div className="teachers__box">
              <div className="teachers__box-img"><NavLink to={detailLink}><img src={Img1} alt="img" /></NavLink></div>
              <div className="teachers__box-cont">
                <h2>MOON SUN</h2>
                <h3>Дмитрий Лунев</h3>
                <p>Базовый и PRO Курсы Написания Музыки, Базовый и PRO DJ Курсы</p>
                <NavLink className="teachers__box-more" to={detailLink}>Подробнее</NavLink>
              </div>
            </div>
          </div>

          <div className="teachers__item">
            <div className="teachers__box">
            <div className="teachers__box-img"><NavLink to={detailLink}><img src={Img2} alt="img" /></NavLink></div>
              <div className="teachers__box-cont">
                <h2>DJ MIRONOV</h2>
                <h3>Александр Миронов</h3>
                <p>Базовый DJ Курс и PRO DJ Курс</p>
                <NavLink className="teachers__box-more" to={detailLink}>Подробнее</NavLink>
              </div>
            </div>
          </div>

          <div className="teachers__item">
            <div className="teachers__box">
              <div className="teachers__box-img"><NavLink to={detailLink}><img src={Img3} alt="img" /></NavLink></div>
              <div className="teachers__box-cont">
                <h2>SLY</h2>
                <h3>Кирилл Рябов</h3>
                <p>Базовый DJ Курс</p>
                <NavLink className="teachers__box-more" to={detailLink}>Подробнее</NavLink>
              </div>
            </div>
          </div>

          <div className="teachers__item">
            <div className="teachers__box">
            <div className="teachers__box-img"><NavLink to={detailLink}><img src={Img4} alt="img" /></NavLink></div>
              <div className="teachers__box-cont">
                <h2>DJ BANG</h2>
                <h3>Константин Усольцев</h3>
                <p>Базовый DJ Курс и PRO DJ Курс</p>
                <NavLink className="teachers__box-more" to={detailLink}>Подробнее</NavLink>
              </div>
            </div>
          </div>

          <div className="teachers__item">
            <div className="teachers__box">
              <div className="teachers__box-img"><NavLink to={detailLink}><img src={Img3} alt="img" /></NavLink></div>
              <div className="teachers__box-cont">
                <h2>DJ CVET</h2>
                <h3>Алексей Сотников</h3>
                <p>Базовый DJ Курс</p>
                <NavLink className="teachers__box-more" to={detailLink}>Подробнее</NavLink>
              </div>
            </div>
          </div>

          <div className="teachers__item">
            <div className="teachers__box">
            <div className="teachers__box-img"><NavLink to={detailLink}><img src={Img4} alt="img" /></NavLink></div>
              <div className="teachers__box-cont">
                <h2>DJ BANG</h2>
                <h3>Ванчугов Андрей</h3>
                <p>Базовый и PRO DJ Курсы</p>
                <NavLink className="teachers__box-more" to={detailLink}>Подробнее</NavLink>
              </div>
            </div>
          </div>

        </div>
       
      </div>
    ) 
  }
}
