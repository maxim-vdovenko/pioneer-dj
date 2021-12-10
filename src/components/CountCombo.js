import React, { Component } from 'react';

import InputMask from 'react-input-mask';
import SelectFull from './SelectFull';

import SelectImg1 from '../img/сount-combo/img-1.png'; 
import SelectImg2 from '../img/сount-combo/img-2.png'; 

export default class CountCombo extends Component {
  render() {

    const SelectData = [
      {
        img: SelectImg1,
        name: 'Базовый Курс Написания Музыки',
        price: '49 900 ₽'
      },
      {
        img: SelectImg1,
        name: 'Курс Написания Музыки',
        price: '36 300 ₽'
      },
      {
        img: SelectImg1,
        name: 'Pro Курс Написания Музыки',
        price: '65 000 ₽'
      },
      {
        img: SelectImg2,
        name: 'Курс Музыки',
        price: '18 000 ₽'
      },
      {
        img: SelectImg1,
        name: 'Базовый Курс',
        price: '9 999 ₽'
      }
    ]
    
    return (
      <div className="сountCombo">
        <div className="container">
          <div className="сountCombo__cont">

            <div className="сountCombo__text">
              <h2>Посчитай свое комбо</h2>
              <p>Выбери два курса и получи <span>скидку</span></p>
            </div>

            <div className="сountCombo__form">

              <div className="сountCombo__form-box">
                <SelectFull data={SelectData} />
                <div className="сountCombo__form-plus"></div>
              </div>

              <div className="сountCombo__form-box">
                <SelectFull data={SelectData} />
              </div>

              <div className="сountCombo__form-box">

                <div className="сountCombo__price">
                  <span className="сountCombo__price-title">Итого</span>
                  <span className="сountCombo__price-value">72 000 ₽</span>
                </div>

                <div className="сountCombo__oldprice">
                  <span className="сountCombo__oldprice-title">Старая цена</span>
                  <span className="сountCombo__oldprice-value">90 000 ₽</span>
                </div>

                <div className="сountCombo__saving">
                  <span className="сountCombo__saving-title">Экономия</span>
                  <span className="сountCombo__saving-value">18 000 ₽</span>
                </div>

              </div>

              <div className="сountCombo__form-box">

                <div className="inputBox"><input className="inputBox__cont" type="text" placeholder="Фамилия и имя" /></div>
                <div className="inputBox">
                  {<InputMask className="inputBox__cont" type="text" placeholder="Ваше телефон" mask="+7(999)999-9999" maskChar="_" pattern="[0-9]*" inputMode="numeric" />}
                </div>
                <button className="button">Зарезервировать цену</button>

              </div>        

            </div>

          </div>
        </div>
      </div>
    ) 
  }
}
