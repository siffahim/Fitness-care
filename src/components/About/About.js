import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about-container'>
            <div>
                <img src="image/trainers.png" alt="" />
            </div>
            <div style={{lineHeight:'30px'}}>
                <h2 style={{margin:'15px 0'}}>SUBSCRIBE US FOR OFFERS & HEALTH TIPS</h2>
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='Your Email' />
                <h4  style={{margin:'15px 0'}}><span style={{color:'#a6c311'}}>Give Us a Call</span> : +88016465240</h4>
                <button className='btn-reguler'>SUBSCRIBE NOW <i class="fas fa-angle-right b"></i></button>
            </div>
        </div>
    );
};

export default About;