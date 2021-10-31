import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    const { userInfo, handleLogOut } = useAuth();


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
            <Container>
                <Link to="/">
                    <Navbar.Brand className="fs-3 fw-bolder fst-italic text-white"><i className="fas fa-truck-loading"></i>&nbsp;SpeedXpress</Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">

                        {userInfo?.displayName && <Nav.Link className="me-2 fw-bold text-white" >Signed in as: {userInfo?.displayName}</Nav.Link>}


                        {userInfo?.email ? <HashLink className="me-2 nav-link text-white" style={{ fontWeight: 'bold' }} to="/myOrders">My Orders</HashLink> :
                            <HashLink className="me-2 nav-link text-white" style={{ fontWeight: 'bold' }} to="/home#services">Services</HashLink>
                        }

                        {userInfo?.email ? <HashLink className="me-2 nav-link text-white" style={{ fontWeight: 'bold' }} to="/manageAllOrders">Manage All Orders</HashLink> :
                            <HashLink className="me-2 nav-link text-white" style={{ color: 'black', fontWeight: 'bold' }} to="/home#features">Why Choose Us</HashLink>
                        }

                        {userInfo?.email ? <HashLink className="me-2 nav-link text-white" style={{ fontWeight: 'bold' }} to="/addANewService">Add A New Service</HashLink> :
                            <HashLink className="me-2 nav-link text-white" style={{ color: 'black', fontWeight: 'bold' }} to="/home#clients">Clients</HashLink>


                        }

                        {userInfo?.email ? <Link to="/">
                            <Button variant="danger" className="me-3 mb-1 fw-bold" onClick={() => handleLogOut()}>Logout</Button>
                        </Link> :
                            <Link to="/login">
                                <Button variant="primary" className="me-3 fw-bold">Login</Button>
                            </Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;