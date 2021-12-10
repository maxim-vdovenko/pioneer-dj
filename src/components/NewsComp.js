import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Title from './Title';

export default class NewsComp extends Component {
  render() {

    const data = this.props.data
    const title = data.title
    const box = data.box
    const column = data.column
    const more = data.more

    const boxMap = box.map((item, index) => 
      <div className="news__cont-box" key={index}>
        <Link to={item.link}><img src={item.srcImg} alt="img" /></Link>
      </div>
    )

    return (
      <div className="news news--main">

        {title &&
          <Title
            value={title.value}
            valueLink={title.valueLink}
            link={title.link}
          />
        }

        <div className="container">

          <div className={column ? 'news__cont news__cont--' + column : 'news__cont'}>
            {boxMap}
          </div>

          {title && title.mobile && 
            <div className="titleLink"><Link to={title.link}>{title.valueLink}</Link></div>
          }

          {more &&
            <div className="titleShowMore">
              <span className="titleShowMore__butt">{more.text[0]} <b>6</b> {more.text[1]}</span>
            </div>
          }

        </div>

      </div>
    ) 
  }
}
