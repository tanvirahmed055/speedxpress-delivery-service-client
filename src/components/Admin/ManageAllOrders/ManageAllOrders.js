import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://desolate-spire-55005.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(orders)
            })
    }, [orders])

    const handleUpdate = (id, order) => {
        console.log(id);

        fetch(`https://desolate-spire-55005.herokuapp.com/updateOrderStatus/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Successfully updated order status');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <Header></Header>
            <div className="container mt-5 mb-5" id="" style={{ maxWidth: '100vw' }}>
                <h1 className="text-center mb-4">All Users Orders</h1>
                <h4 className="text-center mb-5 text-secondary">See all the users orders here</h4>
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
                                            <td>  <Button variant="primary" onClick={() => handleUpdate(order?._id, order)}>Update Status</Button>
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

export default ManageAllOrders;