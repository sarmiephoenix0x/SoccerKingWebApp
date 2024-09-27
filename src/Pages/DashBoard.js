// DashBoard.js
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar.js';
import Loader from '../Components/Loader.js'; // Import the Loader component

export default function DashBoard() {
    const [loading, setLoading] = useState(false);

    const handleTabChange = async () => {
        setLoading(true);
        // Simulate data fetching or processing with a timeout
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
    };

    return (
        <>
            <NavBar onTabChange={handleTabChange} /> {/* Pass the handler to NavBar */}
            {loading ? <Loader /> : <Outlet />}
        </>
    );
}
