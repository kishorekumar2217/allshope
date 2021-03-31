import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Partners extends Component {
   
    render() {
        return (
           <>
           <main>
    <section class="container stylization maincont">
          <div className="brands-wrap">
  <h3 className="component-ttl component-ttl-ct"><span>Our partners</span></h3>
  <div className="flexslider brands-list">
    <ul className="slides">
      <li>
        <Link target="_blank" rel="nofollow"  to="http://google.com">
          <img src="../assets/img/partners/partner1.jpg" alt="pic"/>
        </Link>
      </li>
      <li>
        <Link target="_blank" rel="nofollow"  to="http://google.com">
          <img src="../assets/img/partners/partner2.jpg" alt="pic" />
        </Link>
      </li>
      <li>
        <Link target="_blank" rel="nofollow"  to="http://google.com">
          <img src="../assets/img/partners/partner3.jpg" alt="pic" />
        </Link>
      </li>
      <li>
        <Link target="_blank" rel="nofollow"  to="http://google.com">
          <img src="../assets/img/partners/partner4.jpg" alt="pic" />
        </Link>
      </li>
      <li>
        <Link target="_blank" rel="nofollow"  to="http://google.com">
          <img src="../assets/img/partners/partner5.jpg" alt="pic" />
        </Link>
      </li>
      <li>
        <Link target="_blank" rel="nofollow"  to="http://google.com">
          <img src="../assets/img/partners/partner6.jpg" alt="pic" />
        </Link>
      </li>
      <li>
        <Link target="_blank" rel="nofollow"  to="http://google.com">
          <img src="../assets/img/partners/partner7.jpg" alt="pic" />
        </Link>
      </li>
      <li>
        <Link target="_blank" rel="nofollow"  to="http://google.com">
          <img src="../assets/img/partners/partner8.jpg" alt="pic" />
        </Link>
      </li>
    </ul>
  </div>
</div>
</section>
</main>
           </>
            
        );
    }
}

Partners.propTypes = {

};

export default Partners;