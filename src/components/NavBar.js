import AppLogo from '../images/Logo.png';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const Navigate = useNavigate();

    const GoToLoginIn = () => {
        Navigate("/Authentication");
    }

    const GoToSignUp = () => {
        Navigate("/Authentication/CreateAccount");
    }
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
                        <div id="LogINText" onClick={GoToLoginIn}>
                            Log In
                        </div>
                        <div id="CreateNewAccountText" onClick={GoToSignUp}>
                            Create New Account
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}