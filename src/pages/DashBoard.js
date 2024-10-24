import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar.js';
import DashBoardTab from '../components/DashBoardTab.js';

export default function DashBoard() {

    return (
        <>
            <div id="Dashboard">
                <SideBar />
                <DashBoardTab/>
                <Outlet />
                </div>
        </>
    );
}
