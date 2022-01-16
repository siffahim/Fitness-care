import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/home')
    }
    return (
        <div style={{textAlign:'center',margin:'50px auto'}}>
            <img src="image/Error_404.png" alt="" />
            <h3 style={{marginTop:'50px'}}>Page Not Found</h3>
            <p>Check your proxcy network</p>
            <button onClick={handleClick} className='btn-reguler'>Go To Home Page</button>
        </div>
    );
};

export default NotFound;