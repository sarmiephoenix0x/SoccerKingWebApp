import SoccerKingdomImg from '../images/SoccerKingdomImg.png';
import HomeImg from '../images/Home.png';
import ProfileImg from '../images/Profile.png';
import CalendarImg from '../images/Calender.png';
import NewsImg from '../images/News.png';
import ProductsImg from '../images/Products.png';
import OrdersImg from '../images/Orders.png';
import PostsImg from '../images/Posts.png';
import SettingsImg from '../images/Settings.png';
import BackupsImg from '../images/Backups.png';
import LogsImg from '../images/Logs.png';
import LogoutImg from '../images/Logout.png';


export default function SideBar() {
    return (
        <>
            <div id="SideBarBG">
                <img id="SoccerKingdomImg" src={SoccerKingdomImg} alt="SoccerKingdomImg" />
                <div className='SideBarSub'>
                    MAIN
                    <div className="SideBarSubBut">
                        <img className="SideBarSubButImg" src={HomeImg} alt="Home" />
                        Homepage
                    </div>
                    <div className="SideBarSubBut">
                        <img className="SideBarSubButImg" src={ProfileImg} alt="Profile" />
                        Profile
                    </div>
                </div>
                <div className='SideBarSub'>
                    GENERAL
                    <div className="SideBarSubBut">
                        <img className="SideBarSubButImg" src={CalendarImg} alt="Calendar" />
                        Calendar
                    </div>
                    <div className="SideBarSubBut">
                        <img className="SideBarSubButImg" src={NewsImg} alt="News" />
                        News
                    </div>
                </div>
                <div className='SideBarSub'>
                    LISTS
                    <div className="SideBarSubBut">
                        <img className="SideBarSubButImg" src={ProductsImg} alt="Products" />
                        Products
                    </div>
                    <div className="SideBarSubBut">
                        <img className="SideBarSubButImg" src={OrdersImg} alt="Orders" />
                        Orders
                    </div>
                    <div className="SideBarSubBut">
                        <img className="SideBarSubButImg" src={PostsImg} alt="Posts" />
                        Posts
                    </div>
                </div>
                <div className='SideBarSub'>
                    MAINTENANCE
                    <div className="SideBarSubBut">
                        <img className="SideBarSubButImg" src={SettingsImg} alt="Settings" />
                        Settings
                    </div>
                    <div className="SideBarSubBut">
                        <img className="SideBarSubButImg" src={BackupsImg} alt="Backups" />
                        Backups
                    </div>
                </div>
                <div className='SideBarSub'>
                    ANALYTICS
                    <div className="SideBarSubBut">
                        <img className="SideBarSubButImg" src={LogsImg} alt="Logs" />
                        Logs
                    </div>
                </div>
                <div className="LogOutSideBarSubBut">
                        <img className="SideBarSubButImg" src={LogoutImg} alt="Log Out" />
                    Log Out
                    </div>
            </div>
        </>
    )
}