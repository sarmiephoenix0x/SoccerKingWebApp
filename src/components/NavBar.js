import AppLogo from '../images/Logo.png';

export default function NavBar() {
    return (
        <>
            <div id="NavBarMain">
                <img id="AppLogo" src={AppLogo} alt="AppLogo" />
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
                        <div id="LogINText">
                            Log In
                        </div>
                        <div id="CreateNewAccountText">
                            Create New Account
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}