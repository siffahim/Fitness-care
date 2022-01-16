import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceCard from '../components/ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Container>
            <h5 style={{ textAlign: 'center', margin: '30px auto' }}>OUR HEALTH CARE PACKAGES</h5>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <ServiceCard service={service} key={service.id} />)
                }
            </Row>
        </Container>
    );
};

export default Services;