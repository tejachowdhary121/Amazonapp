import React from 'react';
import { Link } from 'react-router-dom';
import prime from "../images/primevideo.jpeg";


const PrimeVideo = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 ps-5">
                    <img className='pe-5 w-100 rounded' src={prime} alt="prime" style={{ borderRadius: '10px' }} />
                    </div>
                    <div className="col-md-6 p-4">
                        <h1 className='display-5 fs-1  ps-4'> Prime Video </h1>
                        <h3 className='display-1 fs-4'>Watch the latest movies, TV shows, and award-winning <br/>Amazon Originals</h3>
                        <Link to="/PrimeVideo1" className="btn btn-warning mt-4 ps-5 pe-5" as="a" href="/Login" target="_blank">Watch Now &rarr;</Link>
                    </div>
                </div>
            <div className="col-md-6">
            </div>
            </div>
        </>
    )
}

export default PrimeVideo