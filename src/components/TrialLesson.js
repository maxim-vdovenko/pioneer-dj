import React, { Component } from 'react';

export default class TrialLesson extends Component {
  render() {
    return (
      <div className="trialLesson">
        <div className="container">
          <div className="trialLesson__cont">
            <div className="trialLesson__text">
              <h2>Запишитесь на бесплатный пробный урок</h2>
              <p>С удовольствием покажем вам нашу школу, угостим вкусным кофе, проведем консультацию и ответим на любые вопросы о диджеинге и других наших курсах</p>
            </div>
            <a className="button" href="#">Записаться</a>
          </div>
        </div>
      </div>
    ) 
  }
}
