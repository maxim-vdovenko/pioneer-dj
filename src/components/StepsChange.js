import React, { Component } from 'react';
import Title from './Title';

export default class StepsChange extends Component {
  render() {
    const classAdd = this.props.classAdd
    const view = this.props.view
    const data = this.props.data
    const title = data.title
    const val = data.val

    const stepsMap = val.map((item, index) => 
      <div className="stepsChange__item" key={index}>
        <div className="stepsChange__box">

          {view === 'check' &&
            <span className="stepsChange__box-check"></span>
          }
          {view === 'numbering' &&
            <span className="stepsChange__box-numbering">{index + 1}</span>
          }
        
          <span className="stepsChange__box-value">{item.title}</span>

          {item.text &&
            <div className="stepsChange__box-text">
              <p>{item.text}</p>
            </div>
          }

        </div>
      </div>
    )

    return (
      <div className={`stepsChange ${classAdd ? classAdd : ''}`}>

        {title &&
          <Title
            value={title.value}
          />
        }

        <div className="container">

          {data.description &&
            <div className="stepsChange__description">
              <p>{data.description}</p>
            </div>
          }

          <div className="stepsChange__cont">
            {stepsMap}
          </div>
          
        </div>

      </div>
    ) 
  }
}
