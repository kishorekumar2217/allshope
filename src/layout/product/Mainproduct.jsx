import React, { Component } from 'react';
import Header from '../home/Header';
import Product from './Product';
import Footer from '../home/Footer';

class Mainproduct extends Component {

    render() {
        return (
            <div>
               <Header/>
               <Product/>
               {/* <Description/>  */}
              
               <Footer/> 
            </div>
        );
    }
}

export default Mainproduct;