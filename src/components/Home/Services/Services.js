import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import Spinner from 'react-bootstrap/Spinner';
import './Services.css'

const Services = () => {
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch('https://desolate-spire-55005.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
    }, [])


    return (
        <div className="container mt-5 mb-5" id="services" style={{ maxWidth: '100vw' }}>
            <h1 className="text-center mb-4">Our Services</h1>
            <h4 className="text-center mb-5 text-secondary">Diverse transport and logistics solutions</h4>
            {<Row xs={1} md={3} className="gy-4">
                {
                    loading ? <Spinner animation="grow" className="mx-auto" /> :
                        services?.map(service => <Service key={service._id} service={service}></Service>)
                }
            </Row>}

        </div>
    );
};

export default Services;