import "./App.css";

import ImageSlider from "./components/ImageSlider";
// import flowerImg from './images/flower.jpg'
import dandelion from "./images/dandelion.jpg";
import lighthouseImg from "./images/lighthouse.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Category from "./components/Category";
import Logo from './images/logo.jpg'


function App() {
  const images = [
    lighthouseImg,
    // flowerImg,
    dandelion,
    lighthouseImg,
    // flowerImg,
    dandelion,
    lighthouseImg,
  ];
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <Router>


      <div className="App App-container">
        <div className="top-logo-container">
          <div>
            <img src={Logo} alt='logoparadise' className="image-Element" />
            <h2 className="logo-heading">Fabulous Fairies</h2>
          </div>
          <div className="search-product-container">
            <div className="searchinputContainer">
              <div className="input-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>          <input type="text" className="inputElement" />
              </div>
              <button className="buttonElement">Search</button>
            </div> <div className="homeproductcontainer">
              <div className='containerHomeIcon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                </svg>
              </div>
              <div className='nameCategorysContainer'>
                <Link className='nameElement' onClick={() => scrollToSection('Category')}>
                  <p className='nameCategory'>ViewProduct</p>
                </Link>
                <Link className='nameElement' onClick={() => scrollToSection('Category')}>
                  <p className='nameCategory'>New Arrival</p>
                </Link>
                <Link className='nameElement' onClick={() => scrollToSection('Category')}>
                  <p className='nameCategory'>Workshop</p>
                </Link>
                <Link className='nameElement' onClick={() => scrollToSection('Category')}>
                  <p className='nameCategory'>Any Queries</p>
                </Link>
                <Link className='nameElement' onClick={() => scrollToSection('Category')}>
                  <p className='nameCategory'>Resin Calculator</p>
                </Link>
              </div>
            </div>
          </div>

        </div>
        <div className="silderContainer">
          <ImageSlider images={images} />
        </div>
      </div>

      <Routes>


        <Route path="/" element={<Category />} />

      </Routes>


    </Router>

  );
}

export default App;
