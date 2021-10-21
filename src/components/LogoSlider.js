import React, { Component } from 'react';
import Title from './Title';
import ImgLogo from '../img/logos.png'; 

export default class LogoSlider extends Component {
  render() {
    return (
      <div className="logoSlider">

        <Title
          value={[
            ['dark', 'Наши'],
            ['red', 'выпускники'],
            ['dark', 'выступают на площадках']
          ]}
        />

        <div className="logoSlider__cont">

          <div className="logoSlider__box">
            <a href="#"><img src={ImgLogo} alt="img" /></a>
          </div>

          <div className="logoSlider__box">
            <a href="#"><img src={ImgLogo} alt="img" /></a>
          </div>

          <div className="logoSlider__box">
            <a href="#"><img src={ImgLogo} alt="img" /></a>
          </div>

          <div className="logoSlider__box">
            <a href="#"><img src={ImgLogo} alt="img" /></a>
          </div>

          <div className="logoSlider__box">
            <a href="#"><img src={ImgLogo} alt="img" /></a>
          </div>

        </div>
      </div>
    ) 
  }
}
