import React, { Component } from 'react';

import Title from './Title';
import { AccordionBlock } from './Accordion';

export default class StayedQuestions extends Component {
  render() {  
    const data = this.props.data
    const title = data.title

    return (
      <div className="stayedQuestions">

        <div className="container">

          <div className="stayedQuestions__block">

            <div className="stayedQuestions__side">
              {title && <Title value={title.value} /> }
            </div>

            <div className="stayedQuestions__side">
              <AccordionBlock data={data} classAdd={'accordion__block--empty'} />
            </div>

          </div>

        </div>

      </div>
    ) 
  }
}
