import AppLogo from '../images/Logo.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function NavBar() {
    const Navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [overlayAnimation, setOverlayAnimation] = useState('');

    useEffect(() => {
        document.body.style.overflowY = 'auto';
        window.addEventListener('resize', updateScreenWidth);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.getElementById('OverlayNavBarContent').style.display = 'flex';
        } else {
            document.getElementById('OverlayNavBarContent').style.display = 'none';
        }
    }, [menuOpen]);

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

    const GoToLoginIn = () => {
        Navigate("/Authentication");
    }

    const GoToSignUp = () => {
        Navigate("/Authentication/CreateAccount");
    }
    return (
        <>
            <div id="NavBarMain">
                {screenWidth <= 910 && (
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
                <img id="AppLogo" src={AppLogo} alt="AppLogo" />
                {screenWidth > 910 && (
                    <>
                        <div id="NavBarContent">
                            <div id="HomeText">
                                Home
                            </div>
                            <div id="AboutText">
                                About
                            </div>
                            <div id="FAQText">
                                FAQ
                            </div>
                            <div id="ContactUSText">
                                Contact US
                            </div>
                            <div id="NavBarAuthButs">
                                <div id="LogINText" onClick={GoToLoginIn}>
                                    Log In
                                </div>
                                <div id="CreateNewAccountText" onClick={GoToSignUp}>
                                    Create New Account
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}