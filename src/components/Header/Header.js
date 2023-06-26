import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <div className='container-fluid'>
        <div className="container">
          <div className="row align-items-center p-2">
            <div className="col-6 col-lg-8 col-xl-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="col-6 col-lg-4 col-xl-6 text-muted text-end">
              <a href="#" className='btn btn-outline-dark'>
                <FontAwesomeIcon icon={faWhatsapp} className='text-dark'/>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}


export default Header;
