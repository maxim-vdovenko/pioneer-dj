import React, { Component } from 'react';
import Title from './Title';
import Img1 from '../img/student-reviews/img-1.jpg'; 
import Img2 from '../img/student-reviews/img-2.jpg'; 
import Img3 from '../img/student-reviews/img-3.jpg'; 
import Img4 from '../img/student-reviews/img-4.jpg'; 
import Img5 from '../img/student-reviews/img-5.jpg'; 
import Img6 from '../img/student-reviews/img-2.jpg'; 

export default class StudentReviews extends Component {
  render() {
    return (
      <div className="studentReviews">

        <Title
          value={[
            ['dark', 'Что говорят'],
            ['red', 'студенты о школе']
          ]}
        />

        <div className="container">

          <div className="studentReviews__cont">

            <div className="studentReviews__item">
              <div className="studentReviews__box">
                <div className="studentReviews__img"><img src={Img1} alt="img" /></div>
                <span className="studentReviews__name">Андрей Петров</span>
              </div>
            </div>

            <div className="studentReviews__item">
              <div className="studentReviews__box">
                <div className="studentReviews__img"><img src={Img2} alt="img" /></div>
                <span className="studentReviews__name">Денис Бобкин</span>
              </div>
            </div>

            <div className="studentReviews__item">
              <div className="studentReviews__box">
                <div className="studentReviews__img"><img src={Img3} alt="img" /></div>
                <span className="studentReviews__name">Андрей Петров</span>
              </div>
            </div>

            <div className="studentReviews__item">
              <div className="studentReviews__box">
                <div className="studentReviews__img"><img src={Img4} alt="img" /></div>
                <span className="studentReviews__name">Анжела Каменская</span>
              </div>
            </div>

            <div className="studentReviews__item">
              <div className="studentReviews__box">
                <div className="studentReviews__img"><img src={Img5} alt="img" /></div>
                <span className="studentReviews__name">Андрей Петров</span>
              </div>
            </div>

            <div className="studentReviews__item">
              <div className="studentReviews__box">
                <div className="studentReviews__img"><img src={Img6} alt="img" /></div>
                <span className="studentReviews__name">Денис Бобкин</span>
              </div>
            </div>
   
          </div>

        </div>

      </div>
    ) 
  }
}
