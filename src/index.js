// App.js
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './Pages/DashBoard.js';
import DashBoardPage from './dashboardPages/DashBoardPage';
import Packages from './Pages/Packages.js';
import DepositHistory from './Pages/DepositHistory.js';
import SplashScreen from './Components/SplashScreen.js'; // Import SplashScreen
import './index.css';
import './fonts/fonts.css';
import swDev from './swDev.js';

function START() {
    const [loading, setLoading] = useState(true);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        // Function to simulate data fetching
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate data loading
            setDataLoaded(true);
        };

        // Start fetching data
        fetchData();

        // Listen for the window load event
        const handleLoad = () => {
            if (dataLoaded) {
                setTimeout(() => {
                    setLoading(false);
                }, 500); // Add a delay of 500ms after the page is loaded
            }
        };

        // Attach the event listener
        window.addEventListener('load', handleLoad);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, [dataLoaded]);

    // Check if both data and window are loaded
    useEffect(() => {
        if (dataLoaded) {
            setLoading(false); // If data is loaded, we can set loading to false
        }
    }, [dataLoaded]);

    return (
        <>
            {loading ? (
                <SplashScreen />
            ) : (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<DashBoard />} >
                            <Route index element={<DashBoardPage />} />
                            <Route path="/DashBoard/Packages" element={<Packages />} />
                            <Route path="/DashBoard/DepositHistory" element={<DepositHistory />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            )}
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<START />);
