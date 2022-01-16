import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slide.css';

const Slider = () => {
    return (
        <Carousel className='slide carousel-fade'>
            <Carousel.Item>
                <img
                    className="img-slide"
                    src="image/3.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Muscle & Fitness</h3>
                    <p>As the name would imply, Muscle & Fitness is narrowly focused around how to build your muscles and stay in shape. It contains great information on specific ways to build muscle.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-slide"
                    src="image/2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>CrossFit</h3>
                    <p>This, of course, is the homepage for the fitness revolution known as CrossFit. As you would expect, it offers information on how to find a CrossFit box (as they are known) Get your WOD on.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-slide"
                    src="image/1.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Livestrong</h3>
                    <p>Livestrong has an incredible wealth of information on exercises, health care, physical health, mental health and more. It is updated multiple times a day and comes complete with great forums.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;