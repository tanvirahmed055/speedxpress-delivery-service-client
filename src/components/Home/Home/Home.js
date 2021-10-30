import React from 'react';
import Footer from '../../Shared/Footer/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;