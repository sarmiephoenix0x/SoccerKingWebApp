import React, { useState } from 'react';
import FbImg from "../images/FacebookIcon.png"
import GoogleImg from "../images/GoogleIcon.png"
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useSnackbar } from 'notistack';

export default function Register() {

    const navigate = useNavigate();
    const [name, setname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [nameError, setnameError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordConfirmationError, setPasswordConfirmationError] = useState('');
    const [generalError, setGeneralError] = useState('');

    const { enqueueSnackbar } = useSnackbar();

    const GoToDashBoard = () => {
        navigate("/DashBoard");
    };

    const GoToLogin = () => {
        navigate("/");
    };

    const handleRegister = async () => {
        // Reset error messages
        setnameError('');
        setUsernameError('');
        setEmailError('');
        setPhoneNumberError('');
        setPasswordError('');
        setPasswordConfirmationError('');
        setGeneralError('');

        // Basic validation
        let isValid = true;

        if (!name) {
            setnameError('Name is required.');
            isValid = false;
        }

        if (!username) {
            setUsernameError('Username is required.');
            isValid = false;
        }

        if (!email) {
            setEmailError('Email is required.');
            isValid = false;
        } else {
            const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
            if (!emailRegex.test(email)) {
                setEmailError('Please enter a valid email address.');
                isValid = false;
            }
        }

        if (!phoneNumber) {
            setPhoneNumberError('Phone number is required.');
            isValid = false;
        }

        if (!password) {
            setPasswordError('Password is required.');
            isValid = false;
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters.');
            isValid = false;
        }

        if (!passwordConfirmation) {
            setPasswordConfirmationError('Password confirmation is required.');
            isValid = false;
        } else if (password !== passwordConfirmation) {
            setPasswordConfirmationError('Passwords do not match.');
            isValid = false;
        }

        if (!isValid) return;

        setIsLoading(true);

        try {
            const response = await fetch('https://signal.payguru.com.ng/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    username: username,
                    email: email,
                    phone_number: phoneNumber,
                    password: password,
                    password_confirmation: passwordConfirmation,
                }),
            });

            const responseData = await response.json();

            if (response.ok) {
                // Handle successful response
                localStorage.setItem('accessToken', responseData.access_token);
                GoToDashBoard();
            } else {
                const error = responseData .error;
                const data = responseData.data?.email || [];
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
            <div id="RegisterBG">
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
                    <div id="InputFieldLabel">Name</div>
                    <input id="InputField" type="text" placeholder="Enter name" value={name} onChange={(e) => setname(e.target.value)} />
                    {nameError && <div className="error-message" style={{ color: 'red' }}>{nameError}</div>}
                </div>

                <div id="InputFieldBG">
                    <div id="InputFieldLabel">Username</div>
                    <input id="InputField" type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    {usernameError && <div className="error-message" style={{ color: 'red' }}>{usernameError}</div>}
                </div>

                <div id="InputFieldBG">
                    <div id="InputFieldLabel">Email Address</div>
                    <input id="InputField" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {emailError && <div className="error-message" style={{ color: 'red' }}>{emailError}</div>}
                </div>

                <div id="InputFieldBG">
                    <div id="InputFieldLabel">Phone Number</div>
                    <PhoneInput
                        country={'us'}
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                        inputStyle={{ width: '100%', height: '40px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                    {phoneNumberError && <div className="error-message" style={{ color: 'red' }}>{phoneNumberError}</div>}
                </div>

                <div id="InputFieldBG">
                    <div id="InputFieldLabel">Password</div>
                    <input id="InputField" type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {passwordError && <div className="error-message" style={{ color: 'red' }}>{passwordError}</div>}
                </div>

                <div id="InputFieldBG">
                    <div id="InputFieldLabel">Confirm Password</div>
                    <input id="InputField" type="password" placeholder="Confirm password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                    {passwordConfirmationError && <div className="error-message" style={{ color: 'red' }}>{passwordConfirmationError}</div>}
                </div>

                <div id="SubmitText" onClick={handleRegister}>
                    <span>{isLoading ? 'Submitting...' : 'Submit'}</span>
                </div>
                {generalError && <div className="error-message" style={{ color: 'red' }}>{generalError}</div>}
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