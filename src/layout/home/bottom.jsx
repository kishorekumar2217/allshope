import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Bottam extends Component {
    
  render() {
    return (
      <div > 
      <footer class="footer-wrap">
    <div class="footer-top">
        <div class="container">
            <div class="row">
                <div class="companyinfo">
                    <Link  to="/">
                        <img src="../assets/img/logo-b.png" alt="AllStore - MultiConcept eCommerce Responsive HTML5 Template"/>
                        AllStore - MultiConcept eCommerce Responsive HTML5 Template
                    </Link>
                </div>
                <div class="f-block-list">
                    <div class="f-block-wrap">
                        <div class="f-block">
                            <Link  to="#" class="f-block-btn" data-id="#f-block-modal-1">
                                <div class="iframe-img">
                                    <img src="../assets/img/shop.jpg" alt="About us"/>
                                </div>
                                <div class="overlay-icon">
                                    <i class="fa fa-info-circle"></i>
                                </div>
                            </Link>
                            <p class="f-info-ttl">About us</p>
                            <p>Shipping and payment information.</p>
                        </div>
                    </div>
                    <div class="f-block-wrap">
                        <div class="f-block">
                            <Link  to="#" class="f-block-btn" data-id="#f-block-modal-2">
                                <div class="iframe-img">
                                    <img src="../assets/img/qus.png" alt="Ask questions"/>
                                </div>
                                <div class="overlay-icon">
                                    <i class="fa fa-phone"></i>
                                </div>
                            </Link>
                            <p class="f-info-ttl">Ask questions</p>
                            <p>We call back within 10 minutes</p>
                        </div>
                    </div>
                    <div class="f-block-wrap">
                        <div class="f-block">
                            <Link  to="#" class="f-block-btn" data-id="#f-block-modal-3" data-content="<iframe width='853' height='480' src='https://www.youtube.com/embed/kaOVHSkDoPY?rel=0&amp;showinfo=0' allowfullscreen></iframe>">
                                <div class="iframe-img">
                                    <img src="../assets/img/about.jpg" alt="Video (2 min)"/>
                                </div>
                                <div class="overlay-icon">
                                    <i class="fa fa-play-circle"></i>
                                </div>
                            </Link>
                            <p class="f-info-ttl">Video (2 min)</p>
                            <p>Watch a video about our store</p>
                        </div>
                    </div>
                    <div class="f-block-wrap">
                        <div class="f-block">
                            <Link  to="#" class="f-block-btn" data-id="#f-block-modal-4">
                                <div class="iframe-img">
                                    <img src="../assets/img/cart.jpg" alt="Our address"/>
                                </div>
                                <div class="overlay-icon">
                                    <i class="fa fa-map-marker"></i>
                                </div>
                            </Link>
                            <p class="f-info-ttl">Our address</p>
                            <p>Spain, Madrid, 45</p>
                        </div>
                    </div>
                </div>

                <div class="stylization f-block-modal f-block-modal-content" id="f-block-modal-1">
                    <img class="f-block-modal-img" src="../assets/img/21.jpg" alt="About us"/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam natus iste ullam vero, tenetur ab ipsa consectetur deleniti officiis ex debitis incidunt alias voluptatum, maxime placeat dolores veniam sunt at atque velit, soluta. Neque ea alias quia provident molestias, ratione aut esse placeat beatae sequi sed laudantium. Unde animi nihil esse, repellendus exercitationem dicta harum ab labore, voluptates explicabo in, quidem dolorum voluptas!
                </div>
                <div class="stylization f-block-modal f-block-modal-callback" id="f-block-modal-2">
                    <div class="modalform">
                        <form action="#" method="POST" class="form-validate">
                            <p class="modalform-ttl">Callback</p>
                            <input type="text" placeholder="Your name" data-required="text" name="name"/>
                            <input type="text" placeholder="Your phone" data-required="text" name="phone"/>
                            <button type="submit"><i class="fa fa-paper-plane"></i> Send</button>
                        </form>
                    </div>
                </div>
                <div class="stylization f-block-modal f-block-modal-video" id="f-block-modal-3">

                </div>
                <div class="stylization f-block-modal f-block-modal-map" id="f-block-modal-4">
                    <div class="allstore-gmap">
                        <div class="marker" data-zoom="15" data-lat="-37.81485261872975" data-lng="144.95655298233032" data-marker="img/marker.png">534-540 Little Bourke St, Melbourne VIC 3000, Australia</div>
                    </div>
                </div>
                <div class="f-delivery">
                    <img src="../assets/img/map.png" alt=""/>
                    <h4>Free delivery in London</h4>
                    <p>We will deliver within 1 hour</p>
                </div>
            </div>
        </div>
    </div>

    <div class="container f-menu-list">
        <div class="row">
            <div class="f-menu">
                <h3>
                    About us
                </h3>
                <ul class=" nav-pills nav-stacked">
                    <li class="active"><Link to="/">Home</Link></li>
                    <li><Link to="/cataloglist">Catalog</Link></li>
                    <li><Link to="/element">Elements</Link></li>
                    <li><Link to="/Mainblog">Blog</Link></li>
                    <li><Link to="/Maincontact">Contacts</Link></li>
                </ul>
            </div>
            <div class="f-menu">
                <h3>
                    Shop
                </h3>
                <ul class=" nav-pills nav-stacked">
                    <li><Link  to="catalog-list.html">Women</Link></li>
                    <li><Link  to="catalog-list.html">Men</Link></li>
                    <li><Link  to="catalog-list.html">Kids</Link></li>
                    <li><Link  to="catalog-list.html">Shoes</Link></li>
                    <li><Link  to="catalog-list.html">Accessories</Link></li>
                </ul>
            </div>
            <div class="f-menu">
                <h3>
                    Information
                </h3>
                <ul class=" nav-pills nav-stacked">
                    <li><Link  to="/blog">Blog</Link></li>
                    <li><Link  to="blog.html">News</Link></li>
                    <li><Link  to="reviews.html">Reviews</Link></li>
                    <li><Link  to="blog.html">Articles</Link></li>
                    <li><Link  to="/login">Contacts</Link></li>
                </ul>
            </div>
            <div class="f-menu">
                <h3>
                    Pages
                </h3>
                <ul class="nav-pills nav-stacked">
                    <li><Link  to="contacts.html">About us</Link></li>
                    <li><Link  to="contacts.html">Delivery</Link></li>
                    <li><Link  to="contacts.html">Guarantees</Link></li>
                    <li><Link  to="contacts.html">Contacts</Link></li>
                    <li><Link  to="404.html">Page 404</Link></li>
                </ul>
            </div>
            <div class="f-subscribe">
                <h3>Subscribe to news</h3>
                <form class="f-subscribe-form" action="#">
                    <input placeholder="Your e-mail" type="text"/>
                    <button type="submit"><i class="fa fa-paper-plane"></i></button>
                </form>
                <p>Enter your email address if you want to receive our newsletter. Subscribe now!</p>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
      
    <div class="header_top">
    <div class="container">
    <div class="footer-copyright">
                    <i><Link  to="https://themeforest.net/user/real-web?ref=real-web">Real-Web</Link></i> © Copyright 2017
                </div>
      
        <ul class="social-icons nav ">
            <li>
                <Link  to="http://facebook.com" >
                    <i class="fa fa-facebook"></i>
                </Link>
            </li>
            <li>
                <Link  to="http://google.com" >
                    <i class="fa fa-google-plus"></i>
                </Link>
            </li>
            <li>
                <Link  to="http://twitter.com" >
                    <i class="fa fa-twitter"></i>
                </Link>
            </li>
            <li>
                <Link  to="http://vk.com">
                    <i class="fa fa-vk"></i>
                </Link>
            </li>
            <li>
                <Link  to="http://instagram.com" >
                    <i class="fa fa-instagram"></i>
                </Link>
            </li>
        </ul>		</div>
</div>
</div>

</footer>
      
      
      </div>
    );
  }
}
