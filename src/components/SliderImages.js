import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Slick from 'react-slick';

import Title from './Title';

export default class SliderImages extends Component {
  state = {
    activeSlide: 0
  }

  sliderSlick = (box, position) => {
    const pos = position ? true : false

    const settings = {
      dots: false,
      infinite: pos,
      fade: false,
      arrows: true,
      speed: 400,
      cssEase: 'ease-in-out',
      draggable: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      centerMode: pos,
      variableWidth: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: next => this.setState({activeSlide: next}),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            infinite: false,
            centerMode: false,
            draggable: true,
            pauseOnHover: true,
            pauseOnFocus: true
          }
        }
      ]
    }
    
    return (
      <div className="sliderImages__cont">

        <div className={`sliderImages__cont-counter ${pos ? 'sliderImages__cont-counter--center' : ''}`}>
          <span>{this.state.activeSlide + 1}</span>
          <span>/</span>
          <span>{box.length}</span>
        </div>

        <Slick className={`sliderImages__slick ${pos ? 'sliderImages__slick--center' : ''}`} {...settings}>
          {box.map((element, index) => (
            <div className="sliderImages__slick-box" key={index}>
              <div className="sliderImages__slick-wrapper"><img src={element.src} alt="img" /></div>
            </div>
          ))}
        </Slick>

      </div>
    )
  } 

  render() {
    const data = this.props.data
    const title = data.title
    const description = data.description
    
    return (
      <div className="sliderImages">

        {title &&
          <>
            <Title
              value={title.value}
              valueLink={title.valueLink}
              link={title.link}
            />
            
            <div className="container">
              {description &&
                <div className="sliderImages__description">
                  {description.map((item, index) => 
                    <p key={index}>{item}</p>
                  )}
                </div>
              }
              {title.mobile && 
                <div className="titleLink"><Link to={title.link}>{title.valueLink}</Link></div>
              }
            </div>
          </> 
        }

        { this.sliderSlick(data.box, this.props.positionCenter) }

      </div>
    ) 
  }
}
