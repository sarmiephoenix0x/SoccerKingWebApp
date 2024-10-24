import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar.js';

export default function DashBoard() {

    return (
        <>
            <SideBar/>
           <Outlet />
        </>
    );
}
