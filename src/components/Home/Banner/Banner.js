import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="container centered">
                <h1 className="fw-bolder text-center text-white">Delivery Services  Around the World</h1>
                <h4 className="text-center text-white  mt-3">We can handle any size load, to-and-from anywhere and within any service time<br />frame has made us your best and only choice for handling our deliveries.</h4>
                <HashLink to="">
                    <Button variant="info" size="lg" className="mt-5 text-white fw-bold">EXPLORE MORE</Button></HashLink>
            </div>
        </div >
    );
};

export default Banner;