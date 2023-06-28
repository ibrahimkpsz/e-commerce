import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './top-products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Splide,SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';


function TopProducts() {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        const products = async () => {
            const response = await axios.get("https://fakestoreapi.com/products");
            setData(response.data);
        }

        products();
    }, []);


    return (
        <div className='container py-5'>
            <div className='d-flex justify-content-between'>
                <h2 className='tp-title'>Top Products</h2>
                <Link to="/products" className='btn h-50'>View All</Link>
            </div>
            <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4">
                {
                    data.sort((a, b) => b.rating.rate - a.rating.rate).slice(0,4).map(product => 
                    <Product product={product} />
                    )
                }
            </div>
        </div>
    )
}

export default TopProducts;
