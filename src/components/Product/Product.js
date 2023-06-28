import { faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Product({product}) {
  return (
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
                <a href="#" className='btn buy-btn'><FontAwesomeIcon icon={faCartPlus} /></a>
            </div>
        </div>
    </div>
  )
}
