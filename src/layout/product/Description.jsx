import React, { Component } from 'react';
import loadjs from 'loadjs';
import { Link } from 'react-router-dom';


class Description extends Component {
    componentDidMount(){
        loadjs(['../assets/js/plugins.js','../assets/js/main.js']);
    }
    render() {
        return (
            <div>
                <main>
	<section class="container">
    <ul class="b-crumbs">
			<li>
				<Link  to="index.html">
					Home
				</Link> 
			</li>
			<li>
				<Link  to="catalog-list.html">
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
        <div class="prod-wrap">
        <div class="prod-slider-wrap">
				<div class="prod-slider">
					<ul class="prod-slider-car">
						<li>
							<Link data-fancybox-group="product" class="fancy-img"  to="http://placehold.it/500x642">
								<img src="http://placehold.it/500x642" alt=""/>
							</Link> 
						</li>
						<li>
							<Link data-fancybox-group="product" class="fancy-img"  to="http://placehold.it/500x722">
								<img src="http://placehold.it/500x722" alt=""/>
							</Link> 
						</li>
						<li>
							<Link data-fancybox-group="product" class="fancy-img"  to="http://placehold.it/500x722">
								<img src="http://placehold.it/500x722" alt=""/>
							</Link> 
						</li>
						<li>
							<Link data-fancybox-group="product" class="fancy-img"  to="http://placehold.it/500x722">
								<img src="http://placehold.it/500x722" alt=""/>
							</Link> 
						</li>
						<li>
							<Link data-fancybox-group="product" class="fancy-img"  to="http://placehold.it/500x722">
								<img src="http://placehold.it/500x722" alt=""/>
							</Link> 
						</li>
						<li>
							<Link data-fancybox-group="product" class="fancy-img"  to="http://placehold.it/500x722">
								<img src="http://placehold.it/500x722" alt=""/>
							</Link> 
						</li>
						<li>
							<Link data-fancybox-group="product" class="fancy-img"  to="http://placehold.it/500x722">
								<img src="http://placehold.it/500x722" alt=""/>
							</Link> 
						</li>
						<li>
							<Link data-fancybox-group="product" class="fancy-img"  to="http://placehold.it/500x722">
								<img src="http://placehold.it/500x722" alt=""/>
							</Link> 
						</li>
					</ul>
				</div>
				<div class="prod-thumbs">
					<ul class="prod-thumbs-car">
						<li>
							<Link data-slide-index="0"  to="#">
								<img src="http://placehold.it/500x642" alt=""/>
							</Link> 
						</li>
						<li>
							<Link data-slide-index="1"  to="#">
								<img src="http://placehold.it/500x722" alt=""/>
							</Link> 
						</li>
						<li>
							<Link data-slide-index="2"  to="#">
								<img src="http://placehold.it/500x722" alt=""/>
							</Link> 
						</li>
						<li>
							<Link data-slide-index="3"  to="#">
								<img src="http://placehold.it/500x722" alt=""/>
							</Link> 
						</li>
						<li>
							<Link data-slide-index="4"  to="#">
								<img src="http://placehold.it/500x722" alt=""/>
							</Link> 
						</li>
						<li>
							<Link data-slide-index="5"  to="#">
								<img src="http://placehold.it/500x722" alt=""/>
							</Link> 
						</li>
						<li>
							<Link data-slide-index="6"  to="#">
								<img src="http://placehold.it/500x722" alt=""/>
							</Link> 
						</li>
						<li>
							<Link data-slide-index="7"  to="#">
								<img src="http://placehold.it/500x722" alt=""/>
							</Link> 
						</li>
					</ul>
				</div>
			</div>

        </div>

            </section>
</main>
</div>
   )
    }
}
export default Description;