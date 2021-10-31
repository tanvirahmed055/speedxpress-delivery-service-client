import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Service.css';
import {
    useHistory
} from "react-router-dom";

const Service = (props) => {
    const { service } = props;
    //console.log(service);

    let history = useHistory();


    return (
        <Col>
            <Card className="bg-dark text-white h-100 card shadow  bg-body rounded" style={{ borderRadius: '15px' }}>
                <Card.Img src={service?.imgUrl} alt="Card image" style={{ height: '400px', borderRadius: '15px' }} className="image-fluid" />
                <Card.ImgOverlay className="service-centered">
                    <Card.Title className="text-white fw-bold text-start fs-3 image-text-background pb-2" >{service?.title}</Card.Title>
                    <Card.Text className="text-white  text-start fw-bold fs-5 image-text-background">
                        {service?.shortDescription}
                    </Card.Text>
                    <Button variant="outline-light fw-bold" className="service-button rounded-pill image-text-background" size="sm" onClick={() => history.push(`/orderPage/${service._id}`)}>Book Now</Button>
                </Card.ImgOverlay>
            </Card>
        </Col >
    );
};

export default Service;