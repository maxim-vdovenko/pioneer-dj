import React, { Component } from 'react';
// import MobileMenu from './components/MobileMenu';
import Header from './components/Header';
import PopularCourses from './components/PopularCourses';
import Teachers from './components/Teachers';
import StudentReviews from './components/StudentReviews';
import TrialLesson from './components/TrialLesson';
import LogoSlider from './components/LogoSlider';
import StepsChange from './components/StepsChange';
import VideoBox from './components/VideoBox';
import OurSchool from './components/OurSchool';
import News from './components/News';
import HelpChoosing from './components/HelpChoosing';
import OtherProjects from './components/OtherProjects';

class App extends Component {
  render() {
    return (
      <div className="totalContainer">
        {/* <MobileMenu /> */}
        <Header />
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
      </div>
    )
  }
}

export default App
