import React, { useState, useEffect } from 'react';
import { Row, Card, Col, Button, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const MyOrders = () => {

    const { userInfo } = useAuth();

    const [orders, setOrders] = useState([]);

    const userEmail = userInfo?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${userEmail}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(orders)
            })
    }, [])


    return (
        <div>
            <Header></Header>
            <div className="container mt-5 mb-5" id="" style={{ maxWidth: '100vw' }}>
                <h1 className="text-center mb-4">My Orders</h1>
                <h4 className="text-center mb-5 text-secondary">See all of your orders here</h4>
                <h2 className="text-center mb-5 ">Number of Orders: {orders?.length}</h2>
                {
                    <div>
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Service Name</th>
                                    <th>Service Price</th>
                                    <th>User's Email</th>
                                    <th>Order Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders?.map((order, index) => {

                                        return <tr>
                                            <td>{index}</td>
                                            <td>{order?.serviceName}</td>
                                            <td>{order?.price}</td>
                                            <td>{order?.email}</td>
                                            <td>{order?.status}</td>
                                            <td>  <Button variant="danger">Delete</Button>
                                            </td>

                                        </tr>
                                    })
                                }

                            </tbody>
                        </Table>
                    </div>
                }

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyOrders;