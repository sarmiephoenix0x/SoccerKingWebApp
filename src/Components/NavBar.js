import LogoutImg from '../images/material-symbols_logout.png';
import LanguageImg from '../images/circle-flags_uk.png';
import DropDownImg from '../images/gravity-ui_chevron-down.png';
import HomeImg from '../images/tabler_home-filled.png';
import { useNavigate, useLocation } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const GoToDepositHistory = () => {
        navigate("/DashBoard/DepositHistory");
        document.getElementById("CurrentNavText2").innerHTML = "Home - Deposit History";
    };

    const GoToPackage = () => {
        navigate("/DashBoard/Packages");
        document.getElementById("CurrentNavText2").innerHTML = "Home - Packages";
    };

    const GoToDashBoard = () => {
        navigate("/");
        document.getElementById("CurrentNavText2").innerHTML = "Home - Dashboard";
    };

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div id="NavBarBG">
                <div id="NavBar">
                    <div
                        id="DashBoardText"
                        onClick={GoToDashBoard}
                    >
                        Dashboard
                    </div>

                    <div className="dropdown">
                        <div id="DepositText" style={{ color: isActive('/DashBoard/DepositHistory') || isActive('/DashBoard/DepositNow') ? '#FCE74F' : 'white' }}>
                            Deposit
                        </div>
                        <div className="dropdown-content">
                            <a href="#" style={{ color: isActive('/DashBoard/DepositNow') ? '#FCE74F' : 'black' }}>Deposit Now</a>
                            <a href="#" onClick={GoToDepositHistory} style={{ color: isActive('/DashBoard/DepositHistory') ? '#FCE74F' : 'black' }}>
                                Deposit History
                            </a>
                        </div>
                    </div>

                    <div id="PackageText" style={{ color: isActive('/DashBoard/Packages') ? '#FCE74F' : 'white' }} onClick={GoToPackage}>Package</div>
                    <div id="SignalsText" style={{ color: isActive('/DashBoard/Signals') ? '#FCE74F' : 'white' }}>Signals</div>
                    <div id="ReferralsText" style={{ color: isActive('/DashBoard/Referrals') ? '#FCE74F' : 'white' }}>Referrals</div>

                    <div className="dropdown">
                        <div id="SupportText" style={{ color: isActive('/DashBoard/Support') ? '#FCE74F' : 'white' }}>
                            Support
                        </div>
                        <div className="dropdown-content">
                            <a href="#" style={{ color: isActive('/DashBoard/Support/NewTicket') ? '#FCE74F' : 'black' }}>New Ticket</a>
                            <a href="#" style={{ color: isActive('/DashBoard/Support/MyTicket') ? '#FCE74F' : 'black' }}>My Ticket</a>
                        </div>
                    </div>

                    <div className="dropdown">
                        <div id="AccountText" style={{ color: isActive('/DashBoard/Account') ? '#FCE74F' : 'white' }}>
                            Account
                        </div>
                        <div className="dropdown-content">
                            <a href="#" style={{ color: isActive('/DashBoard/Profile') ? '#FCE74F' : 'black' }}>Profile</a>
                            <a href="#" style={{ color: isActive('/DashBoard/ChangePassword') ? '#FCE74F' : 'black' }}>Change Password</a>
                            <a href="#" style={{ color: isActive('/DashBoard/Transaction') ? '#FCE74F' : 'black' }}>Transaction</a>
                            <a href="#" style={{ color: isActive('/DashBoard/Logout') ? '#FCE74F' : 'black' }}>Log Out</a>
                        </div>
                    </div>

                    <div id="SubNav">
                        <div id="LogoutText">
                            <img id="LogoutImg" src={LogoutImg} alt="Logout" />
                            <span>Logout</span>
                        </div>
                        <div id="EnglishText">
                            <img id="LanguageImg" src={LanguageImg} alt="Language" />
                            <span>English</span>
                            <img id="DropDownImg" src={DropDownImg} alt="DropDown" />
                        </div>
                    </div>
                </div>
                <hr id="Divider" />
                <div id="CurrentNav">
                    <div id="DashBoardText2">Dashboard</div>
                    <div id="CurrentNavText">
                        <img id="HomeImg" src={HomeImg} alt="Home" />
                        <span id="CurrentNavText2">Home - Dashboard</span>
                    </div>
                </div>
            </div>
        </>
    );
}
