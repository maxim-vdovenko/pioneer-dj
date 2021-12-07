import React, { Component } from 'react';

export default class Head extends Component {
  render() {
    const props = this.props.data
    const text = props.text.map((item, index) => 
      <p key={index} dangerouslySetInnerHTML={{__html:item}} />
    )

    return (
      <div className="head" className={props.title.addclass ? "head head--" + props.title.addclass : "head"}>

        {props.image.src &&
          <div className="head__fon">
            <img src={props.image.src} alt={props.image.alt} />
          </div>
        } 

        {!props.image.src &&
          <div className="head__fon head__fon--empty"></div>
        }

        <div className="container">

          <div className="head__cont">

            <div className="head__text">
              <h1 dangerouslySetInnerHTML={{__html:props.title.name}} />
              {text}
            </div>

            <a className="button-empty" href={props.link.src}><span>{props.link.name}</span></a>

          </div>

          <a className="button-play" href="#"></a>

        </div>

      </div>
    ) 
  }
}
