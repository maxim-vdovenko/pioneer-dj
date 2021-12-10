import React, { Component } from 'react';

import MobileMenu from '../components/MobileMenu';
import Header from '../components/Header';

import SidebarMenu from '../components/SidebarMenu';
import ContactsComp from '../components/ContactsComp';
import HelpChoosing from '../components/HelpChoosing';

export default class Contacts extends Component {
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
                <ContactsComp />
                <HelpChoosing />
              </div>
              
            </div>

          </div>

        </div>

      </>
    )
  }
}
