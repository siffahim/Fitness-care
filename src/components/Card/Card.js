import React from 'react';
import './Card.css';
const Card = (props) => {
    return (
        <div className='card-style'>
            <img src={props.img} alt="" />
            <div className='card-info'>
                <h3>{props.title} <span style={{ color: '#a6c311' }}>($180-200)</span></h3>
                <ul>
                    <h5>Package Includes:</h5>
                    <li><i class="fas fa-angle-double-right"></i> Home</li>
                    <li><i class="fas fa-angle-double-right"></i> About Us</li>
                    <li><i class="fas fa-angle-double-right"></i> News & Tips</li>
                    <li><i class="fas fa-angle-double-right"></i> Events</li>
                    <li><i class="fas fa-angle-double-right"></i> Our Packages</li>
                    <li><i class="fas fa-angle-double-right"></i> FQA</li>
                    <li><i class="fas fa-angle-double-right"></i> Shop</li>
                </ul>
                <button className='btn-reguler' style={{ backgroundColor: '#292a2c' }}>MORE DETAILS</button>
                <button className='btn-reguler'>JOIN NOW</button>
            </div>
        </div>
    );
};

export default Card;