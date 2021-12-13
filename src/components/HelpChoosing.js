import React, { Component } from 'react';
import InputMask from 'react-input-mask';

export default class HelpChoosing extends Component {
  render() {
    const inside = this.props.inside
    return (
      <div className={`${inside ? 'helpChoosing helpChoosing--inside' : 'helpChoosing'}`}>
        <div className="container">
          <div className="helpChoosing__cont">

            <div className="helpChoosing__text">
              <h2>Поможем в выборе преподавателя и курса</h2>
              <p>Остались вопросы? Не знаете, что выбрать? Оставьте свой номер, мы позвоним и ответим на все ваши вопросы</p>
            </div>

            <form className="helpChoosing__form">

              <div className="inputBox"><input className="inputBox__cont" type="text" placeholder="Ваше имя" /></div>
              
              <div className="inputBox">
                {<InputMask className="inputBox__cont" type="text" placeholder="Ваше телефон" mask="+7(999)999-9999" maskChar="_" pattern="[0-9]*" inputMode="numeric" />}
              </div>
            
              <button className="button">Отправить</button>

            </form>

          </div>
        </div>
      </div>
    ) 
  }
}
