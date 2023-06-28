import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className='container-fluid bg-dark text-white'>
        <div className="container">
            <div className="py-5 text-center">
                <h5>Sovagoo</h5>
                <p>Sign up for our e-mail newsletter.</p>
                <form action="https://formspree.io/f/xdobwray" method="POST">
                    <input type="email" name="email" className='form-control mx-auto emailInput' placeholder='Enter email address' />
                </form>
            </div>
            <hr />
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-12 p-4">
                © 2023 Sovagoo, Inc. All rights reserved.
                </div>
                <div className="col-lg-6 col-md-6 col-12 p-4 text-end">
                    <a href="#"><FontAwesomeIcon className='fs-3 me-3 text-white' icon={faFacebook} /></a>
                    <a href="#"><FontAwesomeIcon className='fs-3 me-3 text-white' icon={faInstagram} /></a>
                    <a href="#"><FontAwesomeIcon className='fs-3 me-3 text-white' icon={faTwitter} /></a>
                    <a href="#"><FontAwesomeIcon className='fs-3 text-white' icon={faLinkedin} /></a>
                </div>
            </div>
        </div>
    </div>
  )
}
