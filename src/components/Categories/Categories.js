import { faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import './categories.css'
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';


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
              <Product product={product} />
            ))
          }
        </div>
      </div>
      ))
      
    )
  }

  export default Categories