import React from 'react';
import { Button, Card } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import {
    useHistory,
    useLocation
} from "react-router-dom";
import './Login.css';


const Login = () => {
    const { handleGoogleLogin } = useAuth();

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };


    let handleLoginForGoogle = () => {
        handleGoogleLogin()
            .then((result) => {
                // The signed-in user info.

                // ...
                console.log(result);

                history.push(from);

            }).catch((error) => {
                // Handle Errors here.

            });
    };
    return (
        <div className="login-container mx-auto">
            <div className="container pt-2 d-flex flex-column justify-content-center align-items-center fst-italic login-container mx-auto">
                <h2 className="fw-bolder text-center mb-4 text-success login-main-title">Welcome to SpeedXpress Delivery Service</h2>

                <Card className="shadow-lg bg-body m-3 rounded p-5 card" border="light" style={{ width: '25rem' }}>
                    <Card.Body>
                        <Card.Title><h1 className="fw-bolder text-center mb-5 text-dark fs-1">Sign in to<br /><span className="text-center text-primary fs-2">SpeedXpress</span></h1></Card.Title>
                    </Card.Body>
                    <div className="mx-2">
                        <Button onClick={() => { handleLoginForGoogle() }} variant="primary" type="button" size="lg" className="fw-bold text-white" >
                            <i className="fab fa-google google-icon-color me-2"></i>Sign in with Google
                        </Button>

                    </div>
                </Card >

            </div >
        </div>
    );
};

export default Login;