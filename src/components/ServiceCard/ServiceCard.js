import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ServiceCard = (props) => {
    const { name, img, price, time } = props.service;
    const duration = {
        marginTop: '10px',
        width: '90px',
        padding: '0px 3px',
        borderRadius: '15px',
        border: '1px solid black',
        backgroundColor: '#292a2c',
        color: '#fff',
    }
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} height='240' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                        <h5>${price}</h5>
                        <p style={duration}><i class="fas fa-clock"></i> {time}</p>
                    </div>
                    <div className='text-left'>
                        <button className='btn-reguler' style={{ backgroundColor: '#292a2c' }}>DETAILS MORE</button>
                        <button className='btn-reguler'>JOIN NOW</button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServiceCard;