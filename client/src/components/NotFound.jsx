
import React from 'react';

const NotFound = () => {
    return (
        <div style={{display:'flex',flexDirection:'column' , alignItems: 'center', padding:'2em', color:'red'}}>
            <h2>404 - Not Found</h2>
            <h5>The page you are looking for does not exist.</h5>
        </div>
    );
}

export default NotFound;
