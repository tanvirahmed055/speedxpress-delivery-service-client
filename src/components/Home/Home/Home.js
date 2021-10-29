import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Clients from '../Clients/Clients';
import Features from '../Features/Features';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Features></Features>
            <Clients></Clients>
        </div>
    );
};

export default Home;