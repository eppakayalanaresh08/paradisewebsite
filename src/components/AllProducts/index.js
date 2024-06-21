import React from 'react';
import { useLocation } from 'react-router-dom';

import './index.css';



function AllProducts({ addToCart}) {
   let imagearray=[]

  const location = useLocation();
  const {  name } = location.state || {};


  console.log(name,'params')
  if(name==='Organic personal care'){
   imagearray = [
      { id: 1, image: require('../../images/orgimg1.png'), name: 'Kiwi fruit', disprice: 200, price: 100, rating: 5 },
      { id: 2, image: require('../../images/orgimg2.png'), name: 'Avocado', disprice: 200, price: 100, rating: 5 },
      { id: 3, image: require('../../images/orgimg3.png'), name: 'papaya', disprice: 200, price: 100, rating: 5 },
      { id: 4, image: require('../../images/orgimg4.png'), name: 'watermelon', disprice: 200, price: 100, rating: 5 },
      { id: 5, image: require('../../images/orgimg1.png'), name: 'Kiwi fruit', disprice: 200, price: 100, rating: 5 },
      { id: 6, image: require('../../images/orgimg2.png'), name: 'Avocado', disprice: 200, price: 100, rating: 5 },
      { id: 7, image: require('../../images/orgimg3.png'), name: 'papaya', disprice: 200, price: 100, rating: 5 },
      { id: 8, image: require('../../images/orgimg4.png'), name: 'watermelon', disprice: 200, price: 100, rating: 5 },
      { id: 9, image: require('../../images/orgimg1.png'), name: 'Kiwi fruit', disprice: 200, price: 100, rating: 5 },
      { id: 10, image: require('../../images/orgimg4.png'), name: 'Avocado', disprice: 200, price: 100, rating: 5 },
      { id: 11, image: require('../../images/orgimg3.png'), name: 'papaya', disprice: 200, price: 100, rating: 5 },
      { id: 12, image: require('../../images/orgimg2.png'), name: 'watermelon', disprice: 200, price: 100, rating: 5 },
    ];
  }
  else if (name==='Organic food'){
    imagearray = [
      { id: 1, image: require('../../images/Producttwo/product1.webp'), name: 'Ultra Clear Firepit Crystal', disprice: 200, price: 100, rating: 5 },
      { id: 2, image: require('../../images/Producttwo/product2.webp'), name: 'Platinum Firepit Crystal', disprice: 200, price: 100, rating: 5 },
      { id: 3, image: require('../../images/Producttwo/product3.webp'), name: 'Brown Firepit Crystal', disprice: 200, price: 100, rating: 5 },
      { id: 4, image: require('../../images/Producttwo/product4.webp'), name: 'Teal Firepit Crystal', disprice: 200, price: 100, rating: 5 },
      { id: 5, image: require('../../images/Producttwo/product5.webp'), name: 'Black Firepit Crystal', disprice: 200, price: 100, rating: 5 },
      { id: 6, image: require('../../images/Producttwo/product6.webp'), name: 'Clear Firepit Crystal', disprice: 200, price: 100, rating: 5 },
      { id: 7, image: require('../../images/Producttwo/product7.webp'), name: 'Smokey Ash Firepit Crystal', disprice: 200, price: 100, rating: 5 },
      { id: 8, image: require('../../images/Producttwo/product8.webp'), name: 'Sapphire Blue Gold Firepit Crystal', disprice: 200, price: 100, rating: 5 },

    ];
  }
  else if (name==='Resin art'){
    imagearray = [
      { id: 1, image: require('../../images/ProductThree/product1.jpg'), name: 'Bentonite Clay      ', disprice: 200, price: 130, rating: 5 },
      { id: 2, image: require('../../images/ProductThree/product2.jpg'), name: 'Calamine Powder ', disprice: 200, price: 130, rating: 5 },
      { id: 3, image: require('../../images/ProductThree/product3.jpg'), name: 'French Pink Clay', disprice: 200, price: 150, rating: 5 },
      { id: 4, image: require('../../images/ProductThree/product4.jpg'), name: 'French Red Clay', disprice: 200, price: 190, rating: 5 },
      { id: 5, image: require('../../images/ProductThree/product5.jpg'), name: 'Kaolin Clay', disprice: 200, price: 190, rating: 5 },
      { id: 6, image: require('../../images/ProductThree/product6.jpg'), name: 'Multani Mitti', disprice: 200, price: 130, rating: 5 },
      { id: 7, image: require('../../images/ProductThree/product7.jpg'), name: 'Dead Sea Mud', disprice: 200, price: 100, rating: 5 },
      { id: 8, image: require('../../images/ProductThree/product8.jpg'), name: 'Rose clay', disprice: 200, price: 120, rating: 5 },
      { id: 9, image: require('../../images/ProductThree/product9.jpg'), name: 'Green Clay', disprice: 200, price: 130, rating: 5 },
      { id: 10, image: require('../../images/ProductThree/product10.jpg'), name: 'Kaolin Clay', disprice: 200, price: 140, rating: 5 },
      // { id: 11, image: require('../../images/orgimg3.png'), name: 'watermelon', disprice: 200, price: 100, rating: 5 },
      // { id: 12, image: require('../../images/orgimg2.png'), name: 'watermelon', disprice: 200, price: 100, rating: 5 },
    ];
  }
  else if (name==='Silicon mould'){
    imagearray = [
      { id: 1, image: require('../../images/ProductFour/product1.jpg'), name: 'Transparent Shampoo Base', disprice: 200, price: 100, rating: 5 },
      { id: 2, image: require('../../images/ProductFour/product2.jpg'), name: 'Pearly Shampoo Base      ', disprice: 200, price: 100, rating: 5 },
      { id: 3, image: require('../../images/ProductFour/product3.jpg'), name: 'Herbal Shampoo Base', disprice: 200, price: 100, rating: 5 },
      { id: 4, image: require('../../images/ProductFour/product4.jpg'), name: 'Transparent Body Wash', disprice: 200, price: 100, rating: 5 },
      { id: 5, image: require('../../images/ProductFour/product5.jpg'), name: 'Shower Gel Base', disprice: 200, price: 100, rating: 5 },
      { id: 6, image: require('../../images/ProductFour/product6.jpg'), name: 'Pearly Facewash Base', disprice: 200, price: 100, rating: 5 },
      { id: 7, image: require('../../images/ProductFour/product7.jpg'), name: 'Castile Liquid Soap Base', disprice: 200, price: 100, rating: 5 },
      { id: 8, image: require('../../images/ProductFour/product8.jpg'), name: 'Hair Serum Base', disprice: 200, price: 100, rating: 5 },
      
    ];
  }
  else if (name==='Candle'){
    imagearray = [
      { id: 1, image: require('../../images/ProductFive/product1.jpg'), name: 'Yellow Beeswax Pellets ', disprice: 200, price: 100, rating: 5 },
      { id: 2, image: require('../../images/ProductFive/product2.jpg'), name: 'Beeswax-Natural,Tripled Filtered', disprice: 200, price: 100, rating: 5 },
      { id: 3, image: require('../../images/ProductFive/product3.jpg'), name: 'Gel Wax      ', disprice: 200, price: 100, rating: 5 },
      { id: 4, image: require('../../images/ProductFive/product4.jpg'), name: 'Soy wax chunks (AA+)      ', disprice: 200, price: 100, rating: 5 },
      { id: 5, image: require('../../images/ProductFive/product5.jpg'), name: 'Soy wax (flakes)', disprice: 200, price: 100, rating: 5 },
      { id: 6, image: require('../../images/ProductFive/product6.jpg'), name: 'Beeswax refined white      ', disprice: 200, price: 100, rating: 5 },
      { id: 7, image: require('../../images/ProductFive/product7.jpg'), name: 'White Beeswax Pellets / Beeswax pastilles', disprice: 200, price: 100, rating: 5 },
    
    ];
  }
  else if (name==='Laundry & Cleaning'){
    imagearray = [
      { id: 1, image: require('../../images/ProductSix/product1.webp'), name: 'CLEANING', disprice: 200, price: 100, rating: 5 },
      { id: 2, image: require('../../images/ProductSix/product2.jpg'), name: 'LAUNDRY SERVICE', disprice: 200, price: 100, rating: 5 },
      { id: 3, image: require('../../images/ProductSix/product3.jpg'), name: 'DRY CLEANING', disprice: 200, price: 100, rating: 5 },
      { id: 4, image: require('../../images/ProductSix/product4.jpg'), name: 'LINEN, UPHOLSTERY, & AREA RUG CLEANING      ', disprice: 200, price: 100, rating: 5 },
      { id: 5, image: require('../../images/ProductSix/product5.jpg'), name: 'PILLOW REFURBISHING', disprice: 200, price: 100, rating: 5 },
      { id: 6, image: require('../../images/ProductSix/product6.jpg'), name: 'LEATHER & SUEDE CLEANING', disprice: 200, price: 500, rating: 1 },

    ];
  }


  

  return (
    <>
      <div className="product-container">
        {imagearray.map((item) => (
          <div key={item.id} className="product">
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-details">
              <h2 className="product-name">{item.name}</h2>
              <p className="product-price">Discounted Price: ${item.disprice}</p>
              <p className="product-original-price">Original Price: ${item.price}</p>
              <p className="product-rating">Rating: {item.rating} stars</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllProducts;
