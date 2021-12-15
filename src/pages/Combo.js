import React, { Component } from 'react';

import MobileMenu from '../components/MobileMenu';
import Header from '../components/Header';

import Head from '../components/Head';
import SaleCourses from '../components/SaleCourses';
import CountCombo from '../components/CountCombo';

export default class Combo extends Component {
  render() {

    const heatData = {
      image: {
        src: '',
        alt: 'image-combo'
      },
      title: {
        name: 'Акция <br> Комбо обучение',
        addclass: 'internal'
      },
      text: ['Выбери два курса <b>и получи <i>скидку 20%</i></b>'],
      link: {
        name: 'Оставить заявку',
        src: '#'
      }
    }

    return (
      <>
        <MobileMenu />
        <Header />

        <Head data={heatData} />
        <SaleCourses />
        <CountCombo />
      </>
    )
  }
}
