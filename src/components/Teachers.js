import React, { Component } from 'react';
import Title from './Title';
import Img1 from '../img/teachers/img-1.jpg'; 
import Img2 from '../img/teachers/img-2.jpg'; 
import Img3 from '../img/teachers/img-3.jpg'; 
import Img4 from '../img/teachers/img-4.jpg'; 

export default class Teachers extends Component {
  render() {
    return(
      <div className="teachers">

        <Title
          value={[
            ['red', 'Наши преподаватели'],
            ['dark', '— практикущие диджеи']
          ]}
          valueLink={'Все преподаватели'}
          link={'#'}
        />

        <div className="container">

          <div className="teachers__cont">

            <div className="teachers__item">
              <div className="teachers__box">
                <div className="teachers__box-img"><img src={Img1} alt="img" /></div>
                <div className="teachers__box-cont">
                  <span className="teachers__box-name">Ванчугов Андрей</span>
                  <div className="teachers__box-text">
                    <p>Курс предназначен для тех, кто хочет стать DJ и не обладает навыками игры на DJ оборудовании или навыки явно недостаточны для начала выступлений в ночных заведениях</p>
                  </div>
                  <a className="teachers__box-more" href="#">Подробнее</a>
                </div>
              </div>
            </div>

            <div className="teachers__item">
              <div className="teachers__box">
                <div className="teachers__box-img"><img src={Img2} alt="img" /></div>
                <div className="teachers__box-cont">
                  <span className="teachers__box-name">Ванчугов Андрей</span>
                  <div className="teachers__box-text">
                    <p>Курс предназначен для тех, кто хочет стать DJ и не обладает навыками игры на DJ оборудовании или навыки явно недостаточны для начала выступлений в ночных заведениях</p>
                  </div>
                  <a className="teachers__box-more" href="#">Подробнее</a>
                </div>
              </div>
            </div>

            <div className="teachers__item">
              <div className="teachers__box">
                <div className="teachers__box-img"><img src={Img3} alt="img" /></div>
                <div className="teachers__box-cont">
                  <span className="teachers__box-name">Ванчугов Андрей</span>
                  <div className="teachers__box-text">
                    <p>Курс предназначен для тех, кто хочет стать DJ и не обладает навыками игры на DJ оборудовании или навыки явно недостаточны для начала выступлений в ночных заведениях</p>
                  </div>
                  <a className="teachers__box-more" href="#">Подробнее</a>
                </div>
              </div>
            </div>

            <div className="teachers__item">
              <div className="teachers__box">
                <div className="teachers__box-img"><img src={Img4} alt="img" /></div>
                <div className="teachers__box-cont">
                  <span className="teachers__box-name">Ванчугов Андрей</span>
                  <div className="teachers__box-text">
                    <p>Курс предназначен для тех, кто хочет стать DJ и не обладает навыками игры на DJ оборудовании или навыки явно недостаточны для начала выступлений в ночных заведениях</p>
                  </div>
                  <a className="teachers__box-more" href="#">Подробнее</a>
                </div>
              </div>
            </div>

          </div>

          <div className="titleLink"><a href="#">Все преподаватели</a></div>

        </div>
       
      </div>
    ) 
  }
}
