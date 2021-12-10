import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ImgNews from '../img/news-detail/img-1.jpg'; 

export default class NewsDetailComp extends Component {
  render() {
    return (
      <>
        <div className="newsDetail">

          <div className="link-back"><Link to="/news">Новости и акции</Link></div>

          <div className="newsDetail__cont">
            <h1>Конкурс #20 в Instagram от Pioneer DJ School и Pioneer DJ Shop</h1>
            <div className="newsDetail__cont-img"><img src={ImgNews} alt="img" /></div>
            <p>Конкурс #20 в Instagram от Pioneer DJ School и Pioneer DJ Shop</p>
            <h3>ГЛАВНЫЙ ПРИЗ Конкурса: DJ Наушники HDJ-CUE1BT</h3>
            <p>Победителя выберем генератором случайных чисел 29 августа 2021!</p>
            <p>Участвует вся Россия</p>
            <p>Подведение итогов состоится в формате прямой-трансляции на Дне Открытых Дверей в Московском DJ Центре Pioneer DJ School - в Воскресенье 29 августа 2021 в 20:00 по Москве</p>
            <p>Удачи! Участвуй и Выигрывай!</p>

            <p className="newsDetail__cont-mintext">Пост с конкурсом опубликован в сообществе Pioneer DJ School - <a href="http://www.instagram.com/pioneerdjschoolru">instagram.com/pioneerdjschoolru</a> <br /> Видео с результатом будет опубликовано там же</p>
            <p className="newsDetail__cont-mintext">Магазины, пустые аккаунты, коммерческие странички и странички, созданные специально для конкурсов, не участвуют</p>

            <span className="newsDetail__cont-date">24 августа 2021 года</span>
          </div>

        </div>
      </>
    ) 
  }
}
