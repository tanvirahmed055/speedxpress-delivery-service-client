import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services])


    return (
        <div className="container mt-5 mb-5" id="services" style={{ maxWidth: '100vw' }}>
            <h1 className="text-center mb-4">Our Services</h1>
            <h4 className="text-center mb-5 text-secondary">Diverse transport and logistics solutions</h4>
            {<Row xs={1} md={3} className="gy-4">
                {
                    services?.map(service => <Service key={service._id} service={service}></Service>)
                }
            </Row>}

        </div>
    );
};

export default Services;