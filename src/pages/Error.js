import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MobileMenu from '../components/MobileMenu';
import Header from '../components/Header';

export default class Error extends Component {
  render() {
    return (
      <>
        <MobileMenu />
        <Header />
        
        <div className="errorBox">
          <h1>Такой страницы нет !</h1>

          <div className="errorBox__link">
            <Link to="/">Вернуться на главную</Link>
          </div>
        </div>

      </>
    )
  }
}
