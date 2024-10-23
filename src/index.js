import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount.js';
import LogIn from './pages/LogIn.js';
import './index.css';
import AuthenticationPage from './pages/AuthenticationPage.js';
import LandingPage from './pages/LandingPage.js'
import LandingPageMain from './pages/LandingPageMain.js'
import DashBoard from './pages/DashBoard.js';
import DashBoardPage from './dashboardPages/DashBoardPage';
import SplashScreen from './components/SplashScreen.js';
import './fonts/fonts.css';


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
            <Route path="/" element={<LandingPage />} >
            <Route index element={<LandingPageMain />} />
          </Route>
          <Route path="/Authentication" element={<AuthenticationPage />}>
            <Route path="/Authentication" element={<LogIn />} />
            <Route path="/Authentication/CreateAccount" element={<CreateAccount />} />
          </Route>
          <Route path="/DashBoard" element={<DashBoard />} >
            <Route path="/DashBoard" element={<DashBoardPage />} />
          </Route>
        </Routes>
          </BrowserRouter>
          )}
    </>
  )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< START />);