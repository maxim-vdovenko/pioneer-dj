import React, { Component } from 'react';
import Title from './Title';

export default class StepsChange extends Component {
  render() {
    return (
      <div className="stepsChange">

        <Title
          value={[
            ['dark', '4 шага'],
            ['red', 'к переменам в жизни']
          ]}
        />

        <div className="container">
          <div className="stepsChange__cont">

            <div className="stepsChange__item">
              <div className="stepsChange__box">
                <span className="stepsChange__box-numbering">1</span>
                <span className="stepsChange__box-value">Получаете только практические знания и навыки</span>
                <div className="stepsChange__box-text">
                  <p>Только практические уроки один-на-один с преподавателем с методическими материалами, которые остаются у вас</p>
                </div>
              </div>
            </div>

            <div className="stepsChange__item">
              <div className="stepsChange__box">
                <span className="stepsChange__box-numbering">2</span>
                <span className="stepsChange__box-value">Практикуетесь сколько нужно на оборудовании в школе</span>
                <div className="stepsChange__box-text">
                  <p>На всем оборудовании DJ Центра безлимитно и бесплатно, записываться не нужно, просто приходите, когда удобно</p>
                </div>
              </div>
            </div>

            <div className="stepsChange__item">
              <div className="stepsChange__box">
                <span className="stepsChange__box-numbering">3</span>
                <span className="stepsChange__box-value">Защищаете свою экзаменационную работу</span>
                <div className="stepsChange__box-text">
                  <p>К концу обучения создадите свой микс, мы снимем выступление на видео и отправим на аттестацию в Pioneer DJ в Лондон</p>
                </div>
              </div>
            </div>

            <div className="stepsChange__item">
              <div className="stepsChange__box">
                <span className="stepsChange__box-numbering">4</span>
                <span className="stepsChange__box-value">Вступаете в систему продвижения Pioneer DJ Family</span>
                <div className="stepsChange__box-text">
                  <p>Продвижение в проф. соц.сетях, закрытые мастер-классы, организация выступлений (в том числе оплачиваемых)</p>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    ) 
  }
}
