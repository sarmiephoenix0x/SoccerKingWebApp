import LogoutImg from '../images/material-symbols_logout.png';
import LanguageImg from '../images/circle-flags_uk.png';
import DropDownImg from '../images/gravity-ui_chevron-down.png';
import HomeImg from '../images/tabler_home-filled.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function NavBar({ onTabChange }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false); // For toggling sidebar
    const [overlayAnimation, setOverlayAnimation] = useState(''); // For controlling animations
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [depositMenuOpen, setDepositMenuOpen] = useState(false);
    const [supportMenuOpen, setSupportMenuOpen] = useState(false);
    const [accountMenuOpen, setAccountMenuOpen] = useState(false);

    const toggleDepositMenu = () => setDepositMenuOpen(prev => !prev);
    const toggleSupportMenu = () => setSupportMenuOpen(prev => !prev);
    const toggleAccountMenu = () => setAccountMenuOpen(prev => !prev);

    // Ensure to close other menus when one is opened
    const handleMenuToggle = (menu) => {
        setDepositMenuOpen(menu === 'deposit' ? !depositMenuOpen : false);
        setSupportMenuOpen(menu === 'support' ? !supportMenuOpen : false);
        setAccountMenuOpen(menu === 'account' ? !accountMenuOpen : false);
    };
    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };
    const toggleMenu = () => {
        if (!menuOpen) {
            // When opening the menu
            document.body.style.overflowY = 'hidden';
            setOverlayAnimation('OverlaySlideIn');
            setMenuOpen(true);
        } else {
            // When closing the menu
            setOverlayAnimation('OverlaySlideOut');
            setTimeout(() => {
                document.body.style.overflowY = 'auto';
                setMenuOpen(false);
            }, 300); // Match this with the animation duration
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.getElementById('Overlay').style.display = 'flex';
        } else {
            document.getElementById('Overlay').style.display = 'none';
        }
    }, [menuOpen]);

    useEffect(() => {
        window.addEventListener('resize', updateScreenWidth);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);


    const GoToDepositHistory = () => {
        document.body.style.overflowY = 'auto';
        toggleMenu();
        onTabChange(); // Call the loader on tab change
        navigate("/DashBoard/DepositHistory");
        document.getElementById("DashBoardText2").innerHTML = "Deposit History";
        document.getElementById("CurrentNavText2").innerHTML = "Home - Deposit History";
    };

    const GoToPackage = () => {
        document.body.style.overflowY = 'auto';
        toggleMenu();
        onTabChange(); // Call the loader on tab change
        navigate("/DashBoard/Packages");
        document.getElementById("DashBoardText2").innerHTML = "Packages";
        document.getElementById("CurrentNavText2").innerHTML = "Home - Packages";
    };

    const GoToReferral = () => {
        document.body.style.overflowY = 'auto';
        toggleMenu();
        onTabChange(); // Call the loader on tab change
        navigate("/DashBoard/Referral");
        document.getElementById("DashBoardText2").innerHTML = "Referrals";
        document.getElementById("CurrentNavText2").innerHTML = "Home - Referrals";
    };

    const GoToProfileSettings = () => {
        document.body.style.overflowY = 'auto';
        toggleMenu();
        onTabChange(); // Call the loader on tab change
        navigate("/DashBoard/ProfileSettings");
        document.getElementById("DashBoardText2").innerHTML = "Profile Settings";
        document.getElementById("CurrentNavText2").innerHTML = "Home - Profile Settings";
    };


    const GoToChangePassword = () => {
        document.body.style.overflowY = 'auto';
        toggleMenu();
        onTabChange(); // Call the loader on tab change
        navigate("/DashBoard/ChangePassword");
        document.getElementById("DashBoardText2").innerHTML = "Change Password";
        document.getElementById("CurrentNavText2").innerHTML = "Home - Change Password";
    };

    const GoToDashBoard = () => {
        document.body.style.overflowY = 'auto';
        onTabChange(); // Call the loader on tab change
        navigate("/DashBoard");
        document.getElementById("DashBoardText2").innerHTML = "Dashboard";
        document.getElementById("CurrentNavText2").innerHTML = "Home - Dashboard";
    };

    const GoToLogin = () => {
        navigate("/");
    };

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div id="Overlay" style={{ display: menuOpen ? 'block' : 'none' }}>
                {screenWidth <= 1080 && (
                    <>
                        <div className="menu-item" onClick={toggleDepositMenu}>
                            <div id="DepositText" style={{ color: isActive('/DashBoard/DepositHistory') || isActive('/DashBoard/DepositNow') ? '#FCE74F' : 'white' }}>
                                Deposit
                            </div>
                            <div className="submenu" style={{ display: depositMenuOpen ? 'flex' : 'none' }}>
                                <a href="#" style={{ color: isActive('/DashBoard/DepositNow') ? '#FCE74F' : 'black' }}>Deposit Now</a>
                                <a href="#" onClick={GoToDepositHistory} style={{ color: isActive('/DashBoard/DepositHistory') ? '#FCE74F' : 'black' }}>
                                    Deposit History
                                </a>
                            </div>
                        </div>

                        <div className="menu-item" onClick={GoToPackage}>
                            <div id="PackageText" style={{ color: isActive('/DashBoard/Packages') ? '#FCE74F' : 'white' }}>
                                Package
                            </div>
                        </div>
                        <div className="menu-item">
                            <div id="SignalsText" style={{ color: isActive('/DashBoard/Signals') ? '#FCE74F' : 'white' }}>Signals</div>
                        </div>
                        <div className="menu-item" onClick={GoToReferral}>
                            <div id="ReferralsText" style={{ color: isActive('/DashBoard/Referrals') ? '#FCE74F' : 'white' }}>Referrals</div>
                        </div>

                        <div className="menu-item" onClick={toggleSupportMenu}>
                            <div id="SupportText" style={{ color: isActive('/DashBoard/Support') ? '#FCE74F' : 'white' }}>
                                Support
                            </div>
                            <div className="submenu" style={{ display: supportMenuOpen ? 'flex' : 'none' }}>
                                <a href="#" style={{ color: isActive('/DashBoard/Support/NewTicket') ? '#FCE74F' : 'black' }}>New Ticket</a>
                                <a href="#" style={{ color: isActive('/DashBoard/Support/MyTicket') ? '#FCE74F' : 'black' }}>My Ticket</a>
                            </div>
                        </div>

                        <div className="menu-item" onClick={toggleAccountMenu}>
                            <div id="AccountText" style={{ color: isActive('/DashBoard/ProfileSettings') || isActive('/DashBoard/ChangePassword') || isActive('/DashBoard/Transaction') || isActive('/DashBoard/Logout') ? '#FCE74F' : 'white' }}>
                                Account
                            </div>
                            <div className="submenu" style={{ display: accountMenuOpen ? 'flex' : 'none' }}>
                                <a href="#" style={{ color: isActive('/DashBoard/ProfileSettings') ? '#FCE74F' : 'black' }} onClick={GoToProfileSettings}>Profile</a>
                                <a href="#" style={{ color: isActive('/DashBoard/ChangePassword') ? '#FCE74F' : 'black' }} onClick={GoToChangePassword}>Change Password</a>
                                <a href="#" style={{ color: isActive('/DashBoard/Transaction') ? '#FCE74F' : 'black' }}>Transaction</a>
                                <a href="#" style={{ color: isActive('/DashBoard/Logout') ? '#FCE74F' : 'black' }} onClick={GoToLogin}>Log Out</a>
                            </div>
                        </div>

                        <div id="SubNav">
                            <div id="LogoutText" onClick={GoToLogin}>
                                <img id="LogoutImg" src={LogoutImg} alt="Logout" />
                                <span>Logout</span>
                            </div>
                            <div id="EnglishText">
                                <img id="LanguageImg" src={LanguageImg} alt="Language" />
                                <span>English</span>
                                <img id="DropDownImg" src={DropDownImg} alt="DropDown" />
                            </div>
                        </div>
                    </>
                )}
            </div>

            <div id="NavBarBG">
                <div id="NavBar">
                    {screenWidth <= 1080 && (
                        <>
                            {/* Hamburger menu (shown when the menu is closed) */}
                            <div
                                id="MenuToggle"
                                onClick={toggleMenu}
                                style={{ display: menuOpen ? 'none' : 'block' }}
                            >
                                &#9776; {/* Hamburger menu icon */}
                            </div>

                            {/* X button (shown when the menu is open) */}
                            <div
                                id="MenuToggle2"
                                onClick={toggleMenu}
                                style={{ display: menuOpen ? 'block' : 'none' }}
                            >
                                &#10005; {/* X icon */}
                            </div>
                        </>
                    )}
                    <div
                        id="DashBoardText"
                        onClick={GoToDashBoard}
                    >
                        Dashboard
                    </div>
                    {screenWidth > 1080 && (
                        <>
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
                            <div id="ReferralsText" style={{ color: isActive('/DashBoard/Referral') ? '#FCE74F' : 'white' }} onClick={GoToReferral}>Referrals</div>

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
                            <div id="AccountText" style={{ color: isActive('/DashBoard/ProfileSettings') || isActive('/DashBoard/ChangePassword') || isActive('/DashBoard/Transaction') || isActive('/DashBoard/Logout') ? '#FCE74F' : 'white' }}>
                                    Account
                                </div>
                                <div className="dropdown-content">
                                    <a href="#" style={{ color: isActive('/DashBoard/ProfileSettings') ? '#FCE74F' : 'black' }} onClick={GoToProfileSettings}>Profile</a>
                                    <a href="#" style={{ color: isActive('/DashBoard/ChangePassword') ? '#FCE74F' : 'black' }} onClick={GoToChangePassword}>Change Password</a>
                                    <a href="#" style={{ color: isActive('/DashBoard/Transaction') ? '#FCE74F' : 'black' }}>Transaction</a>
                                    <a href="#" style={{ color: isActive('/DashBoard/Logout') ? '#FCE74F' : 'black' }} onClick={GoToLogin}>Log Out</a>
                                </div>
                            </div>

                            <div id="SubNav">
                                <div id="LogoutText" onClick={GoToLogin}>
                                    <img id="LogoutImg" src={LogoutImg} alt="Logout" />
                                    <span>Logout</span>
                                </div>
                                <div id="EnglishText">
                                    <img id="LanguageImg" src={LanguageImg} alt="Language" />
                                    <span>English</span>
                                    <img id="DropDownImg" src={DropDownImg} alt="DropDown" />
                                </div>
                            </div>
                        </>
                    )}
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
