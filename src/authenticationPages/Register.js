import FbImg from "../images/FacebookIcon.png"
import GoogleImg from "../images/GoogleIcon.png"
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const navigate = useNavigate();

    const GoToDashBoard = () => {
        navigate("/DashBoard");
    };

    const GoToLogin = () => {
        navigate("/");
    };

    return (
        <>
            <div id="RegisterBG">
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
                        First Name
                    </div>
                    <input id="InputField" type="text" placeholder="Enter first name" />
                </div>

                <div id="InputFieldBG">
                    <div id="InputFieldLabel">
                        Last Name
                    </div>
                    <input id="InputField" type="text" placeholder="Enter first name" />
                </div>

                <div id="InputFieldBG">
                    <div id="InputFieldLabel">
                        Email Address
                    </div>
                    <input id="InputField" type="email" placeholder="Enter first name" />
                </div>

                <div id="InputFieldBG">
                    <div id="InputFieldLabel">
                        Password
                    </div>
                    <input id="InputField" type="password" placeholder="Enter password" />
                </div>

                <div id="InputFieldBG">
                    <div id="InputFieldLabel">
                        Confirm Password
                    </div>
                    <input id="InputField" type="password" placeholder="Enter password confirmation" />
                </div>

                <div id="SubmitText" onClick={GoToDashBoard}>
                    <span>Submit</span>
                </div>
                <div id="CreateAccount">
                    Already have an account?
                    <div id="CreateAccountText" onClick={GoToLogin}>
                        Login Here
                    </div>
                </div>
            </div>
        </>
    )
}