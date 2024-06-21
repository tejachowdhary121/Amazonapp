// Fresh.js

import React from 'react';
import { Link } from 'react-router-dom';
import fresh from "../images/amazon_fresh.jpg";

const Fresh = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 ps-5">
            <div className="feature-section mt-5">
              <h1 className='display-3 fs-1'>Amazon Fresh</h1>
              <h3 className='display-1 fs-4'>Ultra fast delivery of groceries, <br/>shop high quality products at great prices</h3>
              <Link to="/Fresh1" className="btn btn-warning mt-4 ps-5 pe-5" as="a" href="/Login" target="_blank">Explore &rarr;</Link>
            </div>
          </div>
          <div className="col-md-6">
          <img className='pe-5 w-100 rounded' src={fresh} alt="fresh" style={{ borderRadius: '10px' }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Fresh;
