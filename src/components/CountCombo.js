import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import Select from 'react-select'

export default class CountCombo extends Component {
  render() {

    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]

    const customStyles = {
      control: () => ({
        height: 60
      }),
    }

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

                <div className="">
                  {/* <Select className="select-full" options={options} /> */}
                  <Select
                    className="select-full"
                    styles={customStyles}
                    options={options}
                  />
                </div>

              </div>

              <div className="сountCombo__form-box">
                
                <div className="">

                </div>

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
