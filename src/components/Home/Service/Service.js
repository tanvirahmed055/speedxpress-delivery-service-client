import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const { service } = props;
    console.log(service);
    return (
        <Col >
            <Card className="bg-dark text-white h-100">
                <Card.Img src={service.img} alt="Card image" style={{ height: '400px' }} className="" />
                <Card.ImgOverlay className="service-centered">
                    <Card.Title className="text-warning fw-bolder text-start" >{service.name}</Card.Title>
                    <Card.Text className="text-white  text-start fw-bold text-nowrap">
                        {service.shortDescription}
                    </Card.Text>
                    <Button variant="outline-light fw-bold" className="service-button rounded-pill px-2" size="sm">Book Now</Button>
                </Card.ImgOverlay>
            </Card>
        </Col >
    );
};

export default Service;