import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loadjs from 'loadjs';

class Product extends Component {
	componentDidMount(){
        loadjs(['../assets/js/plugins.js','../assets/js/main.js','../assets/js/']);
    }
    render() {
        return (
    <>
	
    <main>
	<section class="container">


		<ul class="b-crumbs">
			<li>
				<Link to="/">
					Home
				</Link>
			</li>
			<li>
				<Link to="/cataloglist">
					Catalog
				</Link>
			</li>
			<li>
				<Link  to="catalog-list.html">
					Women
				</Link>
			</li>
			<li>
				<span>Aperiam nihil veniam</span>
			</li>
		</ul>
		<h1 class="main-ttl"><span>Aperiam nihil veniam</span></h1>
		{/* <!-- Single Product - start --> */}
		<div class="prod-wrap">

			{/* <!-- Product Images --> */}
			<div class="prod-slider-wrap">
				<div class="prod-slider">
					<ul class="prod-slider-car">
						<li>
							<Link data-fancybox-group="product" class="fancy-img"  to="http://placehold.it/500x642">
								<img src="../assets/img/product/1.jpg" alt=""/>
							</Link>
						</li>
						<li>
							<Link data-fancybox-group="product" class="fancy-img"  to="http://placehold.it/500x722">
								<img src="../assets/img/product/2.jpg" alt=""/>
							</Link>
						</li>
						<li>
							<Link data-fancybox-group="product" class="fancy-img"  to="http://placehold.it/500x722">
								<img src="../assets/img/product/3.jpg" alt=""/>
							</Link>
						</li>
						<li>
							<Link data-fancybox-group="product" class="fancy-img"  to="http://placehold.it/500x722">
								<img src="../assets/img/product/4.jpg" alt=""/>
							</Link>
						</li>
						<li>
							<Link data-fancybox-group="product" class="fancy-img"  to="http://placehold.it/500x722">
								<img src="../assets/img/product/5.jpg" alt=""/>
							</Link>
						</li>
						<li>
							<Link data-fancybox-group="product" class="fancy-img"  to="http://placehold.it/500x722">
								<img src="../assets/img/product/6.jpg" alt=""/>
							</Link>
						</li>
						<li>
							<Link data-fancybox-group="product" class="fancy-img"  to="http://placehold.it/500x722">
								<img src="../assets/img/product/7.jpg" alt=""/>
							</Link>
						</li>
						<li>
							<Link data-fancybox-group="product" class="fancy-img"  to="http://placehold.it/500x722">
								<img src="../assets/img/product/8.jpg"alt=""/>
							</Link>
						</li>
					</ul>
				</div>
				<div class="prod-thumbs">
					<ul class="prod-thumbs-car">
						<li>
							<Link data-slide-index="0"  to="#">
								<img src="../assets/img/product/1.jpg"alt=""/>
							</Link>
						</li>
						<li>
							<Link data-slide-index="1"  to="#">
								<img src="../assets/img/product/2.jpg" alt=""/>
							</Link>
						</li>
						<li>
							<Link data-slide-index="2"  to="#">
								<img src="../assets/img/product/3.jpg" alt=""/>
							</Link>
						</li>
						<li>
							<Link data-slide-index="3"  to="#">
								<img src="../assets/img/product/4.jpg" alt=""/>
							</Link>
						</li>
						<li>
							<Link data-slide-index="4"  to="#">
								<img src="../assets/img/product/5.jpg"alt=""/>
							</Link>
						</li>
						<li>
							<Link data-slide-index="5"  to="#">
								<img src="../assets/img/product/6.jpg" alt=""/>
							</Link>
						</li>
						<li>
							<Link data-slide-index="6"  to="#">
								<img src="../assets/img/product/7.jpg" alt=""/>
							</Link>
						</li>
						<li>
							<Link data-slide-index="7"  to="#">
								<img src="../assets/img/product/8.jpg" alt=""/>
							</Link>
						</li>
					</ul>
				</div>
			</div>

			{/* <!-- Product Description/Info --> */}
			<div class="prod-cont">
				<div class="prod-cont-txt">
					Quis temporibus hic reprehenderit explicabo odio earum maxime cupiditate mollitia magni laboriosam illum adipisci, ipsam, repellendus optio esse dolorem incidunt debitis eius voluptate expedita assumenda
				</div>
				<p class="prod-actions">
					<Link  to="#" class="prod-favorites"><i class="fa fa-heart"></i> Wishlist</Link>
					<Link  to="#" class="prod-compare"><i class="fa fa-bar-chart"></i> Compare</Link>
				</p>
				<div class="prod-skuwrap">
					<p class="prod-skuttl">Color</p>
					<ul class="prod-skucolor">
						<li class="active">
							<img src="../assets/img/color/blue.jpg" alt=""/>
						</li>
						<li>
							<img src="../assets/img/color/red.jpg" alt=""/>
						</li>
						<li>
							<img src="../assets/img/color/green.jpg" alt=""/>
						</li>
						<li>
							<img src="../assets/img/color/yellow.jpg" alt=""/>
						</li>
						<li>
							<img src="../assets/img/color/purple.jpg" alt=""/>
						</li>
					</ul>
					<p class="prod-skuttl">CLOTHING SIZES</p>
					<div class="offer-props-select">
						<p>XL</p>
						<ul>
							<li><Link  to="#">XS</Link></li>
							<li><Link  to="#">S</Link></li>
							<li><Link  to="#">M</Link></li>
							<li class="active"><Link  to="#">XL</Link></li>
							<li><Link  to="#">L</Link></li>
							<li><Link  to="#">4XL</Link></li>
							<li><Link  to="#">XXL</Link></li>
						</ul>
					</div>
				</div>
				<div class="prod-info">
					<p class="prod-price">
						<b class="item_current_price">$135</b>
					</p>
					<p class="prod-qnt">
						<input value="1" type="text"/>
						<Link  to="#" class="prod-plus"><i class="fa fa-angle-up"></i></Link>
						<Link  to="#" class="prod-minus"><i class="fa fa-angle-down"></i></Link>
					</p>
					<p class="prod-addwrap">
						<Link  to="#" class="prod-add" rel="nofollow">Add to cart</Link>
					</p>
				</div>
				<ul class="prod-i-props">
					<li>
						<b>SKU</b> 05464207
					</li>
					<li>
						<b>Material</b> Nylon
					</li>
					<li>
						<b>Pattern Type</b> Solid
					</li>
					<li>
						<b>Wash</b> Colored
					</li>
					<li>
						<b>Style</b> Sport
					</li>
					<li>
						<b>Color</b> Blue
					</li>
					<li>
						<b>Gender</b> Unisex
					</li>
					<li>
						<b>Rain Cover</b> No
					</li>
					<li>
						<b>Exterior</b> Solid Bag
					</li>
					<li><Link  to="#" class="prod-showprops">All Features</Link></li>
				</ul>
			</div>

			{/* <!-- Product Tabs --> */}
			<div class="prod-tabs-wrap">
				<ul class="prod-tabs">
					<li><Link data-prodtab-num="1" class="active"  to="#" data-prodtab="#prod-tab-1">Description</Link></li>
					<li><Link data-prodtab-num="2" id="prod-props"  to="#" data-prodtab="#prod-tab-2">Features</Link></li>
					<li><Link data-prodtab-num="3"  to="#" data-prodtab="#prod-tab-3">Video</Link></li>
					<li><Link data-prodtab-num="4"  to="#" data-prodtab="#prod-tab-4">Articles (6)</Link></li>
					<li><Link data-prodtab-num="5"  to="#" data-prodtab="#prod-tab-5">Reviews (3)</Link></li>
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
						<iframe  title="frame" width="853" height="480" src="https://www.youtube.com/embed/kaOVHSkDoPY?rel=0&amp;showinfo=0" allowfullscreen></iframe>
					</div>
					<p data-prodtab-num="4" class="prod-tab-mob" data-prodtab="#prod-tab-4">Articles (6)</p>
					<div class="prod-tab prod-tab-articles" id="prod-tab-4">
						<div class="flexslider post-rel-wrap" id="post-rel-car">
							<ul class="slides">
								<li class="posts-i">
									<Link class="posts-i-img"  to="post.html"><span style={{background:" url(http://placehold.it/354x236)"}}></span></Link>
									<time class="posts-i-date" datetime="2017-01-01 08:18"><span>09</span> Feb</time>
									<div class="posts-i-info">
										<Link class="posts-i-ctg"  to="blog.html">Articles</Link>
										<h3 class="posts-i-ttl"><Link  to="post.html">Adipisci corporis velit</Link></h3>
									</div>
								</li>
								<li class="posts-i">
									<Link class="posts-i-img"  to="post.html"><span style={{background: "url(http://placehold.it/360x203)"}}></span></Link>
									<time class="posts-i-date" datetime="2017-01-01 08:18"><span>05</span> Jan</time>
									<div class="posts-i-info">
										<Link class="posts-i-ctg"  to="blog.html">Reviews</Link>
										<h3 class="posts-i-ttl"><Link  to="post.html">Excepturi ducimus recusandae</Link></h3>
									</div>
								</li>
								<li class="posts-i">
									<Link class="posts-i-img"  to="post.html"><span style={{background:" url(http://placehold.it/360x224)"}}></span></Link>
									<time class="posts-i-date" datetime="2017-01-01 08:18"><span>17</span> Apr</time>
									<div class="posts-i-info">
										<Link class="posts-i-ctg"  to="blog.html">Reviews</Link>
										<h3 class="posts-i-ttl"><Link  to="post.html">Consequuntur minus numquam</Link></h3>
									</div>
								</li>
								<li class="posts-i">
									<Link class="posts-i-img"  to="post.html"><span style={{background: "url(http://placehold.it/314x236)"}}></span></Link>
									<time class="posts-i-date" datetime="2017-01-01 08:18"><span>21</span> May</time>
									<div class="posts-i-info">
										<Link class="posts-i-ctg"  to="blog.html">Articles</Link>
										<h3 class="posts-i-ttl"><Link  to="post.html">Non ex sapiente excepturi</Link></h3>
									</div>
								</li>
								<li class="posts-i">
									<Link class="posts-i-img"  to="post.html"><span style={{background: "url(http://placehold.it/318x236)"}}></span></Link>
									<time class="posts-i-date" datetime="2017-01-01 08:18"><span>24</span> Jan</time>
									<div class="posts-i-info">
										<Link class="posts-i-ctg"  to="blog.html">Articles</Link>
										<h3 class="posts-i-ttl"><Link  to="post.html">Veritatis officiis</Link></h3>
									</div>
								</li>
								<li class="posts-i">
									<Link class="posts-i-img"  to="post.html"><span style={{background: "url(http://placehold.it/354x236)"}}></span></Link>
									<time class="posts-i-date" datetime="2017-01-01 08:18"><span>08</span> Sep</time>
									<div class="posts-i-info">
										<Link class="posts-i-ctg"  to="blog.html">Reviews</Link>
										<h3 class="posts-i-ttl"><Link  to="post.html">Ratione magni laudantium</Link></h3>
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
		{/* <!-- Single Product - end --> */}

		{/* <!-- Related Products - start --> */}
		<div class="prod-related">
			<h2><span>Related products</span></h2>
			<div class="prod-related-car" id="prod-related-car">
				<ul class="slides">
					<li class="prod-rel-wrap">
						<div class="prod-rel">
							<Link  to="product.html" class="prod-rel-img">
								<img src="../assets/img/realated/1.jpg" alt="Adipisci aperiam commodi"/>
							</Link>
							<div class="prod-rel-cont">
								<h3><Link  to="product.html">Adipisci aperiam commodi</Link></h3>
								<p class="prod-rel-price">
									<b>$59</b>
								</p>
								<div class="prod-rel-actions">
									<Link title="Wishlist"  to="#" class="prod-rel-favorites"><i class="fa fa-heart"></i></Link>
									<Link title="Compare"  to="#" class="prod-rel-compare"><i class="fa fa-bar-chart"></i></Link>
									<p class="prod-i-addwrap">
										<Link title="Add to cart"  to="#" class="prod-i-add"><i class="fa fa-shopping-cart"></i></Link>
									</p>
								</div>
							</div>
						</div>



						<div class="prod-rel">
							<Link  to="product.html" class="prod-rel-img">
								<img src="../assets/img/realated/2.jpg" alt="Nulla numquam obcaecati"/>
							</Link>
							<div class="prod-rel-cont">
								<h3><Link  to="product.html">Nulla numquam obcaecati</Link></h3>
								<p class="prod-rel-price">
									<b>$48</b>
								</p>
								<div class="prod-rel-actions">
									<Link title="Wishlist"  to="#" class="prod-rel-favorites"><i class="fa fa-heart"></i></Link>
									<Link title="Compare"  to="#" class="prod-rel-compare"><i class="fa fa-bar-chart"></i></Link>
									<p class="prod-i-addwrap">
										<Link title="Add to cart"  to="#" class="prod-i-add"><i class="fa fa-shopping-cart"></i></Link>
									</p>
								</div>
							</div>
						</div>



						<div class="prod-rel">
							<Link  to="product.html" class="prod-rel-img">
								<img src="../assets/img/realated/3.jpg" alt="Dignissimos eaque earum"/>
							</Link>
							<div class="prod-rel-cont">
								<h3><Link  to="product.html">Dignissimos eaque earum</Link></h3>
								<p class="prod-rel-price">
									<b>$37</b>
								</p>
								<div class="prod-rel-actions">
									<Link title="Wishlist"  to="#" class="prod-rel-favorites"><i class="fa fa-heart"></i></Link>
									<Link title="Compare"  to="#" class="prod-rel-compare"><i class="fa fa-bar-chart"></i></Link>
									<p class="prod-i-addwrap">
										<Link title="Add to cart"  to="#" class="prod-i-add"><i class="fa fa-shopping-cart"></i></Link>
									</p>
								</div>
							</div>
						</div>



						<div class="prod-rel">
							<Link  to="product.html" class="prod-rel-img">
								<img src="../assets/img/realated/4.jpg" alt="Porro quae quasi"/>
							</Link>
							<div class="prod-rel-cont">
								<h3><Link  to="product.html">Porro quae quasi</Link></h3>
								<p class="prod-rel-price">
									<b>$85</b>
								</p>
								<div class="prod-rel-actions">
									<Link title="Wishlist"  to="#" class="prod-rel-favorites"><i class="fa fa-heart"></i></Link>
									<Link title="Compare"  to="#" class="prod-rel-compare"><i class="fa fa-bar-chart"></i></Link>
									<p class="prod-i-addwrap">
										<Link title="Add to cart"  to="#" class="prod-i-add"><i class="fa fa-shopping-cart"></i></Link>
									</p>
								</div>
							</div>
						</div>

					</li>
					<li class="prod-rel-wrap">
						<div class="prod-rel">
							<Link  to="product.html" class="prod-rel-img">
								<img src="../assets/img/realated/5.jpg" alt="Sunt temporibus velit"/>
							</Link>
							<div class="prod-rel-cont">
								<h3><Link  to="product.html">Sunt temporibus velit</Link></h3>
								<p class="prod-rel-price">
									<b>$115</b>
								</p>
								<div class="prod-rel-actions">
									<Link title="Wishlist"  to="#" class="prod-rel-favorites"><i class="fa fa-heart"></i></Link>
									<Link title="Compare"  to="#" class="prod-rel-compare"><i class="fa fa-bar-chart"></i></Link>
									<p class="prod-i-addwrap">
										<Link title="Add to cart"  to="#" class="prod-i-add"><i class="fa fa-shopping-cart"></i></Link>
									</p>
								</div>
							</div>
						</div>



						<div class="prod-rel">
							<Link  to="product.html" class="prod-rel-img">
								<img src="../assets/img/realated/6.jpg" alt="Harum illum incidunt"/>
							</Link>
							<div class="prod-rel-cont">
								<h3><Link  to="product.html">Harum illum incidunt</Link></h3>
								<p class="prod-rel-price">
									<b>$130</b>
								</p>
								<div class="prod-rel-actions">
									<Link title="Wishlist"  to="#" class="prod-rel-favorites"><i class="fa fa-heart"></i></Link>
									<Link title="Compare"  to="#" class="prod-rel-compare"><i class="fa fa-bar-chart"></i></Link>
									<p class="prod-i-addwrap">
										<Link title="Add to cart"  to="#" class="prod-i-add"><i class="fa fa-shopping-cart"></i></Link>
									</p>
								</div>
							</div>
						</div>



						<div class="prod-rel">
							<Link  to="product.html" class="prod-rel-img">
								<img src="../assets/img/realated/7.jpg" alt="Reprehenderit rerum"/>
							</Link>
							<div class="prod-rel-cont">
								<h3><Link  to="product.html">Reprehenderit rerum</Link></h3>
								<p class="prod-rel-price">
									<b>$210</b>
								</p>
								<div class="prod-rel-actions">
									<Link title="Wishlist"  to="#" class="prod-rel-favorites"><i class="fa fa-heart"></i></Link>
									<Link title="Compare"  to="#" class="prod-rel-compare"><i class="fa fa-bar-chart"></i></Link>
									<p class="prod-i-addwrap">
										<Link title="Add to cart"  to="#" class="prod-i-add"><i class="fa fa-shopping-cart"></i></Link>
									</p>
								</div>
							</div>
						</div>



						<div class="prod-rel">
							<Link  to="product.html" class="prod-rel-img">
								<img src="../assets/img/realated/8.jpg" alt="Quae quasi adipisci alias"/>
							</Link>
							<div class="prod-rel-cont">
								<h3><Link  to="product.html">Quae quasi adipisci alias</Link></h3>
								<p class="prod-rel-price">
									<b>$85</b>
								</p>
								<div class="prod-rel-actions">
									<Link title="Wishlist"  to="#" class="prod-rel-favorites"><i class="fa fa-heart"></i></Link>
									<Link title="Compare"  to="#" class="prod-rel-compare"><i class="fa fa-bar-chart"></i></Link>
									<p class="prod-i-addwrap">
										<Link title="Add to cart"  to="#" class="prod-i-add"><i class="fa fa-shopping-cart"></i></Link>
									</p>
								</div>
							</div>
						</div>

					</li>
					<li class="prod-rel-wrap">
						<div class="prod-rel">
							<Link  to="product.html" class="prod-rel-img">
								<img src="../assets/img/realated/9.jpg" alt="Maxime molestias necessitatibus nobis"/>
							</Link>
							<div class="prod-rel-cont">
								<h3><Link  to="product.html">Maxime molestias necessitatibus nobis</Link></h3>
								<p class="prod-rel-price">
									<b>$95</b>
								</p>
								<div class="prod-rel-actions">
									<Link title="Wishlist"  to="#" class="prod-rel-favorites"><i class="fa fa-heart"></i></Link>
									<Link title="Compare"  to="#" class="prod-rel-compare"><i class="fa fa-bar-chart"></i></Link>
									<p class="prod-i-addwrap">
										<Link title="Add to cart"  to="#" class="prod-i-add"><i class="fa fa-shopping-cart"></i></Link>
									</p>
								</div>
							</div>
						</div>



						<div class="prod-rel">
							<Link  to="product.html" class="prod-rel-img">
								<img src="../assets/img/realated/10.jpg" alt="Facilis illum"/>
							</Link>
							<div class="prod-rel-cont">
								<h3><Link  to="product.html">Facilis illum</Link></h3>
								<p class="prod-rel-price">
									<b>$150</b>
								</p>
								<div class="prod-rel-actions">
									<Link title="Wishlist"  to="#" class="prod-rel-favorites"><i class="fa fa-heart"></i></Link>
									<Link title="Compare"  to="#" class="prod-rel-compare"><i class="fa fa-bar-chart"></i></Link>
									<p class="prod-i-addwrap">
										<Link title="Add to cart"  to="#" class="prod-i-add"><i class="fa fa-shopping-cart"></i></Link>
									</p>
								</div>
							</div>
						</div>

					</li>
				</ul>
			</div>
		</div>
		{/* <!-- Related Products - end --> */}

	</section>
</main>


        
            </>
        );
    }
}

export default Product;