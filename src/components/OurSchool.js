import React, { Component } from 'react';

import Slick from 'react-slick';
import '../css/slick.min.css';

import Title from './Title';
import Img1 from '../img/our-school/img-1.jpg'; 
import Img2 from '../img/our-school/img-2.jpg'; 
import Img3 from '../img/our-school/img-3.jpg'; 

export default class OurSchool extends Component {
  state = {
    activeSlide: 0
  }

  sliderSlick = () => {
    const sliderElements = [
      {src: Img1},
      {src: Img2},
      {src: Img3},
      {src: Img1},
      {src: Img2},
      {src: Img3},
      {src: Img1}
    ]

    const settings = {
      dots: false,
      infinite: true,
      fade: false,
      arrows: true,
      speed: 400,
      cssEase: 'ease-in-out',
      draggable: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      centerMode: true,
      variableWidth: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      beforeChange: next => this.setState({ 
        activeSlide: next
      }),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            draggable: true,
            pauseOnHover: true,
            pauseOnFocus: true,
            slidesToShow: 2,
          }
        }
      ]
    }
    return (
      <div className="ourSchool__sliderCont">

        <div className="ourSchool__sliderCont-counter">
          <span>{this.state.activeSlide + 1}</span>
          <span>/</span>
          <span>{sliderElements.length}</span>
        </div>

        <Slick className="ourSchool__slider" {...settings}>
          {sliderElements.map((element, index) => (
            <div key={index} className="ourSchool__slider-box"><img src={element.src} alt="img" /></div>
          ))}
        </Slick>

      </div>
    )
  } 

  render() {
    return (
      <div className="ourSchool">

        <Title
          value={[
            ['dark', 'Наша школа']
          ]}
          valueLink={'Подробнее о школе'}
          link={'#'}
        />

        <div className="container">
          <div className="ourSchool__description">
            <p>Pioneer DJ School — специализированная площадка для выступлений, лекций, воркшопов и других ивентов</p>
          </div>
        </div>

        { this.sliderSlick() }

      </div>
    ) 
  }
}
