import React, { Component } from 'react';

import TemSlider from './temSlider';

import PopularProduct from './PopularProduct';
import Banner from './banner';
import SpecialOffer from './specialoffer';
import LatestNews from './latestnews';
import Testimonials from './testimonials';
import Subscribe from './subscribe';
import  QuickView from './quickview';





export default class Main extends Component {

  render() {
    return (
      <div> 
      
      
      <TemSlider/>
      <PopularProduct/>
      <Banner/>
      <SpecialOffer/>
      <LatestNews/>
      <Testimonials/>
      <Subscribe/>
      <QuickView/>
    
      
       </div>
    );
  }
}
