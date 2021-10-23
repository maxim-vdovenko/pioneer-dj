import React, { Component } from 'react';
import Title from './Title';
import ImgLogo from '../img/logos.png'; 

export default class OtherProjects extends Component {
  render() {
    return (
      <div className="otherProjects">

        <Title
          value={[
            ['dark', 'Другие наши проекты']
          ]}
        />

        <div className="otherProjects__cont">

          <div className="otherProjects__box">
            <a href="#"><img src={ImgLogo} alt="img" /></a>
          </div>

          <div className="otherProjects__box">
            <a href="#"><img src={ImgLogo} alt="img" /></a>
          </div>

          <div className="otherProjects__box">
            <a href="#"><img src={ImgLogo} alt="img" /></a>
          </div>

          <div className="otherProjects__box">
            <a href="#"><img src={ImgLogo} alt="img" /></a>
          </div>

          <div className="otherProjects__box">
            <a href="#"><img src={ImgLogo} alt="img" /></a>
          </div>

        </div>

      </div>
    ) 
  }
}
