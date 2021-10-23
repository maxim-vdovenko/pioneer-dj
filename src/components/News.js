import React, { Component } from 'react';
import Title from './Title';
import News1 from '../img/news/img-1.jpg'; 
import News2 from '../img/news/img-2.jpg'; 
import News3 from '../img/news/img-3.jpg'; 
import News4 from '../img/news/img-4.jpg'; 
import News5 from '../img/news/img-5.jpg'; 
import News6 from '../img/news/img-6.jpg'; 
import News7 from '../img/news/img-7.jpg'; 
import News8 from '../img/news/img-8.jpg'; 

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
            <div className="news__cont-box"><a href="#"><img src={News1} alt="img" /></a></div>
            <div className="news__cont-box"><a href="#"><img src={News2} alt="img" /></a></div>
            <div className="news__cont-box"><a href="#"><img src={News3} alt="img" /></a></div>
            <div className="news__cont-box"><a href="#"><img src={News4} alt="img" /></a></div>
            <div className="news__cont-box"><a href="#"><img src={News5} alt="img" /></a></div>
            <div className="news__cont-box"><a href="#"><img src={News6} alt="img" /></a></div>
            <div className="news__cont-box"><a href="#"><img src={News7} alt="img" /></a></div>
            <div className="news__cont-box"><a href="#"><img src={News8} alt="img" /></a></div>
          </div>

          <div className="titleLink"><a href="#">Все новости</a></div>

        </div>

      </div>
    ) 
  }
}
