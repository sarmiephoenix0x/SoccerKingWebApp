import React, { useState } from 'react';
import FbImg from "../images/FacebookIcon.png";
import GoogleImg from "../images/GoogleIcon.png";
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

export default function SignIn() {
    const navigate = useNavigate();
    const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [emailOrPhoneNumberError, setEmailOrPhoneNumberError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [generalError, setGeneralError] = useState('');

    const { enqueueSnackbar } = useSnackbar();

    const GoToDashBoard = () => {
        navigate("/DashBoard");
    };

    const GoToRegister = () => {
        navigate("/Register");
    };

    const handleLogin = async () => {
        // Reset error messages
        setEmailOrPhoneNumberError('');
        setPasswordError('');
        setGeneralError('');

        // Basic validation
        let isValid = true;

        if (!emailOrPhoneNumber) {
            setEmailOrPhoneNumberError('Email or phone number is required.');
            isValid = false;
        } else {
            // Validate email format
            const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
            if (!emailRegex.test(emailOrPhoneNumber)) {
                setEmailOrPhoneNumberError('Please enter a valid email address.');
                isValid = false;
            }
        }

        if (!password) {
            setPasswordError('Password is required.');
            isValid = false;
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters.');
            isValid = false;
        }

        if (!isValid) return;

        setIsLoading(true);

        try {
            const response = await fetch('https://signal.payguru.com.ng/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: emailOrPhoneNumber,
                    password: password,
                }),
            });

            const responseData = await response.json();

            if (response.ok) {
                // Handle successful response
                const user = responseData.user;
                const accessToken = responseData.access_token;
                const profilePhoto = responseData.profile_photo;

                localStorage.setItem('accessToken', accessToken);
                // Store user data in local storage or context as needed
                // localStorage.setItem('user', JSON.stringify(user));

                // Navigate to dashboard
                GoToDashBoard();
            } else {
                const error = responseData.error;
                const data = responseData.data || [];
                enqueueSnackbar(`Error: ${error} - ${data.join(', ')}`, { variant: 'error' });
                // setGeneralError(`Error: ${error} - ${data.join(', ')}`);
            }
        } catch (error) {
            enqueueSnackbar('An unexpected error occurred.', { variant: 'error' });
            // setGeneralError('An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div id="LoginBG">
                <div id="AltAuthBut">
                    <div id="FbBut">
                        <img id="FbImg" src={FbImg} alt="Facebook" />
                        <div id="FbText">Facebook</div>
                    </div>
                    <div id="GoogleBut">
                        <img id="GoogleImg" src={GoogleImg} alt="Google" />
                        <div id="GoogleText">Google</div>
                    </div>
                </div>
                <div id="ORText">OR</div>
                <div id="InputFieldBG">
                    <div id="InputFieldLabel">Phone Number or Email</div>
                    <input
                        id="InputField"
                        type="text"
                        placeholder="Enter username or email"
                        value={emailOrPhoneNumber}
                        onChange={(e) => setEmailOrPhoneNumber(e.target.value)}
                    />
                    {emailOrPhoneNumberError && <div className="error-message" style={{ color: 'red' }}>{emailOrPhoneNumberError}</div>}
                </div>

                <div id="InputFieldBG">
                    <div id="InputFieldLabel">Password</div>
                    <input
                        id="InputField"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <div className="error-message" style={{ color: 'red' }}>{passwordError}</div>}
                </div>
                <div id="RememberAndForget">
                    <div className="remember-me">
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <div id="ForgotPassword">Forgot Password?</div>
                </div>
                <div id="LogInText" onClick={handleLogin}>
                    <span>{isLoading ? 'Logging in...' : 'Login'}</span>
                </div>
                {generalError && <div className="error-message" style={{ color: 'red' }}>{generalError}</div>}
                <div id="CreateAccount">
                    Don't have an account?
                    <div id="CreateAccountText" onClick={GoToRegister}>
                        Create Account
                    </div>
                </div>
            </div>
        </>
    );
}