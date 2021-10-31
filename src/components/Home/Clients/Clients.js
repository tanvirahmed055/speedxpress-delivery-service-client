import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import './Clients.css'

const Clients = () => {

    const [loading, setLoading] = useState(true);
    const [clients, setClients] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/clients')
            .then(res => res.json())
            .then(data => {
                setClients(data);
                setLoading(false);
            })
    }, [])

    return (
        <div className="container mt-5 mb-5" id="clients">
            <h3 className="fw-bolder mb-3 text-primary">Clients Testimonial</h3>
            <p className="text-center mb-4">Hear what our client's has to say about us.</p>
            <Row xs={1} md={3} className="g-4">
                {
                    loading ? <Spinner animation="grow" className="mx-auto" /> :
                        clients?.map(client => <Col key={client?._id}>
                            <Card className="text-center h-100 shadow p-1 mb-5 bg-body rounded">
                                <div className="pt-3"><i className="fas fa-star star-icon-color"></i>
                                    <i className="fas fa-star star-icon-color"></i>
                                    <i className="fas fa-star star-icon-color"></i>
                                    <i className="fas fa-star star-icon-color"></i>
                                    <i className="fas fa-star star-icon-color"></i>
                                    <i className="fas fa-star-half-alt star-icon-color"></i></div>
                                <Card.Body>
                                    <Card.Title>{client?.reviewTitle}</Card.Title>
                                    <Card.Text>
                                        {client?.reviewDetail}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer >
                                    <Card.Img src={client?.img} style={{ width: '30%' }} />
                                    <Card.Title>{client?.name}</Card.Title>
                                    <Card.Text>
                                        {client?.occupation}
                                    </Card.Text>
                                </Card.Footer>
                            </Card>
                        </Col>)
                }
            </Row>
        </div>
    );
};

export default Clients;