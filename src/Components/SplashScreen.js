// SplashScreen.js
import React from 'react';
import '../SplashScreen.css'; // Import CSS for styling
import AppLogo from '../images/AppLogo.png'; // Your logo path

const SplashScreen = () => {
    return (
        <div className="splash-screen">
            <img src={AppLogo} alt="App Logo" className="logo" />
            <div className="loader"></div>
        </div>
    );
};

export default SplashScreen;
