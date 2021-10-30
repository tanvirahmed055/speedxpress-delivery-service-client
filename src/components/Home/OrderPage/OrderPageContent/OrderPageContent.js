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

    const { userInfo } = useAuth();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const servicesData = [
        {
            id: 1,
            name: "Road Transport",
            img: "data:image/jpeg;base64,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",
            detailDescription: "Road freight is one of the most common of all modes of transportation. It is widely used in continents such as Europe, Africa, and North America. The single customs document process provides a seamless movement of goods even across various states and countries.",
            price: 1500
        },
        {
            id: 2,
            name: "Air Transport",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEoGCQu5--QKcwBA6pdDjEvN53yAnx7xSo_pcmMspmsYXYH_OoX3zcQTt5vGhhig0rK08&usqp=CAU",
            shortDescription: "A dump truck is a truck used for transporting loose material for construction.",
            price: 1500
        },
        {
            id: 3,
            name: "Ocean Transport",
            img: "https://st.depositphotos.com/1027723/1230/i/600/depositphotos_12304203-stock-photo-cargo-ship-is-in-port.jpg",
            shortDescription: "A dump truck is a truck used for transporting loose material for construction.",
            price: 1500
        }
    ];

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