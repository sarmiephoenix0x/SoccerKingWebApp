import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount.js';
import LogIn from './pages/LogIn.js';
import './index.css';
import AuthenticationPage from './pages/AuthenticationPage.js';


function START() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthenticationPage />}>
            <Route index element={<LogIn />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< START />);