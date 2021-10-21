import React, { Component } from 'react';
import Title from './Title';

export default class News extends Component {
  render() {
    return (
      <div className="news">

        <Title
          value={[
            ['dark', 'Новости и акции школы']
          ]}
          valueLink={'Все новости'}
          link={'#'}
        />

        <div className="container">
          <div className="news__cont">
            
          </div>
        </div>
      </div>
    ) 
  }
}
