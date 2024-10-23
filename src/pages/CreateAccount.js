import { useNavigate } from 'react-router-dom';
import BackImg from '../images/Group 21.png';

export default function CreateAccount() {

    const Navigate = useNavigate();

    const GoToDashboard = () => {
        Navigate("/DashBoard")
    }

    const GoToSignIn = () => {
        Navigate("/");
    }

    document.getElementById("LogInBut").addEventListener("submit", () => {
        GoToDashboard();
    });

    return (
        <>
            <div id="BackImgDiv">
                <img id="BackImg" src={BackImg} alt="BackImg" onClick={GoToSignIn} />
            </div>

            <div id="Credentials2">
                <div id="CAText">Create Account</div>
                <div id="InstructionText">Please sign in to continue</div>
                <input id="FullNameID" type="text" placeholder="FULL NAME" required />
                <input id="PhoneID" type="number" placeholder="PHONE" required />
                <input id="EmailID" type="email" placeholder="EMAIL" required />
                <input id="PassWordID" type="password" placeholder="PASSWORD" required />
                <input id="ConfirmPassWordID" type="password" placeholder="CONFIRM PASSWORD" required />
            </div>

            <div id="Login-ForgotPassword2">
                <input id="LogInBut" type="submit" value="SIGN UP"/>
            </div>

            <div id="Question-SignIn2">Already haven an account?<span id="SignUp" onClick={GoToSignIn}>Sign in</span></div>

        </>
    )
}