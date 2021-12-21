import React, { Component } from 'react';
import InputMask from 'react-input-mask';

export default class EnrollCourse extends Component {
  render() {
    const data = this.props.data
    const title = data.title
    const price = data.price
    const text = data.text
    const textMap = text ? text.map((item, index) => <li key={index}>{item}</li> ) : ''
    const info = data.info

    return (
      <div className='enrollCourse'>
        <div className="container">
          <div className="enrollCourse__cont">

            <div className="enrollCourse__text">
              {title && 
                <h2>{title}</h2>
              }
              {price && 
                <span className="enrollCourse__price">{price}</span>
              }
              {text && 
                <ul className="enrollCourse__textList">
                  {textMap}
                </ul>
              }
            </div>

            <form className="enrollCourse__form">
              {info &&
               <span className="enrollCourse__form-info">{info}</span>
              }

              <div className="inputBox"><input className="inputBox__cont" type="text" placeholder="Ваше имя" /></div>
              
              <div className="inputBox">
                {<InputMask className="inputBox__cont" type="text" placeholder="Ваше телефон" mask="+7(999)999-9999" maskChar="_" pattern="[0-9]*" inputMode="numeric" />}
              </div>

              <button class="button">Отправить</button>
            </form>

          </div>
        </div>
      </div>
    ) 
  }
}
