import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import {
    useHistory,
    useLocation
} from "react-router-dom";


const Login = () => {
    const { handleGoogleLogin } = useAuth();

    const [errorMessage, setErrorMessage] = useState('');


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
        <div className="container mt-5">
            <h2 className="fw-bolder text-center mb-5">Sign In</h2>


            <Button onClick={() => { handleLoginForGoogle() }} variant="danger" type="button" size="lg" className="ms-3">
                Google Signin
            </Button>

        </div>
    );
};

export default Login;