import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class SliderBoxs extends Component {
  render() {

    const props = this.props.data
    const sliderMap = props.map((item, index) => 
      <div className="sliderBoxs__cont" key={index}>
        <a className="sliderBoxs__cont-unit" href={item.link}>{item.title}</a>
      </div>
    )

    return(
      <div className="sliderBoxs">
        <div className="sliderBoxs__block">
          {sliderMap}
        </div> 
      </div>
    ) 
  }
}
