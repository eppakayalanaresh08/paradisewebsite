import React from 'react';
import './index.css';

function AllProducts({ addToCart }) {
  const imagearray = [
    { id: 1, image: require('../../images/orgimg1.png'), name: 'watermelon', disprice: 200, price: 100, rating: 5 },
    { id: 2, image: require('../../images/orgimg2.png'), name: 'watermelon', disprice: 200, price: 100, rating: 5 },
    { id: 3, image: require('../../images/orgimg3.png'), name: 'watermelon', disprice: 200, price: 100, rating: 5 },
    { id: 4, image: require('../../images/orgimg4.png'), name: 'watermelon', disprice: 200, price: 100, rating: 5 },
    { id: 5, image: require('../../images/orgimg1.png'), name: 'watermelon', disprice: 200, price: 100, rating: 5 },
    { id: 6, image: require('../../images/orgimg2.png'), name: 'watermelon', disprice: 200, price: 100, rating: 5 },
    { id: 7, image: require('../../images/orgimg3.png'), name: 'watermelon', disprice: 200, price: 100, rating: 5 },
    { id: 8, image: require('../../images/orgimg4.png'), name: 'watermelon', disprice: 200, price: 100, rating: 5 },
    { id: 9, image: require('../../images/orgimg1.png'), name: 'watermelon', disprice: 200, price: 100, rating: 5 },
    { id: 10, image: require('../../images/orgimg4.png'), name: 'watermelon', disprice: 200, price: 100, rating: 5 },
    { id: 11, image: require('../../images/orgimg3.png'), name: 'watermelon', disprice: 200, price: 100, rating: 5 },
    { id: 12, image: require('../../images/orgimg2.png'), name: 'watermelon', disprice: 200, price: 100, rating: 5 },
  ];

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
