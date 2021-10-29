import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
            <Container>
                <Navbar.Brand className="fs-3 fw-bolder fst-italic text-white"><i class="fas fa-truck-loading"></i>&nbsp;SpeedXpress</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">


                        <Link className="me-2 nav-link text-white" style={{ fontWeight: 'bold' }} to="">Services</Link>

                        <Link className="me-2 nav-link text-white" style={{ color: 'black', fontWeight: 'bold' }} to="">Clients</Link>

                        <Link className="me-2 nav-link text-white" style={{ color: 'black', fontWeight: 'bold' }} to="">Why Choose Us</Link>

                        <Button variant="primary" className="me-3 fw-bolder ">Sign in</Button>


                        <Button variant="danger" className="me-3 fw-bolder">Sign up</Button>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;