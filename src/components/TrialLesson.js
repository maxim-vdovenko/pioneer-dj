import React, { Component } from 'react';

export default class TrialLesson extends Component {
  render() {
    return (
      <div className="trialLesson">
        <div className="container">
          <div className="trialLesson__cont">
            <div className="trialLesson__text">
              <h2>Оставь заявку на бесплатный пробный урок</h2>
              <p>Подробно ознакомишься с нюансами обучения. Познакомишься со школой, пообщаешься с нашими преподавателям. Ответим на любые вопросы о диджеинге.</p>
            </div>
            <a className="button" href="#">Оставить заявку</a>
          </div>
        </div>
      </div>
    ) 
  }
}
