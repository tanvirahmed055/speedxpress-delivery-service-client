import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import OrderPageContent from '../OrderPageContent/OrderPageContent';

const OrderPage = () => {
    return (
        <div>
            <Header></Header>
            <OrderPageContent></OrderPageContent>
            <Footer></Footer>
        </div>
    );
};

export default OrderPage;