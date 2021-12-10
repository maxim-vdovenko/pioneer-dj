import React, { Component } from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import { NavLink } from 'react-router-dom';

import Title from './Title';
import { SocialNetworks } from './Elements';
import ImgInfo from '../img/contacts/info.jpg';

export default class ContactsComp extends Component {
  render() {
    return (
      <div className="contacts">

        <Title
          value={[
            ['dark', 'Контакты']
          ]}
        />

        <div className="contacts__block">

          <div className="contacts__cont contacts__cont--column">

            <div className="contacts__box contacts__box--location">
              <div className="contacts__box-name"><span>Москва</span></div>
              <div className="contacts__box-name">
                <span>Курская</span>
                <div className="contacts__metro contacts__metro--blue"></div>
                <div className="contacts__metro contacts__metro--brown"></div>
              </div>
              <div className="contacts__box-name"><span>Нижний Сусальный переулок д.5 ст.4 под.10</span></div>
            </div>

            <div className="contacts__box contacts__box--clock">
              <div className="contacts__box-name"><span>Ежедневно с 12:00 до 22:00</span></div>
            </div>

          </div>

          <div className="contacts__item contacts__item--info">
            <div className="contacts__item-bl">
              <div className="contacts__item-img"><img src={ImgInfo} alt="img" /></div>
              <span className="contacts__item-name">Как добраться от метро?</span>
              <a className="button-play button-play--white" href="#"></a>
            </div>
          </div>

          <div className="contacts__item contacts__item--map">
            <div className="contacts__item-bl">
              <YMaps className="map">
                <div className="map__info"><span>Адрес на карте</span></div>
                <Map className="map__cont" defaultState={{ center: [55.75, 37.57], zoom: 14 }} />
              </YMaps>
            </div>
          </div>

          <div className="contacts__cont">

            <div className="contacts__box contacts__box--email">
              <div className="contacts__box-name"><span>info@pioneerdjschool.ru</span></div>
            </div>

            <div className="contacts__box contacts__box--phone">
              <div className="contacts__box-name"><span>+7 916 942-52-48</span></div>
            </div>

            <div className="contacts__box contacts__box--networks">
              <SocialNetworks /> 
              <div className="contacts__box-name"><span>Присоединяйтесь к нам :)</span></div>
            </div>

          </div>

        </div>

      </div>
    ) 
  }
}
