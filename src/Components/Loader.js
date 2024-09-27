// Loader.js
import React from 'react';
import '../Loader.css'; // Import the CSS for the loader

const Loader = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Full viewport height
            backgroundColor: '#F2F2F2' // Background color
        }}>
            <div className="loader"></div> {/* Use the spinner here */}
        </div>
    );
};

export default Loader;
