import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar.js';

export default function LandingPage() {

    return (
        <>
            <NavBar/>
           <Outlet />
        </>
    );
}
