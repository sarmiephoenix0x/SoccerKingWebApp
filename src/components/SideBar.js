import SoccerKingdomImg from '../images/SoccerKingdomImg.png';
import HomeImg from '../images/Home.png';
import ProfileImg from '../images/Profile.png';
import CalendarImg from '../images/Calender.png';
import NewsImg from '../images/News.png';
import ChatsImg from '../images/Chats.png'
import ProductsImg from '../images/Products.png';
import OrdersImg from '../images/Orders.png';
import PostsImg from '../images/Posts.png';
import SettingsImg from '../images/Settings.png';
import BackupsImg from '../images/Backups.png';
import LogsImg from '../images/Logs.png';
import LogoutImg from '../images/Logout.png';
import { useNavigate, useLocation } from 'react-router-dom';


export default function SideBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const GoToHomepage = () => {
        navigate("/DashBoard");
        document.getElementById("DashboardTabHeader").innerHTML = "Dashboard";
    }
    const GoToProfile = () => {
        navigate("/DashBoard/Profile");
        document.getElementById("DashboardTabHeader").innerHTML = "Profile";
    }
    const GoToCalendar = () => {
        navigate("/DashBoard/Calendar");
        document.getElementById("DashboardTabHeader").innerHTML = "Calendar";
    }
    const GoToNews = () => {
        navigate("/DashBoard/News");
        document.getElementById("DashboardTabHeader").innerHTML = "News";
    }
    const GoToChats = () => {
        navigate("/DashBoard/Chats");
        document.getElementById("DashboardTabHeader").innerHTML = "Chats";
        document.body.style.overflowY = "hidden";
    }
    const GoToProducts = () => {
        navigate("/DashBoard/Products");
        document.getElementById("DashboardTabHeader").innerHTML = "Products";
    }
    const GoToOrders = () => {
        navigate("/DashBoard/Orders");
        document.getElementById("DashboardTabHeader").innerHTML = "Orders";
    }
    const GoToPosts = () => {
        navigate("/DashBoard/Posts");
        document.getElementById("DashboardTabHeader").innerHTML = "Posts";
    }
    const GoToSettings = () => {
        navigate("/DashBoard/Settings");
        document.getElementById("DashboardTabHeader").innerHTML = "Settings";
    }
    const GoToBackups = () => {
        navigate("/DashBoard/Backups");
        document.getElementById("DashboardTabHeader").innerHTML = "Backups";
    }
    const GoToLogs = () => {
        navigate("/DashBoard/Logs");
        document.getElementById("DashboardTabHeader").innerHTML = "Logs";
    }
    const GoToLoginIn = () => {
        navigate("/Authentication");
    }
    return (
        <>
            <div id="SideBarBG">
                <img id="SoccerKingdomImg" src={SoccerKingdomImg} alt="SoccerKingdomImg" />
                <div className='SideBarSub'>
                    MAIN
                    <div className="SideBarSubBut"
                        style={{
                            background: isActive('/DashBoard') ? '#F3BC1F' : '#f3bb1f00',
                            borderTopRightRadius: isActive('/DashBoard') ? '8px' : '0px',
                            borderBottomRightRadius: isActive('/DashBoard') ? '8px' : '0px',
                            borderLeft: isActive('/DashBoard') ? '2px solid #000' : '2px solid #00000000'
                        }}
                        onClick={GoToHomepage}
                    >
                        <img className="SideBarSubButImg" src={HomeImg} alt="Home" />
                        <div className='SideBarSubButText'>
                            Dashboard
                        </div>
                    </div>
                    <div className="SideBarSubBut"
                        style={{
                            background: isActive('/DashBoard/Profile') ? '#F3BC1F' : '#f3bb1f00',
                            borderTopRightRadius: isActive('/DashBoard/Profile') ? '8px' : '0px',
                            borderBottomRightRadius: isActive('/DashBoard/Profile') ? '8px' : '0px',
                            borderLeft: isActive('/DashBoard/Profile') ? '2px solid #000' : '2px solid #00000000'
                        }}
                        onClick={GoToProfile}
                    >
                        <img className="SideBarSubButImg" src={ProfileImg} alt="Profile" />
                        <div className='SideBarSubButText'>
                            Profile
                        </div>
                    </div>
                </div>
                <div className='SideBarSub'>
                    GENERAL
                    <div className="SideBarSubBut"
                        style={{
                            background: isActive('/DashBoard/Calendar') ? '#F3BC1F' : '#f3bb1f00',
                            borderTopRightRadius: isActive('/DashBoard/Calendar') ? '8px' : '0px',
                            borderBottomRightRadius: isActive('/DashBoard/Calendar') ? '8px' : '0px',
                            borderLeft: isActive('/DashBoard/Calendar') ? '2px solid #000' : '2px solid #00000000'
                        }}
                        onClick={GoToCalendar}
                    >
                        <img className="SideBarSubButImg" src={CalendarImg} alt="Calendar" />
                        <div className='SideBarSubButText'>
                            Calendar
                        </div>
                    </div>
                    <div className="SideBarSubBut"
                        style={{
                            background: isActive('/DashBoard/News') ? '#F3BC1F' : '#f3bb1f00',
                            borderTopRightRadius: isActive('/DashBoard/News') ? '8px' : '0px',
                            borderBottomRightRadius: isActive('/DashBoard/News') ? '8px' : '0px',
                            borderLeft: isActive('/DashBoard/News') ? '2px solid #000' : '2px solid #00000000'
                        }}
                        onClick={GoToNews}
                    >
                        <img className="SideBarSubButImg" src={NewsImg} alt="News" />
                        <div className='SideBarSubButText'>
                            News
                        </div>
                    </div>
                </div>
                <div className='SideBarSub'>
                    LISTS
                    <div className="SideBarSubBut"
                        style={{
                            background: isActive('/DashBoard/Chats') ? '#F3BC1F' : '#f3bb1f00',
                            borderTopRightRadius: isActive('/DashBoard/Chats') ? '8px' : '0px',
                            borderBottomRightRadius: isActive('/DashBoard/Chats') ? '8px' : '0px',
                            borderLeft: isActive('/DashBoard/Chats') ? '2px solid #000' : '2px solid #00000000'
                        }}
                        onClick={GoToChats}
                    >
                        <img className="SideBarSubButImg" src={ChatsImg} alt="Chats" />
                        <div className='SideBarSubButText'>
                            Chats
                        </div>
                    </div>

                    <div className="SideBarSubBut"
                        style={{
                            background: isActive('/DashBoard/Products') ? '#F3BC1F' : '#f3bb1f00',
                            borderTopRightRadius: isActive('/DashBoard/Products') ? '8px' : '0px',
                            borderBottomRightRadius: isActive('/DashBoard/Products') ? '8px' : '0px',
                            borderLeft: isActive('/DashBoard/Products') ? '2px solid #000' : '2px solid #00000000'
                        }}
                        onClick={GoToProducts}
                    >
                        <img className="SideBarSubButImg" src={ProductsImg} alt="Products" />
                        <div className='SideBarSubButText'>
                            Products
                        </div>
                    </div>
                    <div className="SideBarSubBut"
                        style={{
                            background: isActive('/DashBoard/Orders') ? '#F3BC1F' : '#f3bb1f00',
                            borderTopRightRadius: isActive('/DashBoard/Orders') ? '8px' : '0px',
                            borderBottomRightRadius: isActive('/DashBoard/Orders') ? '8px' : '0px',
                            borderLeft: isActive('/DashBoard/Orders') ? '2px solid #000' : '2px solid #00000000'
                        }}
                        onClick={GoToOrders}
                    >
                        <img className="SideBarSubButImg" src={OrdersImg} alt="Orders" />
                        <div className='SideBarSubButText'>
                            Orders
                        </div>
                    </div>
                    <div className="SideBarSubBut"
                        style={{
                            background: isActive('/DashBoard/Posts') ? '#F3BC1F' : '#f3bb1f00',
                            borderTopRightRadius: isActive('/DashBoard/Posts') ? '8px' : '0px',
                            borderBottomRightRadius: isActive('/DashBoard/Posts') ? '8px' : '0px',
                            borderLeft: isActive('/DashBoard/Posts') ? '2px solid #000' : '2px solid #00000000'
                        }}
                        onClick={GoToPosts}
                    >
                        <img className="SideBarSubButImg" src={PostsImg} alt="Posts" />
                        <div className='SideBarSubButText'>
                            Posts
                        </div>
                    </div>
                </div>
                <div className='SideBarSub'>
                    MAINTENANCE
                    <div className="SideBarSubBut"
                        style={{
                            background: isActive('/DashBoard/Settings') ? '#F3BC1F' : '#f3bb1f00',
                            borderTopRightRadius: isActive('/DashBoard/Settings') ? '8px' : '0px',
                            borderBottomRightRadius: isActive('/DashBoard/Settings') ? '8px' : '0px',
                            borderLeft: isActive('/DashBoard/Settings') ? '2px solid #000' : '2px solid #00000000'
                        }}
                        onClick={GoToSettings}
                    >
                        <img className="SideBarSubButImg" src={SettingsImg} alt="Settings" />
                        <div className='SideBarSubButText'>
                            Settings
                        </div>
                    </div>
                    <div className="SideBarSubBut"
                        style={{
                            background: isActive('/DashBoard/Backups') ? '#F3BC1F' : '#f3bb1f00',
                            borderTopRightRadius: isActive('/DashBoard/Backups') ? '8px' : '0px',
                            borderBottomRightRadius: isActive('/DashBoard/Backups') ? '8px' : '0px',
                            borderLeft: isActive('/DashBoard/Backups') ? '2px solid #000' : '2px solid #00000000'
                        }}
                        onClick={GoToBackups}
                    >
                        <img className="SideBarSubButImg" src={BackupsImg} alt="Backups" />
                        <div className='SideBarSubButText'>
                            Backups
                        </div>
                    </div>
                </div>
                <div className='SideBarSub'>
                    ANALYTICS
                    <div className="SideBarSubBut"
                        style={{
                            background: isActive('/DashBoard/Logs') ? '#F3BC1F' : '#f3bb1f00',
                            borderTopRightRadius: isActive('/DashBoard/Logs') ? '8px' : '0px',
                            borderBottomRightRadius: isActive('/DashBoard/Logs') ? '8px' : '0px',
                            borderLeft: isActive('/DashBoard/Logs') ? '2px solid #000' : '2px solid #00000000'
                        }}
                        onClick={GoToLogs}
                    >
                        <img className="SideBarSubButImg" src={LogsImg} alt="Logs" />
                        <div className='SideBarSubButText'>
                            Logs
                        </div>
                    </div>
                </div>
                <div className="LogOutSideBarSubBut" onClick={GoToLoginIn}>
                    <img className="SideBarSubButImg" src={LogoutImg} alt="Log Out" />
                    <div className='SideBarSubButText'>
                        Log Out
                    </div>
                </div>
                <div></div>
            </div>
        </>
    )
}