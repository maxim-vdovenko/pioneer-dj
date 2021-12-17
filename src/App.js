import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import MobileMenu from './components/MobileMenu';
// import Header from './components/Header';
import Footer from './components/Footer';

import Main from './pages/Main';
import Combo from './pages/Combo';
import Course from './pages/Course';

import Teachers from './pages/Teachers';
import TeachersDetail from './pages/TeachersDetail';

import News from './pages/News';
import NewsDetail from './pages/NewsDetail';

import Contacts from './pages/Contacts';

import Error from './pages/Error';

class App extends Component {
  render() {
    return (
      <>
        <div className="totalContainer">
          <Router>

            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/combo" element={<Combo />} />
              <Route path="/course" element={<Course />} />

              <Route path="/teachers" element={<Teachers />} />
              <Route path="/teachers/detail" element={<TeachersDetail />} />

              <Route path="/news" element={<News />} />
              <Route path="/news/detail" element={<NewsDetail />} />

              <Route path="/contacts" element={<Contacts />} />

              <Route path="*" element={<Error />} />
            </Routes>

          </Router>

          <div className="hFooter"></div>

        </div>

        <Footer />
      </>
    )
  }
}

export default App;
