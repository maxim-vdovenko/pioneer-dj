import React, { Component } from 'react';
import Title from './Title';

export default class PopularCourses extends Component {
  render() {
    return (
      <div className="popularCourses">

        <Title
          value={[
            ['dark', 'Наши'],
            ['red', 'популярные курсы']
          ]}
          valueLink={'Все курсы'}
          link={'#'}
        />

        <div className="container">

          <div className="popularCourses__cont">

            <div className="popularCourses__item">
              <div className="popularCourses__box">
                <span className="popularCourses__box-title">Базовый курс диджеинга от Pioneer DJ</span>
                <div className="popularCourses__box-text">
                  <p>Узнаете стандарты сведения, сможете делать звук атмосферным и чистым. Освоите навыки игры на DJ оборудовании, необходимые для начала выступлений в ночных заведениях, и начнёте зарабатывать на любимом деле.</p>
                </div>
                <ul className="popularCourses__box-list">
                  <li><b>14 занятий</b><span>по 2 часа каждое</span></li>
                  <li><b>2-4 месяца</b><span>по 1-3 занятия в неделю</span></li>
                  <li><b>Тет-а-тет</b><span>формат обучения</span></li>
                  <li><b>∞ практика</b><span>на оборудовании школы</span></li>
                </ul>
                <div className="popularCourses__box-foot">
                  <a className="popularCourses__box-more" href="#">Подробнее</a>
                  <a className="popularCourses__box-video popularCourses__box-video--dark" href="#">Видео о курсе</a>
                </div>
              </div>
            </div>

            <div className="popularCourses__item">
              <div className="popularCourses__box">
                <span className="popularCourses__box-title">Базовый курс по написанию музыки</span>
                <div className="popularCourses__box-text">
                  <p>Освоите музыкальную теорию, научитесь работать в Ableton Live, создавать треки в разных жанрах и профессионально их обрабатывать. Сможете писать музыку для себя или начать творческую карьеру.</p>
                </div>
                <ul className="popularCourses__box-list">
                  <li><b>14 занятий</b><span>по 2 часа каждое</span></li>
                  <li><b>2-4 месяца</b><span>по 1-3 занятия в неделю</span></li>
                  <li><b>Тет-а-тет</b><span>формат обучения</span></li>
                  <li><b>∞ практика</b><span>на оборудовании школы</span></li>
                </ul>
                <div className="popularCourses__box-foot">
                  <a className="popularCourses__box-more" href="#">Подробнее</a>
                  <a className="popularCourses__box-video" href="#">Видео о курсе</a>
                </div>
              </div>
            </div>

            <div className="popularCourses__item">
              <div className="popularCourses__box">
                <span className="popularCourses__box-title">Авторский Scratch-курс от DJ Scream One</span>
                <div className="popularCourses__box-text">
                  <p>Освоите высший пилотаж диджеинга - технику Scratch, поднимите свои навыки до максимума!</p>
                </div>
                <ul className="popularCourses__box-list">
                  <li><b>14 занятий</b><span>по 2 часа каждое</span></li>
                  <li><b>2-4 месяца</b><span>по 1-3 занятия в неделю</span></li>
                  <li><b>Тет-а-тет</b><span>формат обучения</span></li>
                  <li><b>∞ практика</b><span>на оборудовании школы</span></li>
                </ul>
                <div className="popularCourses__box-foot">
                  <a className="popularCourses__box-more" href="#">Подробнее</a>
                  <a className="popularCourses__box-video" href="#">Видео о курсе</a>
                </div>
              </div>
            </div>

          </div>

          <div className="titleLink"><a href="#">Все курсы</a></div>

        </div>
       
      </div>
    ) 
  }
}
