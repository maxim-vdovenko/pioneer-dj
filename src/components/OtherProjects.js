import React, { Component } from 'react';
import Title from './Title';

export default class OtherProjects extends Component {
  render() {
    return (
      <div className="otherProjects">

        <Title
          value={[
            ['dark', 'Другие наши проекты']
          ]}
        />

        <div className="container">
          <div className="otherProjects__cont">
            
          </div>
        </div>
      </div>
    ) 
  }
}
