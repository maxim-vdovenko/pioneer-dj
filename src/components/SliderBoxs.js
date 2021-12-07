import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SliderBoxs extends Component {
  render() {
    return(
      <div className="sliderBoxs">

        <div className="sliderBoxs__block">

          <div className="sliderBoxs__cont">
            <a className="sliderBoxs__cont-unit" href="#">Продвижение после обучения</a>
          </div>

          <div className="sliderBoxs__cont">
            <a className="sliderBoxs__cont-unit" href="#">Большой тренинг-класс</a>
          </div>

          <div className="sliderBoxs__cont">
            <a className="sliderBoxs__cont-unit" href="#">Индивидуальное обучение</a>
          </div>

          <div className="sliderBoxs__cont">
            <a className="sliderBoxs__cont-unit" href="#">Продвижение после обучения</a>
          </div>

          <div className="sliderBoxs__cont">
            <a className="sliderBoxs__cont-unit" href="#">Просторные классы</a>
          </div>
          
        </div> 

      </div>
    ) 
  }
}
