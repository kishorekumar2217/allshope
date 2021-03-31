import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductTab extends Component {
    render() {
        return (
            <div class="container">
               <div class="prod-tabs-wrap">
				<ul class="prod-tabs">
					<li><Link  data-prodtab-num="1" class="active"  to="#" data-prodtab="#prod-tab-1">Description</Link></li>
					<li><Link  data-prodtab-num="2" id="prod-props"  to="#" data-prodtab="#prod-tab-2">Features</Link></li>
					<li><Link  data-prodtab-num="3"  to="#" data-prodtab="#prod-tab-3">Video</Link></li>
					<li><Link  data-prodtab-num="4"  to="#" data-prodtab="#prod-tab-4">Articles (6)</Link></li>
					<li><Link  data-prodtab-num="5"  to="#" data-prodtab="#prod-tab-5">Reviews (3)</Link></li>
				</ul>
				<div class="prod-tab-cont">

					<p data-prodtab-num="1" class="prod-tab-mob active" data-prodtab="#prod-tab-1">Description</p>
					<div class="prod-tab stylization" id="prod-tab-1">
						<p>Quis temporibus hic reprehenderit explicabo odio earum maxime cupiditate mollitia magni laboriosam illum adipisci, ipsam, repellendus optio esse dolorem incidunt debitis eius voluptate expedita assumenda. Praesentium iure inventore nostrum corporis illum, est asperiores accusamus, ducimus, accusantium natus illo</p>
						<p>Ad officiis omnis eaque, tempora quidem, vel, esse quasi qui sed rem provident ea autem accusamus? Aspernatur excepturi rem illo amet sapiente non repellat debitis dignissimos quod, accusamus corrupti consectetur optio maiores, sint aliquam. Veniam, non harum voluptate dicta sit porro iste cumque eligendi placeat ea voluptatem deserunt quam quo facere! Libero vitae rem dolore placeat quae, magni voluptate maiores nemo ullam temporibus adipisci perferendis laboriosam illo ipsam quia numquam, ipsum delectus at vel error iure aspernatur</p>
					</div>
					<p data-prodtab-num="2" class="prod-tab-mob" data-prodtab="#prod-tab-2">Features</p>
					<div class="prod-tab prod-props" id="prod-tab-2">
						<table>
							<tbody>
							<tr>
								<td>SKU</td>
								<td>05464207</td>
							</tr>
							<tr>
								<td>Material</td>
								<td>Nylon</td>
							</tr>
							<tr>
								<td>Pattern Type</td>
								<td>Solid</td>
							</tr>
							<tr>
								<td>Wash</td>
								<td>Colored</td>
							</tr>
							<tr>
								<td>Style</td>
								<td>Sport</td>
							</tr>
							<tr>
								<td>Color</td>
								<td>Blue</td>
							</tr>
							<tr>
								<td>Gender</td>
								<td>Unisex</td>
							</tr>
							<tr>
								<td>Rain Cover</td>
								<td>No</td>
							</tr>
							<tr>
								<td>Exterior</td>
								<td>Solid Bag</td>
							</tr>
							<tr>
								<td>Closure Type</td>
								<td>Zipper</td>
							</tr>
							<tr>
								<td>Handle/Strap Type</td>
								<td>Soft Handle</td>
							</tr>
							<tr>
								<td>Size</td>
								<td>33cm x 18cm x 48cm</td>
							</tr>
							</tbody>
						</table>
					</div>
					<p data-prodtab-num="3" class="prod-tab-mob" data-prodtab="#prod-tab-3">Video</p>
					<div class="prod-tab prod-tab-video" id="prod-tab-3">
					
					</div>
					<p data-prodtab-num="4" class="prod-tab-mob" data-prodtab="#prod-tab-4">Articles (6)</p>
					<div class="prod-tab prod-tab-articles" id="prod-tab-4">
						<div class="flexslider post-rel-wrap" id="post-rel-car">
							<ul class="slides">
								<li class="posts-i">
									<Link  class="posts-i-img"  to="post.html"><span style={{background: "url(http://placehold.it/354x236)"}}></span></Link>
									<time class="posts-i-date" datetime="2017-01-01 08:18"><span>09</span> Feb</time>
									<div class="posts-i-info">
										<Link  class="posts-i-ctg"  to="blog.html">Articles</Link>
										<h3 class="posts-i-ttl"><Link   to="post.html">Adipisci corporis velit</Link></h3>
									</div>
								</li>
								<li class="posts-i">
									<Link  class="posts-i-img"  to="post.html"><span style={{background: "url(http://placehold.it/360x203)"}}></span></Link>
									<time class="posts-i-date" datetime="2017-01-01 08:18"><span>05</span> Jan</time>
									<div class="posts-i-info">
										<Link  class="posts-i-ctg"  to="blog.html">Reviews</Link>
										<h3 class="posts-i-ttl"><Link   to="post.html">Excepturi ducimus recusandae</Link></h3>
									</div>
								</li>
								<li class="posts-i">
									<Link  class="posts-i-img"  to="post.html"><span style={{background:"url(http://placehold.it/360x224)"}}></span></Link>
									<time class="posts-i-date" datetime="2017-01-01 08:18"><span>17</span> Apr</time>
									<div class="posts-i-info">
										<Link  class="posts-i-ctg"  to="blog.html">Reviews</Link>
										<h3 class="posts-i-ttl"><Link   to="post.html">Consequuntur minus numquam</Link></h3>
									</div>
								</li>
								<li class="posts-i">
									<Link  class="posts-i-img"  to="post.html"><span style={{background: "url(http://placehold.it/314x236)"}}></span></Link>
									<time class="posts-i-date" datetime="2017-01-01 08:18"><span>21</span> May</time>
									<div class="posts-i-info">
										<Link  class="posts-i-ctg"  to="blog.html">Articles</Link>
										<h3 class="posts-i-ttl"><Link   to="post.html">Non ex sapiente excepturi</Link></h3>
									</div>
								</li>
								<li class="posts-i">
									<Link  class="posts-i-img"  to="post.html"><span style= {{background: "url(http://placehold.it/318x236)"}}></span></Link>
									<time class="posts-i-date" datetime="2017-01-01 08:18"><span>24</span> Jan</time>
									<div class="posts-i-info">
										<Link  class="posts-i-ctg"  to="blog.html">Articles</Link>
										<h3 class="posts-i-ttl"><Link   to="post.html">Veritatis officiis</Link></h3>
									</div>
								</li>
								<li class="posts-i">
									<Link  class="posts-i-img"  to="post.html"><span style={{background: "url(http://placehold.it/354x236)"}}></span></Link>
									<time class="posts-i-date" datetime="2017-01-01 08:18"><span>08</span> Sep</time>
									<div class="posts-i-info">
										<Link  class="posts-i-ctg"  to="blog.html">Reviews</Link>
										<h3 class="posts-i-ttl"><Link   to="post.html">Ratione magni laudantium</Link></h3>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<p data-prodtab-num="5" class="prod-tab-mob" data-prodtab="#prod-tab-5">Reviews (3)</p>
					<div class="prod-tab" id="prod-tab-5">
						<ul class="reviews-list">
							<li class="reviews-i existimg">
								<div class="reviews-i-img">
									<img src="http://placehold.it/120x120" alt="Averill Sidony"/>
									<div class="reviews-i-rating">
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
									</div>
									<time datetime="2017-12-21 12:19:46" class="reviews-i-date">21 May 2017</time>
								</div>
								<div class="reviews-i-cont">
									<p>Numquam aliquam maiores ratione dolores ducimus, laborum hic similique delectus. Neque saepe nobis omnis laudantium itaque tempore voluptate harum error, illum nemo, reiciendis architecto, quam tenetur amet sit quisquam cum.<br/>Pariatur cum tempore eius nulla impedit cumque odit quos porro iste a voluptas, optio alias voluptate minima distinctio facere aliquid quasi, vero illum tenetur sed temporibus eveniet obcaecati.</p>
									<span class="reviews-i-margin"></span>
									<h3 class="reviews-i-ttl">Averill Sidony</h3>
									<p class="reviews-i-showanswer"><span data-open="Show answer" data-close="Hide answer">Show answer</span> <i class="fa fa-angle-down"></i></p>
								</div>
								<div class="reviews-i-answer">
									<p>Thanks for your feedback!<br/>
										Nostrum voluptate autem, eaque mollitia sed rem cum amet qui repudiandae libero quaerat veniam accusantium architecto minima impedit. Magni illo illum iure tempora vero explicabo, esse dolores rem at dolorum doloremque iusto laboriosam repellendus. <br/>Numquam eius voluptatum sint modi nihil exercitationem dolorum asperiores maiores provident repellat magnam vitae, consequatur omnis expedita, accusantium voluptas odit id.</p>
									<span class="reviews-i-margin"></span>
								</div>
							</li>
							<li class="reviews-i existimg">
								<div class="reviews-i-img">
									<img src="http://placehold.it/120x120" alt="Araminta Kristeen"/>
									<div class="reviews-i-rating">
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
									</div>
									<time datetime="2017-12-21 12:19:46" class="reviews-i-date">14 February 2017</time>
								</div>
								<div class="reviews-i-cont">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
									<span class="reviews-i-margin"></span>
									<h3 class="reviews-i-ttl">Araminta Kristeen</h3>
									<p class="reviews-i-showanswer"><span data-open="Show answer" data-close="Hide answer">Show answer</span> <i class="fa fa-angle-down"></i></p>
								</div>
								<div class="reviews-i-answer">
									Benjy, hi!<br/>
									Officiis culpa quos, quae optio quia.<br/>
									Amet sunt dolorem tempora, pariatur earum quidem adipisci error voluptates tempore iure, nobis optio temporibus voluptatum delectus natus accusamus incidunt provident sapiente explicabo vero labore hic quo?
									<span class="reviews-i-margin"></span>
								</div>
							</li>
							<li class="reviews-i">
								<div class="reviews-i-cont">
									<time datetime="2017-12-21 12:19:46" class="reviews-i-date">21 May 2017</time>
									<div class="reviews-i-rating">
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
									</div>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
									<span class="reviews-i-margin"></span>
									<h3 class="reviews-i-ttl">Jeni Margie</h3>
									<p class="reviews-i-showanswer"><span data-open="Show answer" data-close="Hide answer">Show answer</span> <i class="fa fa-angle-down"></i></p>
								</div>
								<div class="reviews-i-answer">
									Hello, Jeni Margie!<br/>
									Nostrum voluptate autem, eaque mollitia sed rem cum amet qui repudiandae libero quaerat veniam accusantium architecto minima impedit. Magni illo illum iure tempora vero explicabo, esse dolores rem at dolorum doloremque iusto laboriosam repellendus. <br/>Numquam eius voluptatum sint modi nihil exercitationem dolorum asperiores maiores provident repellat magnam vitae, consequatur omnis expedita, accusantium voluptas odit id.
									<span class="reviews-i-margin"></span>
								</div>
							</li>
						</ul>
						<div class="prod-comment-form">
							<h3>Add your review</h3>
							<form method="POST" action="#">
								<input type="text" placeholder="Name"/>
								<input type="text" placeholder="E-mail"/>
								<textarea placeholder="Your review"></textarea>
								<div class="prod-comment-submit">
									<input type="submit" value="Submit"/>
									<div class="prod-rating">
										<i class="fa fa-star-o" title="5"></i><i class="fa fa-star-o" title="4"></i><i class="fa fa-star-o" title="3"></i><i class="fa fa-star-o" title="2"></i><i class="fa fa-star-o" title="1"></i>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
            </div>
        );
    }
}

export default ProductTab;