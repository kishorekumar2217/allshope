import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HeaderTop extends Component {
  render() {
    return (
     <>
      <header className="header">
      <div className="header_top">
        <div className="container">
            <ul className="contactinfo nav nav-pills">
                <li>
                    <i className='fa fa-phone'></i> +7 777 123 1575
                </li>
                <li>
                    <i className="fa fa-envelope"></i> admin@real-web.pro
                </li>
            </ul> 
            <ul className="social-icons nav">
                <li>
                    <Link to="http://facebook.com">
                        <i className="fa fa-facebook"></i>
                    </Link>
                </li>
                <li>
                    <a href="http://google.com">
                        <i className="fa fa-google-plus"></i>
                    </a>
                </li>
                <li>
                    <Link to="http://twitter.com" >
                        <i className="fa fa-twitter"></i>
                    </Link>
                </li>
                <li>
                    <Link to="http://vk.com">
                        <i className="fa fa-vk"></i>
                    </Link>
                </li>
                <li>
                    <Link to="http://instagram.com" >
                        <i className="fa fa-instagram"></i>
                    </Link>
                </li>
            </ul>		</div>
    </div>


    </header>
    </>

    );
  }
}
