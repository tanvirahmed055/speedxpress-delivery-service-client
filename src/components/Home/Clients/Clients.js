import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Clients.css'

const Clients = () => {

    const clientData = [
        {
            id: 1,
            name: 'Mark Ross',
            specialities: 'CEO',
            img: 'data:image/jpeg;base64,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',
            reviewTitle: 'Excellent Service',
            reviewDetail: 'At quite a reasonable cost and with collection from my home. So convenient. Note that I used parcel bags (not boxes), and vacuum-sealed clothes and shoes to save on space.'
        },
        {
            id: 2,
            name: 'Tom Clark',
            specialities: 'Team Lead',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqhnRY6YE7n4vaPIznWUg36mldxbkfQkcex-6PAL-rNov0V63ercAcPLfEaSWHyvrCgQ&usqp=CAU',
            reviewTitle: 'Excellent Service',
            reviewDetail: 'At quite a reasonable cost and with collection from my home. So convenient. Note that I used parcel bags (not boxes), and vacuum-sealed clothes and shoes to save on space.'
        },
        {
            id: 3,
            name: 'Pep Sterling',
            specialities: 'CTO',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6oC0cLNyFt4XMtPNe35Tct-8iicsxnDi--fghnv05pczTghd04zc3wR9ATttVVHswLX4&usqp=CAU',
            reviewTitle: 'Excellent Service',
            reviewDetail: 'At quite a reasonable cost and with collection from my home. So convenient. Note that I used parcel bags (not boxes), and vacuum-sealed clothes and shoes to save on space.'
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
                            <div className="pt-3"><i class="fas fa-star star-icon-color"></i>
                                <i class="fas fa-star star-icon-color"></i>
                                <i class="fas fa-star star-icon-color"></i>
                                <i class="fas fa-star star-icon-color"></i>
                                <i class="fas fa-star star-icon-color"></i>
                                <i class="fas fa-star-half-alt star-icon-color"></i></div>
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
                                    {client.specialities}
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