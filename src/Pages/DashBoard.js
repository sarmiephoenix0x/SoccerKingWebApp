import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar.js';

export default function DashBoard() {
    return (
        <>
            <NavBar />
            <Outlet />

        </>
    )
}