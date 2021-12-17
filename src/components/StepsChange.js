import React, { Component } from 'react';
import Title from './Title';

export default class StepsChange extends Component {
  render() {
    const data = this.props.data
    const title = data.title
    const val = data.val

    const stepsMap = val.map((item, index) => 
      <div className="stepsChange__item" key={index}>
        <div className="stepsChange__box">
          <span className="stepsChange__box-numbering">{index + 1}</span>
          <span className="stepsChange__box-value">{item.title}</span>
          <div className="stepsChange__box-text">
            <p>{item.text}</p>
          </div>
        </div>
      </div>
    )

    return (
      <div className="stepsChange">

        {title &&
          <Title
            value={title.value}
          />
        }

        <div className="container">
          <div className="stepsChange__cont">
            {stepsMap}
          </div>
        </div>

      </div>
    ) 
  }
}
