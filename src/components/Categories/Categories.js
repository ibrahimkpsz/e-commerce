import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './categories.css'

function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const response = await axios.get("https://fakestoreapi.com/products/categories");
            setCategories(response.data);
        }
        
        fetchData();
    }, [])
    
    return (
        <div className='container py-5 justify-content-evenly '>
            <h2 className='categories-title'>Categories</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 text-center ">
                {categories.map((category, index) => (
                    <div className="col">
                        <a key={index} href="#" className='btn buy-btn p-4 text-capitalize w-100 mt-3'>{category}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories;