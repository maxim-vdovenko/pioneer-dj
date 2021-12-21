import React, { Component } from 'react';

import Title from './Title';

export class Accordion extends Component {
  render() {
    const data = this.props.data
    const title = data.title
    const description = data.description
    const classAdd = this.props.classAdd

    return (
      <div className={`accordion ${classAdd ? classAdd : ''}`}>

        {title &&
          <Title
            value={title.value}
          />
        }

        <div className="container">

          {description && 
            <div className="accordion__description">
              <p>{description}</p>
            </div>
          }

          <AccordionBlock data={data} />

        </div>

      </div>
    ) 
  }
}

export class AccordionBlock extends Component {
  render() {
    const data = this.props.data
    const classAdd = this.props.classAdd
    const boxMap = data.val.map((itemBox, indexBox) => 
      <div className="accordion__box" key={indexBox}>

        <div className="accordion__box-head">
          <div className="button-plus"></div>
          <span onClick={event => openBox(event)}>{itemBox.name}</span> 
        </div>
        
        <div className="accordion__box-body">
          <div className="accordion__box-wrapper">
            {itemBox.cont &&
              itemBox.cont.map((item, index) => 
                <div className="accordion__box-cont" key={index}>
                  {item.paragraph &&
                    paragraphMap(item.paragraph)
                  }
                  {item.list &&
                    listMap(item.list)
                  }
                </div>
              )
            }
          </div>  
        </div>
      </div>
    )

    function openBox(event) {
      const th = event.target
      const button = th.previousSibling
      const body = th.closest('.accordion__box').querySelector('.accordion__box-body')
      const wrapper = th.closest('.accordion__box').querySelector('.accordion__box-wrapper')

      if (button.classList.contains('active')) {
        button.classList.remove('active')
        body.style.height = '0'
      } else {
        button.classList.add('active')
        body.style.height = wrapper.offsetHeight + 'px'
      }
    }

    function listMap(list) {
      return (
        <ol>
          {list.map((item, index) => <li key={index}>{item}</li> )}
        </ol>
      )
    }

    function paragraphMap(paragraph) {
      return paragraph.map((item, index) => <p key={index}>{item}</p> )
    }

    return (
      <div className={`accordion__block ${classAdd ? classAdd : ''}`}>
        {boxMap}
      </div>
    )
  }
}
