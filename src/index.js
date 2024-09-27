import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './Pages/DashBoard.js';
import DashBoardPage from './dashboardPages/DashBoardPage';
import Packages from './Pages/Packages.js';
import DepositHistory from './Pages/DepositHistory.js';
import './index.css';
import './fonts/fonts.css';
import swDev from './swDev.js';


function START() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />} >
            <Route index element={<DashBoardPage />} />
            <Route path="/DashBoard/Packages" element={<Packages />} />
            <Route path="/DashBoard/DepositHistory" element={<DepositHistory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

}

// swDev();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< START />);