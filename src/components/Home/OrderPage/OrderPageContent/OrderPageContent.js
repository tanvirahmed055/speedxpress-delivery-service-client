import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import {
    useParams
} from "react-router-dom";
import { useForm } from "react-hook-form";
import Image from 'react-bootstrap/Image';
import useAuth from '../../../../hooks/useAuth';
import './OrderPageContent.css'


const OrderPageContent = () => {

    const { serviceId } = useParams();

    const { userInfo } = useAuth();

    const [services, setServices] = useState([]);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);



    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services])


    return (
        <Container className="text-center mt-5">
            <Row>
                <Col sm={7}>
                    <Image src={servicesData[0]?.img} style={{ width: '330px', height: '330px' }} className="text-center" fluid />
                    <h3 className="fw-bolder text-center mt-3">Service Name:&nbsp;{servicesData[0]?.name}</h3>
                    <p className="text-center mt-3 mb-4"><span className="text-decoration-underline">Service Description:</span>&nbsp;{servicesData[0]?.detailDescription}</p>
                    <h5>Package Price: &nbsp;${servicesData[0]?.price}</h5>
                </Col>
                <Col sm={5}>
                    <Container className="order-form-container p-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1>Delivery Order Form</h1>
                            <label htmlFor="username">Your Name</label>
                            <input defaultValue={userInfo?.displayName} {...register("username")} />

                            <label htmlFor="email">Email</label>
                            <input
                                defaultValue={userInfo?.email}
                                type="text"
                                {...register("email")}
                            />


                            <label htmlFor="phonenumber">Phone Number</label>
                            <input placeholder="+880" {...register("phonenumber")} />


                            <label htmlFor="location">Location</label>
                            <input placeholder="Delivery Place" {...register("location")} />

                            <div style={{ color: "red" }}>
                                {Object.keys(errors).length > 0 &&
                                    "There are errors, check your console."}
                            </div>
                            <input type="submit" />
                        </form>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default OrderPageContent;