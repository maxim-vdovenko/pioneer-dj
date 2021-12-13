import React, { Component } from 'react';

import MobileMenu from '../components/MobileMenu';
import Header from '../components/Header';

import SidebarMenu from '../components/SidebarMenu';
import TeachersDetailComp from '../components/TeachersDetailComp';
import HelpChoosing from '../components/HelpChoosing';

export default class TeachersDetail extends Component {
  render() {
    return (
      <>
        <MobileMenu />
        <Header />

        <div className="doubleBlock">

          <div className="container">

            <div className="doubleBlock__block">

              <div className="doubleBlock__sidebar">
                <SidebarMenu />
              </div>

              <div className="doubleBlock__cont">
                <TeachersDetailComp />
                <HelpChoosing inside={true} />
              </div>
              
            </div>

          </div>

        </div>

      </>
    )
  }
}
