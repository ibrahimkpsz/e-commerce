import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './top-products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Splide,SplideSlide, SplideTrack } from '@splidejs/react-splide';



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
            <h2 className='tp-title'>Top Products</h2>
            <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4">
                {
                data.sort((a, b) => b.rating.rate - a.rating.rate).slice(0,4).map(product => 
                <div className="col">
                    <div className="card h-100" key={product.id}>
                        <img src={product.image} alt={product.title} className='card-img-top img-fluid p-3'/>
                        <hr />
                        <div className="card-body">
                            <h5 className='card-title text-truncate'>{product.title}</h5>
                            <p className='card-text text-truncate'>
                                {product.rating.rate} <FontAwesomeIcon icon={faStar} style={{color: "#dbd539",}} />
                            </p>
                        </div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <div><b>Price:</b> {product.price}&#36;</div>
                            <a href="#" className='btn buy-btn'>Buy</a>
                        </div>
                    </div>
                </div>
                )
                }
            </div>
        </div>
        
    )
}

export default TopProducts;
