import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    useParams
} from "react-router-dom";
import { useForm } from "react-hook-form";
import Image from 'react-bootstrap/Image';
import useAuth from '../../../../hooks/useAuth';
import './OrderPageContent.css';


const OrderPageContent = () => {

    const { serviceId } = useParams();

    const { userInfo } = useAuth();

    const [service, setService] = useState({});

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.status = 'pending';

        const newOrder = {
            name: data.username,
            email: data.email,
            phone: data.phonenumber,
            location: data.location,
        }

        newOrder.status = 'pending';
        newOrder.serviceId = service?._id;
        newOrder.serviceName = service?.title;
        newOrder.price = service?.price;

        console.log(newOrder);

        fetch('https://desolate-spire-55005.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newOrder),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Congrats! You have successfully ordered the service');
                reset();
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }


    useEffect(() => {
        fetch(`https://desolate-spire-55005.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [service])


    return (
        <Container className="text-center mt-5">
            <Row>
                <Col sm={7}>
                    <Image src={service?.imgUrl} style={{ width: '330px', height: '330px' }} className="text-center" fluid />
                    <h3 className="fw-bolder text-center mt-3">Service Name:&nbsp;{service?.title}</h3>
                    <p className="text-center mt-3 mb-4"><span className="text-decoration-underline">Service Description:</span>&nbsp;{service?.detailDescription}</p>
                    <h5>Package Price: &nbsp;${service?.price}</h5>
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