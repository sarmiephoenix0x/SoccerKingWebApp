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
                        <img className="SideBarSubButImg" src={CalendarImg} alt="Profile" />
                        Calendar
                    </div>
                    <div className="SideBarSubBut">
                        <img className="SideBarSubButImg" src={NewsImg} alt="Profile" />
                        News
                    </div>
                </div>
                <div className='SideBarSub'>
                    LISTS
                    <div className="SideBarSubBut">
                        <img className="SideBarSubButImg" src={ProductsImg} alt="Profile" />
                        Products
                    </div>
                    <div className="SideBarSubBut">
                        <img className="SideBarSubButImg" src={OrdersImg} alt="Profile" />
                        Orders
                    </div>
                    <div className="SideBarSubBut">
                        <img className="SideBarSubButImg" src={PostsImg} alt="Profile" />
                        Posts
                    </div>
                </div>
                <div className='SideBarSub'>
                    MAINTENANCE
                    <div className="SideBarSubBut">
                        <img className="SideBarSubButImg" src={SettingsImg} alt="Profile" />
                        Settings
                    </div>
                    <div className="SideBarSubBut">
                        <img className="SideBarSubButImg" src={BackupsImg} alt="Profile" />
                        Backups
                    </div>
                </div>
                <div className='SideBarSub'>
                    ANALYTICS
                    <div className="SideBarSubBut">
                        <img className="SideBarSubButImg" src={LogsImg} alt="Profile" />
                        Logs
                    </div>
                </div>
                Log Out
            </div>
        </>
    )
}