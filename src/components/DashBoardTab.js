import SearchImg from '../images/Search.png'
import NotificationImg from '../images/Notification.png'
import ProfileImg from '../images/ProfileImg.png'
import { useEffect, useState } from 'react';

export default function DashBoardTab() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        document.getElementById("Username2").innerHTML = localStorage.getItem("Username");
        window.addEventListener('resize', updateScreenWidth);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };

    }, []);

    useEffect(() => {
        if (screenWidth <= 910) {
            if (menuOpen) {
                document.getElementById('SideBarBG').style.display = 'flex';
            } else {
                document.getElementById('SideBarBG').style.display = 'none';
            }
        }
    }, [menuOpen]);


    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
        if (window.innerWidth > 910) {
            document.getElementById('SideBarBG').style.display = 'flex';
        } else if (window.innerWidth <= 910) {
            if (menuOpen) {
                document.getElementById('SideBarBG').style.display = 'flex';
            } else {
                document.getElementById('SideBarBG').style.display = 'none';
            }
        }

        if (window.innerWidth > 720) {
            document.querySelector('.ChatViewContainer').style.display = "flex";
            document.querySelector('.ChatsListsMain').style.display = "flex";
            document.querySelector('.ChatProfileContainer').style.display = "flex";
        } else {
            document.querySelector('.ChatViewContainer').style.display = "none";
            document.querySelector('.ChatProfileContainer').style.display = "none";
        }
    };

    const toggleMenu = () => {
        if (!menuOpen) {
            // When opening the menu
            document.body.style.overflowY = 'hidden';
            setMenuOpen(true);
        } else {
            setTimeout(() => {
                document.body.style.overflowY = 'auto';
                setMenuOpen(false);
            }, 300); // Match this with the animation duration
        }
    };
    return (
        <>
            <div id="DashboardTab">
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
                <div id="DashboardTabHeader">
                    Dashboard
                </div>
                <div id="DashboardTabSub">
                    <img id="Search" src={SearchImg} alt="Search" />
                    <img id="Notification" src={NotificationImg} alt="Notification" />
                    <div id="ProfileBG">
                        <img id="ProfileImg" src={ProfileImg} alt="ProfileImg" />
                        <div id="ProfileName">
                            <span id="Username2">Onwubalili Philip Nzube</span>
                            <div id="ProfileRole">
                                Admin
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
