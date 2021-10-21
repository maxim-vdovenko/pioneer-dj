import React, { Component } from 'react';
import Img from '../img/video-box.jpg'; 

export default class VideoBox extends Component {
  render() {
    return (
      <div className="videoBox">
        <div className="container">
          <div className="videoBox__box">
            <img className="videoBox__img" src={Img} alt="img" />
            <div className="button-play"></div>
          </div>
        </div>
      </div>
    ) 
  }
}
