import React from 'react';
import Slider from '../Carousel/Slider';
import HomeCard from '../HomeCard/HomeCard';
import HomeMore from '../HomeMore/HomeMore';

const Home = () => {
    return (
        <div>
            <Slider />
            <div className='mb-5'>
                <HomeCard />
            </div>
            <HomeMore />
        </div>
    );
};

export default Home;