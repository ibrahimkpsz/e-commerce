import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark nav'>
        <div className='container'>
          <Link to="/" className='navbar-brand fw-bold'>Sovagoo</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <button className="nav-link"><FontAwesomeIcon icon={faCartShopping} /></button>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </>
  )
}
