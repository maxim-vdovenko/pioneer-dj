import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Title extends Component {
  render() {
    const props = this.props
    const classDark = 'title__value-dark'
    const classRed = 'title__value-red'
    const valueMap = props.value.map((item, index) => 
      <span className={item[0] === 'dark' ? classDark : classRed} key={index}>{item[1]}</span>
    )

    return (
      <div className="title">
        <div className="container">
          <div className="title__block">

            {props.value &&
              <div className="title__value">
                <h2>
                  {valueMap}
                </h2>
              </div>
            }

            {props.valueLink !== undefined && 
              <Link className="title__link" to={props.link}>{props.valueLink}</Link>
            }

          </div>
        </div>
      </div>
    ) 
  }
}
