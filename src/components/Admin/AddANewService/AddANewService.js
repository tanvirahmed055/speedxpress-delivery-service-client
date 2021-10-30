import React, { useState, useEffect } from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const AddANewService = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data => {
        console.log(data);

        const newService = {
            title: data.title,
            imgUrl: data.imgUrl,
            shortDescription: data.shortDescription,
            detailDescription: data.detailDescription,
            price: data.price
        }

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newService),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }



    return (
        <div>
            <Header></Header>
            <Container className="order-form-container p-3 mt-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Add A New Service</h1>
                    <label htmlFor="servicename">Service Name</label>
                    <input placeholder="name of the service" {...register("title")} />

                    <label htmlFor="imageUrl">Service Image</label>
                    <input placeholder="image url" {...register("imgUrl")} />



                    <label htmlFor="shortDescription">Short Description</label>
                    <input
                        placeholder="short description of service"
                        type="text"
                        {...register("shortDescription")}
                    />

                    <label htmlFor="detailDescription">Detail Description</label>
                    <input
                        placeholder="detail description of service"
                        type="text"
                        {...register("detailDescription")}
                    />

                    <label htmlFor="price">Price</label>
                    <input type="number" placeholder="service price" {...register("price")} />

                    <div style={{ color: "red" }}>
                        {Object.keys(errors).length > 0 &&
                            "There are errors, check your console."}
                    </div>
                    <input type="submit" />
                </form>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default AddANewService;