import LogoutImg from '../images/material-symbols_logout.png';
import LanguageImg from '../images/circle-flags_uk.png';
import DropDownImg from '../images/gravity-ui_chevron-down.png';
import HomeImg from '../images/tabler_home-filled.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';

export default function NavBar({ onTabChange }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false); // For toggling sidebar
    const [overlayAnimation, setOverlayAnimation] = useState(''); // For controlling animations
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [depositMenuOpen, setDepositMenuOpen] = useState(false);
    const [signalMenuOpen, setSignalMenuOpen] = useState(false);
    const [supportMenuOpen, setSupportMenuOpen] = useState(false);
    const [accountMenuOpen, setAccountMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;
    const [dashboardText, setDashboardText] = useState("");
    const [currentNavText, setCurrentNavText] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const { enqueueSnackbar } = useSnackbar();

    const [prevPath, setPrevPath] = useState('');

    const handleLogout = async () => {
        const accessToken = localStorage.getItem('accessToken');

        if (!accessToken) {
            setErrorMessage('You are not logged in.');
            return;
        }

        setIsLoading(true);
        setErrorMessage('');

        try {
            const response = await fetch('https://signal.payguru.com.ng/api/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            const responseData = await response.json();

            if (response.ok) {
                // Handle successful logout
                localStorage.removeItem('accessToken');
                localStorage.removeItem('user');
                enqueueSnackbar('Logged out successfully!', { variant: 'success' });
                // alert('Logged out successfully!'); // Replace with your snackbar or notification method
                navigate('/'); // Navigate to the intro page or login page
            } else if (response.status === 401) {
                const message = responseData.message || 'Unauthorized';
                enqueueSnackbar(`Error: ${message}`, { variant: 'error' });
                // setErrorMessage(`Error: ${message}`);
            } else {
                enqueueSnackbar('An unexpected error occurred. Please try again.', { variant: 'error' });
                // setErrorMessage('An unexpected error occurred. Please try again.');
            }
        } catch (error) {
            enqueueSnackbar('Failed to connect to the server. Please check your internet connection.', { variant: 'error' });
            // setErrorMessage('Failed to connect to the server. Please check your internet connection.');
        } finally {
            setIsLoading(false);
        }
    };

    const showLogoutConfirmationDialog = () => {
        const confirmLogout = window.confirm('Are you sure you want to log out?');
        if (confirmLogout) {
            handleLogout();
        }
    };

    const determineRouteText = (path) => {
        const pathSegments = path.split('/'); // Split the path by '/'
        const lastSegment = pathSegments[pathSegments.length - 1]; // Get the last segment

        switch (path) {
            case "/DashBoard":
                return { dashboard: "Dashboard", nav: "Home - Dashboard" };
            case "/DashBoard/DepositHistory":
                return { dashboard: "Deposit History", nav: "Home - Deposit - Deposit History" };
            case "/DashBoard/Packages":
                return { dashboard: "Packages", nav: "Home - Packages" };
            case "/DashBoard/Crypto":
                return { dashboard: "Crypto", nav: "Home - Signal - Crypto" };
            case "/DashBoard/Forex":
                return { dashboard: "Forex", nav: "Home - Signal - Forex" };
            case "/DashBoard/Stocks":
                return { dashboard: "Stocks", nav: "Home - Signal - Stocks" };
            case "/DashBoard/Referral":
                return { dashboard: "Referrals", nav: "Home - Referrals" };
            case "/DashBoard/Course":
                return { dashboard: "Course", nav: "Home - Course" };
            case "/DashBoard/ProfileSettings":
                return { dashboard: "Profile Settings", nav: "Home - Profile Settings" };
            case "/DashBoard/ChangePassword":
                return { dashboard: "Change Password", nav: "Home - Change Password" };
            case "/DashBoard/ViewAnalysis":
                return { dashboard: "View Analysis", nav: prevPath ? `Signal - ${prevPath} - View Analysis` : "Signal - View Analysis" };
            case "/DashBoard/SignalAuthor":
                return { dashboard: "Signal Author", nav: prevPath ? `Signal - ${prevPath} - Signal Author` : "Signal - Signal Author" };

            default:
                return { dashboard: "Dashboard", nav: "Home - Dashboard" };
        }
    };

    const toggleDepositMenu = () => setDepositMenuOpen(prev => !prev);
    const toggleSignalMenu = () => setSignalMenuOpen(prev => !prev);
    const toggleSupportMenu = () => setSupportMenuOpen(prev => !prev);
    const toggleAccountMenu = () => setAccountMenuOpen(prev => !prev);

    // Ensure to close other menus when one is opened
    const handleMenuToggle = (menu) => {
        setDepositMenuOpen(menu === 'deposit' ? !depositMenuOpen : false);
        setSignalMenuOpen(menu === 'signal' ? !signalMenuOpen : false);
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
        // Check for access token
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            enqueueSnackbar('You have been logged out. Please log in again to continue.', { variant: 'warning' });
            // If token does not exist, log the user out and redirect to "/"
            navigate("/");
        }
    }, [navigate]);

    useEffect(() => {
        if (menuOpen) {
            document.getElementById('Overlay').style.display = 'flex';
        } else {
            document.getElementById('Overlay').style.display = 'none';
        }
    }, [menuOpen]);

    useEffect(() => {
        document.body.style.overflowY = 'auto';
        const currentPath = window.location.pathname; // Use window.location.pathname to get the current path
        const { dashboard, nav } = determineRouteText(currentPath);
        setDashboardText(dashboard);
        setCurrentNavText(nav);
        setPrevPath(location.pathname.split('/').pop());
    }, [location.pathname]);

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
        document.getElementById("CurrentNavText2").innerHTML = "Home - Deposit - Deposit History";
    };

    const GoToPackage = () => {
        document.body.style.overflowY = 'auto';
        toggleMenu();
        onTabChange(); // Call the loader on tab change
        navigate("/DashBoard/Packages");
        document.getElementById("DashBoardText2").innerHTML = "Packages";
        document.getElementById("CurrentNavText2").innerHTML = "Home - Packages";
    };

    const GoToCrypto = () => {
        document.body.style.overflowY = 'auto';
        toggleMenu();
        onTabChange(); // Call the loader on tab change
        navigate("/DashBoard/Crypto");
        document.getElementById("DashBoardText2").innerHTML = "Crypto";
        document.getElementById("CurrentNavText2").innerHTML = "Home - Signal - Crypto";
    };


    const GoToForex = () => {
        document.body.style.overflowY = 'auto';
        toggleMenu();
        onTabChange(); // Call the loader on tab change
        navigate("/DashBoard/Forex");
        document.getElementById("DashBoardText2").innerHTML = "Forex";
        document.getElementById("CurrentNavText2").innerHTML = "Home - Signal - Forex";
    };


    const GoToStocks = () => {
        document.body.style.overflowY = 'auto';
        toggleMenu();
        onTabChange(); // Call the loader on tab change
        navigate("/DashBoard/Stocks");
        document.getElementById("DashBoardText2").innerHTML = "Stocks";
        document.getElementById("CurrentNavText2").innerHTML = "Home - Signal - Stocks";
    };

    const GoToReferral = () => {
        document.body.style.overflowY = 'auto';
        toggleMenu();
        onTabChange(); // Call the loader on tab change
        navigate("/DashBoard/Referral");
        document.getElementById("DashBoardText2").innerHTML = "Referrals";
        document.getElementById("CurrentNavText2").innerHTML = "Home - Referrals";
    };


    const GoToCourse = () => {
        document.body.style.overflowY = 'auto';
        toggleMenu();
        onTabChange(); // Call the loader on tab change
        navigate("/DashBoard/Course");
        document.getElementById("DashBoardText2").innerHTML = "Course";
        document.getElementById("CurrentNavText2").innerHTML = "Home - Course";
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
                        <div className="menu-item" onClick={toggleSignalMenu}>
                            <div id="SignalsText" style={{ color: isActive('/DashBoard/Crypto') || isActive('/DashBoard/DepositNow') || isActive('/DashBoard/Stocks') ? '#FCE74F' : 'white' }}>Signals</div>
                            <div className="submenu" style={{ display: signalMenuOpen ? 'flex' : 'none' }}>
                                <a href="#" onClick={GoToCrypto} style={{ color: isActive('/DashBoard/Crypto') ? '#FCE74F' : 'black' }}>Crypto</a>
                                <a href="#" onClick={GoToForex} style={{ color: isActive('/DashBoard/Forex') ? '#FCE74F' : 'black' }}>
                                    Forex
                                </a>
                                <a href="#" onClick={GoToStocks} style={{ color: isActive('/DashBoard/Stocks') ? '#FCE74F' : 'black' }}>
                                    Stocks
                                </a>
                            </div>
                        </div>
                        <div className="menu-item" onClick={GoToReferral}>
                            <div id="ReferralsText" style={{ color: isActive('/DashBoard/Referrals') ? '#FCE74F' : 'white' }}>Referrals</div>
                        </div>

                        <div className="menu-item" onClick={GoToCourse}>
                            <div id="CourseText" style={{ color: isActive('/DashBoard/Course') ? '#FCE74F' : 'white' }}>Course</div>
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
                                <a href="#" style={{ color: isActive('/DashBoard/Logout') ? '#FCE74F' : 'black' }} onClick={showLogoutConfirmationDialog}>Log Out</a>
                            </div>
                        </div>

                        <div id="SubNav">
                            <div id="LogoutText" onClick={showLogoutConfirmationDialog}>
                                {!isLoading && <img id="LogoutImg" src={LogoutImg} alt="Logout" />} {/* Show image only when not loading */}
                                {isLoading ? (
                                    <span>Loading...</span> // Show loading text when isLoading is true
                                ) : (
                                    <span>Logout</span> // Show Logout text when isLoading is false
                                )}
                                {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error messages */}
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
                            <div className="dropdown">
                                <div id="SignalsText" style={{ color: isActive('/DashBoard/Crypto') || isActive('/DashBoard/DepositNow') || isActive('/DashBoard/Stocks') ? '#FCE74F' : 'white' }}>Signals</div>
                                <div className="dropdown-content">
                                    <a href="#" onClick={GoToCrypto} style={{ color: isActive('/DashBoard/Crypto') ? '#FCE74F' : 'black' }}>Crypto</a>
                                    <a href="#" onClick={GoToForex} style={{ color: isActive('/DashBoard/Forex') ? '#FCE74F' : 'black' }}>
                                        Forex
                                    </a>
                                    <a href="#" onClick={GoToStocks} style={{ color: isActive('/DashBoard/Stocks') ? '#FCE74F' : 'black' }}>
                                        Stocks
                                    </a>
                                </div>
                            </div>
                            <div id="ReferralsText" style={{ color: isActive('/DashBoard/Referral') ? '#FCE74F' : 'white' }} onClick={GoToReferral}>Referrals</div>


                            <div id="CourseText" style={{ color: isActive('/DashBoard/Course') ? '#FCE74F' : 'white' }} onClick={GoToCourse}>Course</div>

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
                                    <a href="#" style={{ color: isActive('/DashBoard/Logout') ? '#FCE74F' : 'black' }} onClick={showLogoutConfirmationDialog}>Log Out</a>
                                </div>
                            </div>

                            <div id="SubNav">
                                <div id="LogoutText" onClick={showLogoutConfirmationDialog}>
                                    {!isLoading && <img id="LogoutImg" src={LogoutImg} alt="Logout" />} {/* Show image only when not loading */}
                                    {isLoading ? (
                                        <span>Loading...</span> // Show loading text when isLoading is true
                                    ) : (
                                        <span>Logout</span> // Show Logout text when isLoading is false
                                    )}
                                    {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error messages */}
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
                    <div id="DashBoardText2">{dashboardText}</div>
                    <div id="CurrentNavText">
                        <img id="HomeImg" src={HomeImg} alt="Home" />
                        <span id="CurrentNavText2">{currentNavText}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
