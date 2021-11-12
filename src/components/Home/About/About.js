import React from 'react';
import './About.css';
import aboutus from '../../../images/about-us.webp';

const About = () => {
    return (
        <div className="container about-section">
            <div className="row mt-5 mb-5 align-items-center justify-content-center">
                <div className="col-sm-12 col-md-6">
                    <img src={aboutus} alt="" className="img-fluid" />
                </div>
                <div className="col-sm-12 col-md-6">
                    <h4 className="text-info">About Us</h4>
                    <h1>Get ready for real time adventure</h1>
                    <h5 className="text-secondary py-3">
                        Let’s start your journey with us, your dream will come true. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
                    </h5>
                    <button className="btn-regular">Book Your Destination</button>
                </div>
            </div>
        </div>
    );
};

export default About;