import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';
import './HomeCard.css';

const services = [
    {
        id: 101,
        name: "Back and Biceps",
        price: 180,
        time: "1 Hour",
        img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        complete: true
    },
    {
        "id": 102,
        name: "Weight Lifting",
        price: 200,
        time: "3 Hour",
        img: "https://images.unsplash.com/photo-1546817372-628669db4655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        complete: true
    },
    {
        "id": 103,
        name: "Dancess Class",
        price: 300,
        time: "2 Hour",
        img: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        complete: true
    },
    {
        "id": 104,
        name: "Fat Loss",
        price: 350,
        time: "4 Hour",
        img: "https://images.unsplash.com/photo-1518458717367-249ba15389d2?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        complete: true
    },
    {
        "id": 105,
        name: "Yoga Biceps",
        price: 100,
        time: "1 Hour",
        img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        complete: true
    },
    {
        "id": 106,
        name: "Yoga Strenth",
        price: 130,
        time: "2 Hour",
        img: "https://images.unsplash.com/photo-1571388072750-31a921b3d900?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        complete: false
    }
]
const HomeCard = () => {
    return (
        <Container>
            <h5 style={{ textAlign: 'center', margin: '40px auto' }}>DAILY WORKOUT SCHEDULES</h5>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <ServiceCard service={service} key={service.id} />)
                }
            </Row>
        </Container>
    );
};

export default HomeCard;