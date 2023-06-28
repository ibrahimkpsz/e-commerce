import { faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import './categories.css'
import React, { useEffect, useState } from 'react'


const Categories = () => {

  const [data, setData] = useState([]);
  const categories = [...new Set(data.map(product => product.category))];
  
  useEffect(() => {
    const products = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products")
        setData(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    
    products();
    
  }, []);


    return (
      categories.map((category) => (
        <div className='container my-5' key={category}>
        
        <div className="d-flex align-items-center justify-content-between">
          <h2 className='categories-title'>{category}</h2>
        </div>
        <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4">
          {
            data.filter(product => product.category === category).map(product => (
              <div className="col">
                <div className="card rounded-0 h-100" key={product.id}>
                    <img src={product.image} alt={product.title} className='card-img-top img-fluid p-3'/>
                    <hr />
                    <div className="card-body">
                        <h5 className='card-title text-truncate'>{product.title}</h5>
                        <p className='card-text text-truncate'>
                            {product.rating.rate} <FontAwesomeIcon icon={faStar} style={{color: "#dbd539"}} />
                        </p>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                        <div><b>Price:</b> {product.price}&#36;</div>
                        <a href="#" className='btn buy-btn'><FontAwesomeIcon icon={faCartPlus} /></a>
                    </div>
                </div>
          </div>
            ))
          }
        </div>
      </div>
      ))
      
    )
  }

  export default Categories