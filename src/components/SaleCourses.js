import React, { Component } from 'react';
import Title from './Title';
import Img1 from '../img/popular-courses/img-1.png'; 
import Img2 from '../img/popular-courses/img-2.png'; 
import Img3 from '../img/popular-courses/img-3.png'; 

export default class SaleCourses extends Component {
  render() {
    return (
      <div className="popularCourses popularCourses--column">

        <Title
          value={[
            ['dark', 'Курсы, на которые действует'],
            ['red', 'акция']
          ]}
        />

        <div className="container">

          <div className="popularCourses__cont">

            <div className="popularCourses__item">
              <div className="popularCourses__box">

                <div className="popularCourses__box-top">
                  <div className="popularCourses__box-top-cont">
                    <span className="popularCourses__box-title">Базовый DJ Курс</span>
                    <div className="popularCourses__box-text">
                      <p>начинающему диджею</p>
                    </div>
                  </div>
                  <div className="popularCourses__box-top-cont">
                    <img className="popularCourses__box-img" src={Img1} alt="img" />
                  </div>
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

                <div className="popularCourses__box-top">
                  <div className="popularCourses__box-top-cont">
                    <span className="popularCourses__box-title">PRO DJ Курс</span>
                    <div className="popularCourses__box-text">
                      <p>продвинутому диджею</p>
                    </div>
                  </div>
                  <div className="popularCourses__box-top-cont">
                    <img className="popularCourses__box-img" src={Img2} alt="img" />
                  </div>
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
               
                <div className="popularCourses__box-top">
                  <div className="popularCourses__box-top-cont">
                    <span className="popularCourses__box-title">Базовый Курс Написания Музыки</span>
                    <div className="popularCourses__box-text">
                      <p>диджею, музыканту</p>
                    </div>
                  </div>
                  <div className="popularCourses__box-top-cont">
                    <img className="popularCourses__box-img" src={Img3} alt="img" />
                  </div>
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

                <div className="popularCourses__box-top">
                  <div className="popularCourses__box-top-cont">
                    <span className="popularCourses__box-title">Базовый DJ Курс</span>
                    <div className="popularCourses__box-text">
                      <p>начинающему диджею</p>
                    </div>
                  </div>
                  <div className="popularCourses__box-top-cont">
                    <img className="popularCourses__box-img" src={Img1} alt="img" />
                  </div>
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

                <div className="popularCourses__box-top">
                  <div className="popularCourses__box-top-cont">
                    <span className="popularCourses__box-title">PRO DJ Курс</span>
                    <div className="popularCourses__box-text">
                      <p>продвинутому диджею</p>
                    </div>
                  </div>
                  <div className="popularCourses__box-top-cont">
                    <img className="popularCourses__box-img" src={Img2} alt="img" />
                  </div>
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
               
                <div className="popularCourses__box-top">
                  <div className="popularCourses__box-top-cont">
                    <span className="popularCourses__box-title">Базовый Курс Написания Музыки</span>
                    <div className="popularCourses__box-text">
                      <p>диджею, музыканту</p>
                    </div>
                  </div>
                  <div className="popularCourses__box-top-cont">
                    <img className="popularCourses__box-img" src={Img3} alt="img" />
                  </div>
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

          <div className="titleShowMore titleShowMore--mobile">
            <span className="titleShowMore__butt">Показать еще <b>3</b> курса</span>
          </div>

        </div>
       
      </div>
    ) 
  }
}
