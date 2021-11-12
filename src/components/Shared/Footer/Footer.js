import React from 'react';
import './Footer.css';
import footerLogo from '../../../images/footer-logo.webp'

const Footer = () => {
    return (
        <div className="footer-container container-fluid">
            <div className="row py-5">
                <div className="col-md-4 col-sm-12">
                    <img src={footerLogo} alt="" />
                    <p className="text-white py-3">Land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning laboris nisi ufsit aliquip.</p>
                </div>
                <div className="col-md-2 col-sm-6">
                    <h5 className="text-white">Navigation</h5>
                    <ul className="list-unstyled text-secondary">
                        <li>Home</li>
                        <li>About</li>
                        <li>Service</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="col-md-2 col-sm-6">
                    <h5 className="text-white">Services</h5>
                    <ul className="list-unstyled text-secondary">
                        <li>Tour</li>
                        <li>Ticket</li>
                        <li>Guide</li>
                        <li>Travel</li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-12">
                    <h5 className="text-white">Contact</h5>
                    <p className="text-secondary">76/A, Green Lane, Dhanmondi, NYC <br /> demomail89@gmail.com</p>
                    <h4 className="text-warning">+01718069307</h4>
                </div>
            </div>
        </div>
    );
};

export default Footer;