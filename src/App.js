import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import MobileMenu from './components/MobileMenu';
// import Header from './components/Header';
import Footer from './components/Footer';

import Main from './pages/Main';
import Combo from './pages/Combo';
import Teachers from './pages/Teachers';
import Error from './pages/Error';

class App extends Component {
  render() {
    return (
      <>
        <div className="totalContainer">
          <Router>

            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route path="/combo" element={<Combo />} />
              <Route path="/about/teachers" element={<Teachers />} />
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
