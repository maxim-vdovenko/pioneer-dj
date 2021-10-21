import React, { Component } from 'react';
import Title from './Title';

export default class OurSchool extends Component {
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
          <div className="ourSchool__cont">
            
          </div>
        </div>
      </div>
    ) 
  }
}
