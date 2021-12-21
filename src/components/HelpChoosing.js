import React, { Component } from 'react';
import InputMask from 'react-input-mask';

export default class HelpChoosing extends Component {
  render() {

    const data = this.props.data
    const inside = this.props.inside

    return (
      <div className={`helpChoosing ${inside ? 'helpChoosing--inside' : ''}`}>
        <div className="container">
          <div className="helpChoosing__cont">

            <div className="helpChoosing__text">
              {data.title && 
                <h2>{data.title}</h2>
              }
              {data.text && 
                <p>{data.text}</p>
              }
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
