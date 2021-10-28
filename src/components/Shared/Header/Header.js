import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="warning" variant="warning" className="p-3">
            <Container>
                <Navbar.Brand className="fs-3 fw-bolder fst-italic text-white">SpeedXpress</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">


                        <Link className="me-2 nav-link text-dark" style={{ fontWeight: 'bold' }} to="">Services</Link>

                        <Link className="me-2 nav-link" style={{ color: 'black', fontWeight: 'bold' }} to="">Clients</Link>

                        <Link className="me-2 nav-link" style={{ color: 'black', fontWeight: 'bold' }} to="">Why Choose Us</Link>

                        <Button variant="success" className="me-3 fw-bolder ">Login</Button>


                        <Button variant="danger" className="me-3 fw-bolder">Signup</Button>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;