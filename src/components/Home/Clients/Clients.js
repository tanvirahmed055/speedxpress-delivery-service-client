import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Clients.css'

const Clients = () => {

    const clientData = [
        {
            id: 1,
            name: 'Mark Ross',
            occupation: 'Businessman',
            img: 'https://i.ibb.co/r63v936/p1.jpg',
            reviewTitle: 'Excellent Service',
            reviewDetail: 'At quite a reasonable cost and with collection from my home. So convenient. Note that I used parcel bags (not boxes), and vacuum-sealed clothes and shoes to save on space.'
        },
        {
            id: 2,
            name: 'Tom Clark',
            occupation: 'Doctor',
            img: 'https://i.ibb.co/1rxkwcJ/p2.jpg',
            reviewTitle: 'Quality Service',
            reviewDetail: 'Easy process to book online and very reasonable price for a next day collection and delivery. Courier was excellent and came at the specified time and delivery was confirmed. I would highly recommend and will definitely use them again.'
        },
        {
            id: 3,
            name: 'Pep Sterling',
            occupation: 'Professor',
            img: 'https://i.ibb.co/6tMZ6yp/p3.jpg',
            reviewTitle: 'Brilliant Service',
            reviewDetail: 'Easy to use and reliable service. I have sent many parcels within the UK and abroad. Every time the parcels have been delivered within the quoted time frame and the process to book and send a parcel has always been straightforward.'
        }
    ]

    return (
        <div className="container mt-5 mb-5" id="client">
            <h3 className="fw-bolder mb-3 text-primary">Clients Testimonial</h3>
            <p className="text-center mb-4">Hear what our client's has to say about us.</p>
            <Row xs={1} md={3} className="g-4">
                {
                    clientData.map(client => <Col key={client.id}>
                        <Card className="text-center h-100 shadow p-1 mb-5 bg-body rounded">
                            <div className="pt-3"><i className="fas fa-star star-icon-color"></i>
                                <i className="fas fa-star star-icon-color"></i>
                                <i className="fas fa-star star-icon-color"></i>
                                <i className="fas fa-star star-icon-color"></i>
                                <i className="fas fa-star star-icon-color"></i>
                                <i className="fas fa-star-half-alt star-icon-color"></i></div>
                            <Card.Body>
                                <Card.Title>{client.reviewTitle}</Card.Title>
                                <Card.Text>
                                    {client.reviewDetail}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <Card.Img src={client.img} style={{ width: '30%' }} />
                                <Card.Title>{client.name}</Card.Title>
                                <Card.Text>
                                    {client.occupation}
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