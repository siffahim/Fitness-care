import React from 'react';
import './HomeMore.css';
const HomeMore = () => {
    return (
        <div className='info-container'>
            <img src="image/img.png" alt="" />
            <div className='containr-trainer'>
                <div className='info-text'>
                    <div className='bg-icon'>
                        <i class="fas fa-users"></i>
                    </div>
                    <div>
                        <h4>Responsive Layout</h4>
                        <p>Visual Composer is a drag and drop frontend and backend page builder that will save you tons of time working on our site content</p>
                    </div>
                </div>
                <div className='info-text'>
                    <div className='bg-icon'>
                        <i class="fas fa-file-alt"></i>
                    </div>
                    <div>
                        <h4>BMI & IWC Calculator</h4>
                        <p>Visual Composer is a drag and drop frontend and backend page builder that will save you tons of time working on our site content</p>
                    </div>
                </div>
                <div className='info-text'>
                    <div className='bg-icon'>
                    <i class="fas fa-calendar-check"></i>
                    </div>
                    <div>
                        <h4>Premium Plugins Free</h4>
                        <p>Visual Composer is a drag and drop frontend and backend page builder that will save you tons of time working on our site content</p>
                    </div>
                </div>
                <div className='info-text'>
                    <div className='bg-icon'>
                    <i class="fas fa-coins"></i>
                    </div>
                    <div>
                        <h4>Free Customer Support</h4>
                        <p>Visual Composer is a drag and drop frontend and backend page builder that will save you tons of time working on our site content</p>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default HomeMore;