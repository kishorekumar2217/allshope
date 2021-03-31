import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class TemSlider extends Component {

    

    render() {
        return (
            <div>
            <main>
    <section class="container">
               <div class="fr-slider-wrap">
            <div class="fr-slider">
                <ul class="slides">
                    <li>
                        <img src="../assets/img/slider/slide1.jpg" alt=""/>
                        <div class="fr-slider-cont">
                            <h3>MEGA SALE -30%</h3>
                            <p>Winter collection for women's. <br/>We all have choices for you. Check it out!</p>
                            <p class="fr-slider-more-wrap">
                                <Link  class="fr-slider-more"  to="#">View collection</Link> 
                            </p>
                        </div>
                    </li>
                    <li>
                        <img src="../assets/img/slider/slide2.jpg" alt=""/>
                        <div class="fr-slider-cont">
                            <h3>NEW COLLECTION</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>Aliquam consequuntur dolorem doloribus fuga harum</p>
                            <p class="fr-slider-more-wrap">
                                <Link  class="fr-slider-more"  to="#">Shopping now</Link> 
                            </p>
                        </div>
                    </li>
                    <li>
                        <img src="../assets/img/slider/slide3.jpg" alt=""/>
                        <div class="fr-slider-cont">
                            <h3>SUMMER TRENDS</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>Aliquam consequuntur dolorem doloribus fuga harum</p>
                            <p class="fr-slider-more-wrap">
                                <Link  class="fr-slider-more"  to="#">Start shopping</Link> 
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div> 
    
        </section>
        </main>
            </div>
        );
    }
}

export default TemSlider;