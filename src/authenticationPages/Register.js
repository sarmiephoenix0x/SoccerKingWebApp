import FbImg from "../images/FacebookIcon.png"
import GoogleImg from "../images/GoogleIcon.png"
import { useNavigate} from 'react-router-dom';

export default function Register() {

    const navigate = useNavigate();

    const GoToDashBoard = () => {
        navigate("/DashBoard");
    };

    return (
        <>
            <div id="LoginBG">
                <div id="AltAuthBut">
                    <div id="FbBut">
                        <img id="FbImg" src={FbImg} alt="Facebook" />
                        <div id="FbText">
                            Facebook
                        </div>
                    </div>
                    <div id="GoogleBut">
                        <img id="GoogleImg" src={GoogleImg} alt="Google" />
                        <div id="GoogleText">
                            Google
                        </div>
                    </div>
                </div>
                <div id="ORText">
                    OR
                </div>
                <div id="InputFieldBG">
                    <div id="InputFieldLabel">
                        Username or Email
                    </div>
                    <input id="InputField" type="text" placeholder="Enter username" />
                </div>

                <div id="InputFieldBG">
                    <div id="InputFieldLabel">
                        Password
                    </div>
                    <input id="InputField" type="password" placeholder="Enter password" />
                </div>
                
                <div id="LogInText" onClick={GoToDashBoard}>
                    <span>Submit</span>
                </div>
                <div id="CreateAccount">
                        Already have an account?
                    <div id="CreateAccountText">
                    Login Here
                    </div>
                </div>
            </div>
        </>
    )
}