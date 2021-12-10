import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class SidebarMenu extends Component {
  render() {
    return (
      <div className="sidebarMenu">
        
        <ul className="sidebarMenu__list">
          <li><NavLink to="#">О школе</NavLink></li>
          <li><NavLink to="#">Фото школы</NavLink></li>
          <li><NavLink to="/teachers">Преподаватели</NavLink></li>
          <li><NavLink to="#">Pioneer DJ Family</NavLink></li>
          <li><NavLink to="/news">Новости и акции</NavLink></li>
          <li><NavLink to="#">Отзывы</NavLink></li>
          <li><NavLink to="/contacts">Контакты</NavLink></li>
        </ul>

        <div className="sidebarMenu__link">
          <Link className="button-empty" to="#"><span>Оставить заявку</span></Link>
        </div>

      </div>
    ) 
  }
}
