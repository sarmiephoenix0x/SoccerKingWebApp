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
import Profile from './dashboardPages/Profile.js';
import Calendar from './dashboardPages/Calendar.js';
import News from './dashboardPages/News.js';
import Chats from './dashboardPages/Chats.js'
import Products from './dashboardPages/Products.js';
import Orders from './dashboardPages/Orders.js';
import Posts from './dashboardPages/Posts.js';
import Settings from './dashboardPages/Settings.js';
import Backups from './dashboardPages/Backups.js';
import Logs from './dashboardPages/Logs.js';


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
                <Route path="/DashBoard/Profile" element={<Profile />} />
                <Route path="/DashBoard/Calendar" element={<Calendar />} />
                <Route path="/DashBoard/News" element={<News />} />
                <Route path="/DashBoard/Chats" element={<Chats />} />
                <Route path="/DashBoard/Products" element={<Products />} />
                <Route path="/DashBoard/Orders" element={<Orders />} />
                <Route path="/DashBoard/Posts" element={<Posts />} />
                <Route path="/DashBoard/Settings" element={<Settings />} />
                <Route path="/DashBoard/Backups" element={<Backups />} />
                <Route path="/DashBoard/Logs" element={<Logs />} />
          </Route>
        </Routes>
          </BrowserRouter>
          )}
    </>
  )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< START />);