import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        <div className="banner-section">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-center mb-3">Life Long Memories Just A <br /> Few Second Away</h1>
                <p className="text-center">Let's Start Your Journey With Us, Your Dream Will Come True</p>
                <button className="btn-regular">Explore Destination</button>
            </div>
        </div>
    );
};

export default Banner;