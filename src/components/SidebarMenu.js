import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class SidebarMenu extends Component {
  
  componentDidMount = () => {
    let ticking = false

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.posSidebar()
          ticking = false
        })
        ticking = true
      }
    })

    this.posSidebar()
  }

  posSidebar = () => {
    const block = document.querySelector('.doubleBlock__sidebar')

    if (!block) return    

    const hHead = document.querySelector('.header').offsetHeight
    const blockBottom = block.getBoundingClientRect().bottom
    const blockPaddingTop = parseFloat(window.getComputedStyle(block, null).getPropertyValue('padding-top'))
    const menu = document.querySelector('.sidebarMenu')
    const hMenu = menu.clientHeight

    if (blockBottom < ((blockPaddingTop + hHead) + hMenu)) 
    menu.classList.add('absBottom')
    else 
    menu.classList.remove('absBottom')
  }

  render() {
    return (
      <div className="sidebarMenu">
        
        <ul className="sidebarMenu__list">
          <li><a href="#">О школе</a></li>
          <li><a href="#">Фото школы</a></li>
          <li><NavLink to="/teachers">Преподаватели</NavLink></li>
          <li><a href="#">Pioneer DJ Family</a></li>
          <li><NavLink to="/news">Новости и акции</NavLink></li>
          <li><a href="#">Отзывы</a></li>
          <li><NavLink to="/contacts">Контакты</NavLink></li>
        </ul>

        <div className="sidebarMenu__link">
          <Link className="button-empty" to="#"><span>Оставить заявку</span></Link>
        </div>

      </div>
    ) 
  }
}
