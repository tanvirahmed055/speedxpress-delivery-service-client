import React from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: "Road Transport",
            img: "https://i.ibb.co/HqFhRs7/1.jpg",
            shortDescription: "Complete door-to-door service and it is one of the more economical means of transport.",
            detailDescription: "Road freight is one of the most common of all modes of transportation. It is widely used in continents such as Europe, Africa, and North America. The single customs document process provides a seamless movement of goods even across various states and countries.",
            price: 1500
        },
        {
            id: 2,
            name: "Air Transport",
            img: "https://i.ibb.co/nDVfMhv/2.jpg",
            shortDescription: "Air freight is a critical mode of transport. It serves markets and supply chains that demand speed.",
            price: 1500
        },
        {
            id: 3,
            name: "Ocean Transport",
            img: "https://i.ibb.co/64kL9j0/3.jpg",
            shortDescription: "Suitable for wide range of products with long lead times.",
            price: 1500
        },
        {
            id: 4,
            name: "Train Transport",
            img: "https://i.ibb.co/HGS2BMQ/4.jpg",
            shortDescription: "Fast and cost-effective deliveries over long distances. Typically over 500 miles.",
            price: 1500
        },
        {
            id: 5,
            name: "Warehouse Process",
            img: "https://i.ibb.co/jhkcvzJ/5.jpg",
            shortDescription: "We deliver a competitive advantage to each client’s supply chain by implementing best practices which support the delivery of cost-effective solutions. In addition, by providing manufacturing operations independently within the distribution center, We understand the importance of having the right product, at the right place, at the right time. We provide clients with customized warehousing services to meet their unique needs.",
            price: 1500
        },
        {
            id: 6,
            name: "Custom Clearance",
            img: "https://i.ibb.co/5hyJq3h/6.jpg",
            shortDescription: "Customs clearance is the necessary but complex procedure that nobody wants to have to go through, except for the 50-strong team of customs professionals. We are here to help ensure that you never have to deal with the confusion, stress and delay involved in having incorrect paperwork. We handle customs procedures in-house for imports and exports at all ports and airports, with a wide range of facilities and solutions to choose from, and for businesses of any size.",
            price: 1500
        }

    ];

    return (
        <div className="container mt-5 mb-5" id="services" style={{ maxWidth: '100vw' }}>
            <h1 className="text-center mb-4">Our Services</h1>
            <h4 className="text-center mb-5 text-secondary">Diverse transport and logistics solutions</h4>
            {<Row xs={1} md={3} className="gy-4">
                {
                    servicesData.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>}

        </div>
    );
};

export default Services;