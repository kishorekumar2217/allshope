import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Items = () => {
   


    const [cart, setCart] = useState(() => {
        const localData =
            localStorage.getItem('cart');
        return localData !== null
            ? JSON.parse(localData)
            : [];
         
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])
    
  
    const [product] = useState([
        {
            name: 'abcd',
            price: 10,
            image: '../assets/img/catalog/a1.jpg',
            image1: '../assets/img/catalog/a2.jpg',
            image2: '../assets/img/catalog/a3.jpg',
            image3: '../assets/img/catalog/a4.jpg',
            count: 2
        },
        {
            name: 'xxx',
            price: 20,
            image: '../assets/img/catalog/b1.jpg',
            image1: '../assets/img/catalog/b2.jpg',
            image2: '../assets/img/catalog/b4.jpg',
            image3: '../assets/img/catalog/b5.jpg',
            count: 1
        },

    ]

    )

    const addProduct = (product) => {
        setCart([...cart, product]);
      
           
    }
    return (
        <div>
            <div class="prod-items section-items prod-list2">


                {

                    product.map((item, index) =>
                    (

                        <div class="prodlist-i" key={index}>
                            <Link class="list-img-carousel prodlist-i-img" to="product.html">
                                <img src={item.image} alt="Adipisci aperiam commodi" />
                                <img src={item.image1} alt="Adipisci aperiam commodi" />
                                <img src={item.image2} alt="Adipisci aperiam commodi" />
                                <img src={item.image3} alt="Adipisci aperiam commodi" />
                            </Link>
                            <div class="prodlist-i-cont">
                                <h3> {item.name} </h3>
                                <p class="prodlist-i-info">
                                    <Link to="#" class="prodlist-i-favorites"><i class="fa fa-heart"></i> Add to wishlist </Link>
                                    <Link to="#" class="qview-btn prodlist-i-qview"><i class="fa fa-search"></i> Quick view </Link>
                                    <Link class="prodlist-i-compare" to="#"><i class="fa fa-bar-chart"></i> Compare </Link>
                                </p>
                                <div class="prodlist-i-txt">
                                    Quisquam totam quas veritatis dolor voluptates, laudantium repellendus. Cupiditate repellat tempora consequatur sequi, neque                        </div>
                                <div class="prodlist-i-action">
                                    <span class="prodlist-i-price">
                                        <b>{item.price}</b>
                                    </span>
                                    <p class="prodlist-i-qnt">
                                        <input value="1" type="text" />
                                        <Link to="#" class="prodlist-i-plus"><i class="fa fa-angle-up"></i> </Link>
                                        <Link to="#" class="prodlist-i-minus"><i class="fa fa-angle-down"></i> </Link>
                                    </p>
                                    <p class="prodlist-i-addwrap">
                                        <button class="prodlist-i-add" onClick={() => addProduct(item)}> Add to cart</button>
                                    </p>
                                </div>
                                <div class="prodlist-i-skuwrap">
                                    <div class="prodlist-i-skuitem">
                                        <p class="prodlist-i-skuttl">Color</p>
                                        <ul class="prodlist-i-skucolor">
                                            <li class="active"><img src="../assets/img/color/blue.jpg" alt="" /></li>
                                            <li><img src="../assets/img/color/red.jpg" alt="" /></li>
                                            <li><img src="../assets/img/color/green.jpg" alt="" /></li>
                                        </ul>
                                    </div>
                                    <div class="prodlist-i-skuitem">
                                        <p class="prodlist-i-skuttl">Clothes sizes</p>
                                        <div>
                                            <select name="size" >
                                                <option value="S ">S </option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option class="active" value="XS">XS</option>
                                                <option value="XL">XL</option>
                                                <option value="XXL">XXL</option>
                                                <option value="XXXL">XXXL</option>

                                            </select>
                                           
                                         
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ul class="prodlist-i-props2">
                                <li><span class="prodlist-i-propttl"><span>Exterior</span></span> <span class="prodlist-i-propval">Silt Pocket</span></li>
                                <li><span class="prodlist-i-propttl"><span>Material</span></span> <span class="prodlist-i-propval">PU</span></li>
                                <li><span class="prodlist-i-propttl"><span>Occasion</span></span> <span class="prodlist-i-propval">Versatile</span></li>
                                <li><span class="prodlist-i-propttl"><span>Shape</span></span> <span class="prodlist-i-propval">Casual Tote</span></li>
                                <li><span class="prodlist-i-propttl"><span>Pattern Type</span></span> <span class="prodlist-i-propval">Solid</span></li>
                                <li><span class="prodlist-i-propttl"><span>Style</span></span> <span class="prodlist-i-propval">American Style</span></li>
                                <li><span class="prodlist-i-propttl"><span>Hardness</span></span> <span class="prodlist-i-propval">Soft</span></li>
                                <li><span class="prodlist-i-propttl"><span>Decoration</span></span> <span class="prodlist-i-propval">None</span></li>
                                <li><span class="prodlist-i-propttl"><span>Closure Type</span></span> <span class="prodlist-i-propval">Zipper</span></li>
                            </ul>
                        </div>
                    )
                    )
                }



</div>


        </div>
    );

}

export default Items;