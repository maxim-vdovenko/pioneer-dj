import React, { Component } from 'react';

import HeadImage from '../img/header/Pioneer-DJ-School.jpg';

import MobileMenu from '../components/MobileMenu';
import Header from '../components/Header';

import Head from '../components/Head';
import SliderBoxs from '../components/SliderBoxs';
import PopularCourses from '../components/PopularCourses';
import Teachers from '../components/Teachers';
import StudentReviews from '../components/StudentReviews';
import TrialLesson from '../components/TrialLesson';
import LogoSlider from '../components/LogoSlider';
import StepsChange from '../components/StepsChange';
import VideoBox from '../components/VideoBox';
import OurSchool from '../components/OurSchool';
import News from '../components/News';
import HelpChoosing from '../components/HelpChoosing';
import OtherProjects from '../components/OtherProjects';

export default class Main extends Component {
  render() {

    const heatData = {
      image: {
        src: HeadImage,
        alt: 'image-pioneer-dj-school'
      },
      title: {
        name: 'Pioneer DJ School'
      },
      text: ['Единственная сертифицированная школа диджеинга от бренда Pioneer DJ в России'],
      link: {
        name: 'Бесплатный пробный урок',
        src: '#'
      }
    }

    return (
      <>
        <MobileMenu />
        <Header />
        
        <Head data={heatData} />
        <SliderBoxs />
        <PopularCourses />
        <Teachers />
        <StudentReviews />
        <TrialLesson />
        <LogoSlider />
        <StepsChange />
        <VideoBox />
        <OurSchool />
        <News />
        <HelpChoosing />
        <OtherProjects />
      </>
    )
  }
}
