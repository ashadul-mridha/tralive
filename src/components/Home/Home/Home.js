import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Event from '../Event/Event';
import FAQ from '../FAQ/FAQ';
import ImgGellery from '../ImgGellery/ImgGellery';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Event></Event>
            <About></About>
            <FAQ></FAQ>
            <ImgGellery></ImgGellery>
        </div>
    );
};

export default Home;