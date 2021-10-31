import React from 'react';
import { Col, Container, FormControl, InputGroup, Button, Row } from 'react-bootstrap';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className="mt-5  text-white" style={{ backgroundColor: 'RGB(15, 71, 192)', maxWidth: '100vw' }}>
            <Container className="pt-4">
                <Row>
                    <Col sm={5}>
                        <h3 className="fw-bolder mb-3 text-warning ">SpeedXpress Delivery Service</h3>
                        <p className="mb-3">Goods can arrive early when they are being brought into the country. Other times items need a place to be stored which later gets managed expertly by us.</p>
                        <div className="icons text-center mb-3">
                            <i className="fab fa-facebook-square fa-2x icon facebook-icon-color me-2"></i>
                            <i className="fab fa-twitter-square fa-2x icon twitter-icon-color me-2"></i>
                            <i className="fab fa-linkedin fa-2x icon linkedin-icon-color me-2"></i>
                            <i className="fab fa-youtube-square fa-2x icon youtube-icon-color me-2"></i>
                            <i className="fab fa-whatsapp-square fa-2x icon whatsapp-icon-color me-2"></i>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <h3 className="text-center text-warning fw-bold">Useful Links</h3>
                        <ul>

                            <HashLink className="me-2 nav-link" style={{ color: 'white' }} to="/home#services">Services</HashLink>

                            <HashLink className="me-2 nav-link" style={{ color: 'white' }} to="/home#features">Features</HashLink>

                            <HashLink className="me-2 nav-link" style={{ color: 'white' }} to="/home#clients">Clients</HashLink>
                        </ul>

                    </Col>
                    <Col sm={4}>
                        <h3 className="mb-3 text-warning fw-bold">Stay In Touch</h3>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Your email address"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="warning text-white fw-bold" id="button-addon2">
                                Submit
                            </Button>
                        </InputGroup>
                        <div className="footer-phone mb-3 ">
                            <i className="fas fa-phone "></i>&nbsp;
                            +881-54647835
                        </div>
                        <div className="footer-addresss mb-3">
                            <i className="fas fa-map-marker-alt"></i>&nbsp;
                            12, Mirpur, Dhaka, Bangladesh.
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex flex-column align-self-end justify-content-center pb-1  fw-bold">
                        <hr />
                        <h5 className="text-warning">Copyright © 2021 SpeedXpress, All Rights Reserved.

                        </h5></Col>
                </Row>
            </Container>

        </div>
    );
};

export default Footer;