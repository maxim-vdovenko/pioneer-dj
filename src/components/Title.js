import React, { Component } from 'react';

export default class Title extends Component {
  render() {
    const props = this.props
    const classDark = 'title__value-dark'
    const classRed = 'title__value-red'
    const valueMap = props.value.map((item, index) => 
      <h2 className={item[0] === 'dark' ? classDark : classRed} key={index}>{item[1]}</h2>
    )

    return (
      <div className="title">
        <div className="container">
          <div className="title__block">

            {props.value &&
              <div className="title__value">
                {valueMap}
              </div>
            }

            {props.valueLink !== undefined && 
              <a className="title__link" href={props.link}>{props.valueLink}</a>
            }

          </div>
        </div>
      </div>
    ) 
  }
}
