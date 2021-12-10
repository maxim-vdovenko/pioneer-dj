import React, { Component } from 'react';
import Img1 from '../img/сount-combo/img-1.png'; 

export default class SelectFull extends Component {
  render() {
    return (
      <div className="select-full">

        <div className="select-full__title">
          <div className="select-full__box">
            <img className="select-full__img" src={Img1} alt="img" />
          </div>
          <div className="select-full__box">
            <span className="select-full__name">Базовый Курс Написания Музыки</span>
            <span className="select-full__price">48 000 ₽</span>
          </div>
        </div>

        <div className="select-full__list">
          <ul className="select-full__list-cont">

            <li>
              <div className="select-full__box">
                <img className="select-full__img" src={Img1} alt="img" />
              </div>
              <div className="select-full__box">
                <span className="select-full__name">Базовый Курс Написания Музыки</span>
                <span className="select-full__price">48 000 ₽</span>
              </div>
            </li>

            <li className="active">
              <div className="select-full__box">
                <img className="select-full__img" src={Img1} alt="img" />
              </div>
              <div className="select-full__box">
                <span className="select-full__name">Pro Курс Написания Музыки</span>
                <span className="select-full__price">26 400 ₽</span>
              </div>
            </li>

            <li>
              <div className="select-full__box">
                <img className="select-full__img" src={Img1} alt="img" />
              </div>
              <div className="select-full__box">
                <span className="select-full__name">Курс Написания Музыки</span>
                <span className="select-full__price">33 000 ₽</span>
              </div>
            </li>

            <li>
              <div className="select-full__box">
                <img className="select-full__img" src={Img1} alt="img" />
              </div>
              <div className="select-full__box">
                <span className="select-full__name">Pro Курс Написания Музыки</span>
                <span className="select-full__price">26 400 ₽</span>
              </div>
            </li>

          </ul>
        </div>

      </div>
    ) 
  }
}
