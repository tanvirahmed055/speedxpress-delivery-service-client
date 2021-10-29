import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Features.css'
const Features = () => {

    return (
        <div className="container-fluid mt-5 mb-5 pt-5" >
            <h3 className="fw-bolder mb-3 text-primary">Powerful Features</h3>
            <h5 className="text-center mb-4 text-secondary text-bold">We're dedicated to customers and focused on quality
            </h5>
            <Row xs={1} md={3} className="g-4">
                <Col >
                    <Card className="text-center  shadow-lg p-1 mb-5 bg-body rounded card">
                        <div className="icon-color pt-3">
                            <i className="fas fa-warehouse fa-3x icon-color"></i>
                        </div>
                        <Card.Body>
                            <Card.Title className="fw-bold">Warehouse Storage</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card className="text-center  shadow-lg p-1 mb-5 bg-body rounded card">
                        <div className="icon-color pt-3">
                            <i className="fas fa-phone-square fa-3x icon-color"></i>
                        </div>
                        <Card.Body>
                            <Card.Title className="fw-bold">Support 24/7</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card className="text-center  shadow-lg p-1 mb-5 bg-body rounded card">
                        <div className="icon-color pt-3">
                            <i className="fab fa-algolia fa-3x icon-color"></i>
                        </div>
                        <Card.Body>
                            <Card.Title className="fw-bold">Delivery Tracking</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card className="text-center  shadow-lg p-1 mb-5 bg-body rounded card">
                        <div className="icon-color pt-3">
                            <i className="fas fa-truck fa-3x icon-color"></i>
                        </div>
                        <Card.Body>
                            <Card.Title className="fw-bold">On Time Delivery</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card className="text-center  shadow-lg p-1 mb-5 bg-body rounded card">
                        <div className="icon-color pt-3">
                            <i className="fas fa-tag fa-3x icon-color"></i>
                        </div>
                        <Card.Body>
                            <Card.Title className="fw-bold">Economic Pricing</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card className="text-center  shadow-lg p-1 mb-5 bg-body rounded card">
                        <div className="icon-color pt-3">
                            <i className="fas fa-hand-holding-usd fa-3x icon-color"></i>
                        </div>
                        <Card.Body>
                            <Card.Title className="fw-bold ">Easy Payment methods</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default Features;