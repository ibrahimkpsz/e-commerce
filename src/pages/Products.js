import React, { useEffect, useState } from 'react'
import '../styles/products.css'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons';

function Products() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const products = async () => {
      const response = await axios.get("https://fakestoreapi.com/products")
      setData(response.data)
    }
    
    products();
    
  }, []);

  const sortProductsByPrice = (minPrice, maxPrice) => {
    const sortedProducts = data.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
  
    sortedProducts.sort((a, b) => a.price - b.price);
  
    return sortedProducts;
  };
  
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const sortedProducts = sortProductsByPrice(minPrice, maxPrice);

  
  return (
    <div className='container'>
      <div className='d-flex justify-content-between align-items-center'>
        <h2 className='products-title my-4'>Products</h2>
        <button class="btn buy-btn h-50" type="button" data-bs-toggle="offcanvas" data-bs-target="#filter" aria-controls="filter">Filter</button>
      </div>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="filter" aria-labelledby="filterLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="filterLabel">Filter</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          {/* Price Filter */}
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
      
      <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4">
      {
        sortedProducts.length > 0 ? (
       
        sortedProducts.map((product) => (
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
        )) : (
          data.map(product => 
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

// {
//   data.map(product => 
//     <div className="col">
//         <div className="card rounded-0 h-100" key={product.id}>
//             <img src={product.image} alt={product.title} className='card-img-top img-fluid p-3'/>
//             <hr />
//             <div className="card-body">
//                 <h5 className='card-title text-truncate'>{product.title}</h5>
//                 <p className='card-text text-truncate'>
//                     {product.rating.rate} <FontAwesomeIcon icon={faStar} style={{color: "#dbd539",}} />
//                 </p>
//             </div>
//             <div className="card-footer d-flex align-items-center justify-content-between">
//                 <div><b>Price:</b> {product.price}&#36;</div>
//                 <a href="#" className='btn buy-btn'><FontAwesomeIcon icon={faCartPlus} /></a>
//             </div>
//         </div>
//     </div>
//     )
// }
// {sortedProducts.map((product) => (
//   <div className="col">
//         <div className="card rounded-0 h-100" key={product.id}>
//             <img src={product.image} alt={product.title} className='card-img-top img-fluid p-3'/>
//             <hr />
//             <div className="card-body">
//                 <h5 className='card-title text-truncate'>{product.title}</h5>
//                 <p className='card-text text-truncate'>
//                     {product.rating.rate} <FontAwesomeIcon icon={faStar} style={{color: "#dbd539",}} />
//                 </p>
//             </div>
//             <div className="card-footer d-flex align-items-center justify-content-between">
//                 <div><b>Price:</b> {product.price}&#36;</div>
//                 <a href="#" className='btn buy-btn'><FontAwesomeIcon icon={faCartPlus} /></a>
//             </div>
//         </div>
//     </div>
// ))}