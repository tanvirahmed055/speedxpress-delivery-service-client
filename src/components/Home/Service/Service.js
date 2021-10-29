import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Service.css';
import {
    useHistory
} from "react-router-dom";

const Service = (props) => {
    const { service } = props;
    console.log(service);

    let history = useHistory();


    return (
        <Col>
            <Card className="bg-dark text-white h-100 card">
                <Card.Img src={service.img} alt="Card image" style={{ height: '400px' }} className="image-fluid" />
                <Card.ImgOverlay className="service-centered">
                    <Card.Title className="text-warning fw-bolder text-start" >{service.name}</Card.Title>
                    <Card.Text className="text-white  text-start fw-bold">
                        {service.shortDescription}
                    </Card.Text>
                    <Button variant="outline-light fw-bold" className="service-button rounded-pill" size="sm" onClick={() => history.push(`/orderPage/${service.id}`)}>Book Now</Button>
                </Card.ImgOverlay>
            </Card>
        </Col >
    );
};

export default Service;