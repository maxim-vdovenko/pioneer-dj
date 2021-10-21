import React, { Component } from 'react';

export default class HeaderMenu extends Component {
  render() {
    return(
      <ul className="header__menu">
        <li>
          <a className="header__menu-arrow" href="#">Курсы</a>
        </li>
        <li><a href="#">О школе</a></li>
        <li><a href="#">Услуги</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>
    ) 
  }
}
