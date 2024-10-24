import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar.js';
import OverlayNavBar from '../components/OverlayNavBar.js';

export default function LandingPage() {

    return (
        <>
            <OverlayNavBar/>
            <NavBar/>
           <Outlet />
        </>
    );
}
