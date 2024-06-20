import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ImageSlider from './components/ImageSlider';
import Category from './components/Category';
import OrganicPersonalCare from './components/OrganicPersonalCare';
import ResinCalculator from './components/ResinCalculator';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Logo from './images/logo.jpg';
import dandelion from './images/dandelion.jpg';
import lighthouseImg from './images/lighthouse.jpg';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const images = [lighthouseImg, dandelion, lighthouseImg, dandelion, lighthouseImg];


  const [cartItemstg, setCartItemsg] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  

  const addToCart = (item) => {
    setCart([...cart, item]);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setCartItemsg(cartItemstg + 1);
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 500);
    }, 1000);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const location = useLocation();
  console.log(isAnimating)

  return (
    <div className="App App-container">
      <div className="top-logo-container">
        <div className="logo-container-image">
          <img src={Logo} alt="logoparadise" className="image-Element" />
          <h2 className="logo-heading">Paradise</h2>
        </div>
        <div className="search-product-container">
          <div className="searchinputContainer">
            <div className="input-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
              <input type="text" className="inputElement" />
            </div>
            <button className="buttonElement">Search</button>
          </div>
          <div className="homeproductcontainer">
            <div className="containerHomeIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
              </svg>
            </div>
            <div className="nameCategorysContainer">
              <Link className="nameElement" to="/">
                <p className="nameCategory">View Product</p>
              </Link>
              <Link className="nameElement" onClick={() => scrollToSection('Category')}>
                <p className="nameCategory">New Arrival</p>
              </Link>
              <Link className="nameElement" onClick={() => scrollToSection('Category')}>
                <p className="nameCategory">Workshop</p>
              </Link>
              {location.pathname !== '/AllProducts' && (

                <Link className="nameElement" onClick={() => scrollToSection('Category')}>
                  <p className="nameCategory">Any Queries</p>
                </Link>
              )}

              {location.pathname !== '/AllProducts' && (
                <Link className="nameElement" to="/ResinCalculator">
                  <p className="nameCategory">Resin Calculator</p>
                </Link>
              )}
              {/* <Link className="nameElement" to="/cart">
                <p className="nameCategory">Cart ({cart.length})</p>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      {location.pathname === '/' && (
        <div className="silderContainer">
          <ImageSlider images={images} />
        </div>
      )}


      <div>

        <Link to="/cart">
          <div id="cart" className={`cart ${isShaking ? 'shake' : ''}`} data-totalitems={cart.length}>

            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512" fill="#fff">
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
          </div>
        </Link>


        {/* <div className="page-wrapper">
        <button id="addtocart" className={isAnimating ? 'sendtocart' : ''} onClick={addToCartg}>
          Add to Cart
          <span className="cart-item"></span>
        </button>
        
      </div> */}
      </div>


      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/organicpersonalcare" element={<OrganicPersonalCare />} />
        <Route path="/ResinCalculator" element={<ResinCalculator />} />
        <Route path="/AllProducts" element={<AllProducts addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cart} onRemoveItem={removeFromCart} />} />
      </Routes>
      <Footer />
    </div>
  );
}

function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default MainApp;
