import React, { useEffect, useState } from 'react'
import '../styles/pages.css'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons';

function Products() {

  // List Product 

  const [data, setData] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  
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

  // Sort Product Price

  const sortProductsByPrice = (minPrice, maxPrice) => {
    const sortedProducts = data.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
  
    sortedProducts.sort((a, b) => a.price - b.price);
  
    return sortedProducts;
  };
  
  const sortedProducts = sortProductsByPrice(minPrice, maxPrice);

  // Sort Category
  const categories = data.map(product => product.category);
  const uniqueCategories = [... new Set(categories)]
  const [selectedCategory, setSelectedCategory] = useState(null);
  const filteredCategory = data.filter(product => (product.category === selectedCategory));
  
  // Search

  const [searchValue, setSearchValue] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(data);

  const handleSearch = (e) => {
    setSearchValue(e.target.value.toLowerCase());
    const filteredProducts = data.filter((product) =>
      product.title.toLowerCase().includes(searchValue)
    );
    setFilteredProducts(filteredProducts)
  }
  

  return (
    <div className='container pb-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h2 className='products-title my-4'>Products</h2>
        <button className="btn buy-btn h-50" type="button" data-bs-toggle="offcanvas" data-bs-target="#filter" aria-controls="filter">Filter</button>
      </div>

      <div className="offcanvas offcanvas-end" tabindex="-1" id="filter" aria-labelledby="filterLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="filterLabel">Filter</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">

          {/* Search */}

          <form>
            <label htmlFor="searchInput">Search : </label>
            <div className="input-group align-items-center">
              <input type="text" id='searchInput' onChange={handleSearch} className='form-control my-2' placeholder='Enter product name' />
              <button className='btn buy-btn h-50' id='searchBtn' onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </form>

          {/* Category Filter */}

          <div className='filterCategory mt-4'>
            <p>Category :</p>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="form-select">
              <option value="">All</option>
              {
                uniqueCategories.map((product, index) => (
                  <option key={index} value={product}>
                    {product}
                  </option>
                ))
              }
            </select>
          </div>

          {/* Price Filter */}

          <div className='sortPrice mt-4'>
            <p>Price :</p>
            <form>
                <div className="row">
                  <div className="col">
                    <input type="text" id='minPrice' value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} className='form-control' placeholder='Min' />
                  </div>
                  <div className="col">
                    <input type="text" id='maxPrice' value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className='form-control' placeholder='Max' />
                  </div>
                </div>
            </form>
          </div>
          
        </div>
      </div>
      
      <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4">
      {
        (
          sortedProducts.length > 0
          ? sortedProducts
          : filteredCategory.length > 0
          ? filteredCategory
          : searchValue.length > 0
          ? filteredProducts
          : data
        ).map((product) => (
          <div className="col">
                <div className="card rounded-0 h-100" key={product.id}>
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
                        <a href="#" className='btn buy-btn'><FontAwesomeIcon icon={faCartPlus} /></a>
                    </div>
                </div>
          </div>
        )
        ) 
      }
      </div>
    </div>
  )
}

export default Products;