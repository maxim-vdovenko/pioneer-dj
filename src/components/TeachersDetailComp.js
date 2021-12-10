import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { SocialNetworks } from './Elements';
import ImgDetail from '../img/teachers-comp/detail-1.jpg'; 
import SliderImages from '../components/SliderImages';

import SliderImg1 from '../img/our-school/img-1.jpg'; 
import SliderImg2 from '../img/our-school/img-2.jpg'; 
import SliderImg3 from '../img/our-school/img-3.jpg'; 

export default class TeachersDetailComp extends Component {
  render() {

    const sliderImagesData = {
      box: [
        {src: SliderImg1},
        {src: SliderImg2},
        {src: SliderImg3},
        {src: SliderImg2},
        {src: SliderImg1},
        {src: SliderImg3},
        {src: SliderImg2}
      ]
    }

    return (
      <div className="teachersDetail">

        <div className="link-back"><Link to="/teachers">Преподаватели</Link></div>
    
        <div className="teachersDetail__block">
          <div className="teachersDetail__block-img"><img src={ImgDetail} alt="img" /></div>
          <div className="teachersDetail__block-cont">

            <div className="teachersDetail__block-text">
              <h1>MOON SUN</h1>
              <h2>Дмитрий Лунев</h2>
              <p>Профессиональный музыкант и мультиформатный диджей</p>
              <p>Преподаватель курсов:</p>
              <ul>
                <li>Базовый Курс Написания Музыки</li>
                <li>PRO Курс Написания Музыки</li>
                <li>Базового DJ Курс</li>
                <li>PRO DJ Курс</li>
              </ul>
            </div>

            <SocialNetworks />
          </div>
        </div>

        <div className="text-block">
          <p>Начав путь артиста в 2009 году, он выработал особый подход в работе с аудиторией. Каждое его выступление - это запоминающийся фейерверк из идеально подобранных сетов с авторской подачей материала.</p>
          <p>Все это подтверждается выступлениями на крупнейших ивентах России (Alfa Future People, Bonfire, RUNA), гастролями по множеству городов нашей страны.</p>
          <p>Дмитрий является неоднократным гостем на самых известных радиостанциях, таких как РАДИО RECORD и DFM.</p>
          <p>Также он выступает в роли организатора вечеринок Contrast и осуществлял букинг известных зарубежных артистов в Москву (MNNR, Honey & Badger)</p>
        </div>

        <div className="teachersDetail__slider">
          <SliderImages data={sliderImagesData} />
        </div>

        <div className="text-block">
          <p>Треки за авторством Дмитрия являются серьезным инструментом для продвижения вперед. Его главный хит «Feeling Something» набрал более миллиона прослушиваний по всему миру! А композиция «Moneymaker» вышла на лейбле звездного Fedde Le Grand</p>
          <p>Он не раз попадал в крупные плейлисты стриминговых сервисов и работал с такими крупными брендами, как Adidas</p>
          <p>На данный момент активно ведет и развивает три разноплановых проекта:</p>
          <ul>
            <li>Moon-Sun (House)</li>
            <li>Roklum (Techno)</li>
            <li>OIboy (Electronic Pop)</li>
          </ul>
        </div>

      </div>
    ) 
  }
}
