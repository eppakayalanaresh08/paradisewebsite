import React from 'react'
import image1 from '../../images/Category1.jpg'
import image2 from '../../images/Category2.jpg'
import image3 from '../../images/Category3.jpg'
import image4 from '../../images/Category4.jpg'
import image5 from '../../images/Category5.jpg'
import image6 from '../../images/Category6.jpg'
import { useNavigate } from 'react-router-dom';

import './index.css'

const Product = [
    { image: image1 ,id:1 ,name:'Organic personal care'},
    { image: image2 ,id:2 ,name:'Organic food'},
    { image: image3 ,id:3,name:'Resin art'},
    { image: image4 ,id:4,name:'Silicon mould'},
    { image: image5 ,id:5,name:'Candle'},
    {image: image6 , id:6, name:'Landury & Cleaning'}
]

function Category() { 
     const navigate = useNavigate();

     const handleeachProduct=()=>{
        navigate('/AllProducts');
     }

    return (
        <div className='CategorybgContainer' id='Category'>
            <div className='categorycontainer'>
            {Product.map((item) => (
                                // <button onClick={handleeachProduct} className='buttoneachImage'>

            <div key={item.id} className='eachContainer' onClick={handleeachProduct}>
                <img src={item.image} alt='category' className='imageElementproduct' />
                <p className='nameElementcategory'>{item.name}</p>
            </div>
            // </button>

        ))}
        </div>

        </div>
    )
}

export default Category