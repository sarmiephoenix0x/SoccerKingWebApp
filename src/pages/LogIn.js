import { useNavigate } from 'react-router-dom';
import PhoneLockImg from '../images/Phonelink Lock.png';
import { useEffect} from 'react';

export default function LogIn() {

    const Navigate = useNavigate();
    useEffect(() => {
        document.body.style.overflowY = 'auto';
    }, []);

    const GoToDashboard = () => {
        Navigate("/DashBoard")
    }

    const GoToSignUp = () => {
        Navigate("/Authentication/CreateAccount");
    }

    return (
        <>
            <div id="PhoneLockImgDiv">
                <img id="PhoneLockImg" src={PhoneLockImg} alt="PhoneLockImg" />
            </div>

            <div id="Credentials">
                <div id="LogInText">Login</div>
                <div id="InstructionText">Please sign in to continue</div>
                <input id="EmailID" type="email" placeholder="EMAIL" required />
                <input id="PassWordID" type="password" placeholder="PASSWORD" required />
            </div>

            <div id="Login-ForgotPassword">
                <input id="LogInBut" type="submit" value="LOGIN" onClick={GoToDashboard}/>
                <div id="ForgotText">Forgot password?</div>
            </div>

            <div id="Question-SignIn">Don’t have an account?<span id="SignUp" onClick={GoToSignUp}>Sign up</span></div>
        </>
    )
}