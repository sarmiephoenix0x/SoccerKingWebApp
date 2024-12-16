import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { Box, Button } from '@mui/material';

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [token, settoken] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);
    const [tokenError, settokenError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordConfirmationError, setPasswordConfirmationError] = useState('');
    const [generalError, setGeneralError] = useState('');

    const { enqueueSnackbar } = useSnackbar();

    const GoToLogin = () => {
        navigate("/");
    };

    const handleResetPasswordRequest = async () => {
        const trimmedEmail = email.trim(); // Use a new variable to avoid conflict

        if (!trimmedEmail) {
            enqueueSnackbar('Email is required.', { variant: 'error' });
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('https://signal.payguru.com.ng/api/passowrd/request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: trimmedEmail }), // Use the trimmed variable
            });

            if (response.ok) {
                enqueueSnackbar('Reset link sent successfully.', { variant: 'success' });
            } else {
                const responseBody = await response.json();
                enqueueSnackbar(`Error: ${responseBody.error}`, { variant: 'error' });
            }
        } catch (error) {
            enqueueSnackbar('An unexpected error occurred.', { variant: 'error' });
        } finally {
            setIsLoading(false);
        }
    };

    const handleResetPassword = async () => {
        if (isLoading2) return; // Prevent multiple invocations

        const trimmedEmail = email.trim();
        const trimmedToken = token.trim();
        const trimmedPassword = password.trim();
        const trimmedPasswordConfirmation = passwordConfirmation.trim();

        if (!trimmedEmail || !trimmedToken || !trimmedPassword || !trimmedPasswordConfirmation) {
            enqueueSnackbar('All fields are required.', { variant: 'error' });
            return;
        }

        const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
        if (!emailRegex.test(trimmedEmail)) {
            enqueueSnackbar('Please enter a valid email address.', { variant: 'error' });
            return;
        }

        if (trimmedPassword.length < 6) {
            enqueueSnackbar('Password must be at least 6 characters.', { variant: 'error' });
            return;
        }

        if (trimmedPassword !== trimmedPasswordConfirmation) {
            enqueueSnackbar('Passwords do not match.', { variant: 'error' });
            return;
        }

        setIsLoading2(true);

        try {
            const response = await fetch('https://signal.payguru.com.ng/api/passowrd/reset', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: trimmedEmail,
                    password: trimmedPassword,
                    token: trimmedToken,
                    password_confirmation: trimmedPasswordConfirmation,
                }),
            });

            if (response.ok) {
                enqueueSnackbar('Password reset successful.', { variant: 'success' });
                GoToLogin();
            } else {
                const responseData = await response.json();
                enqueueSnackbar(`Error: ${responseData.error}`, { variant: 'error' });
            }
        } catch (error) {
            enqueueSnackbar('An unexpected error occurred.', { variant: 'error' });
        } finally {
            setIsLoading2(false);
        }
    };

    return (
        <Box
            sx={{
                width: '100%', // Set the width of the container
                maxWidth: 450, // Set a maximum width for the container
                margin: '0 auto', // Center the container horizontally
                padding: 2, // Add some padding
            }}
        >
            <div id="RegisterBG">
                <div id="InputFieldBG">
                    <div id="InputFieldLabel">Email</div>
                    <input id="InputField" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {emailError && <div className="error-message" style={{ color: 'red' }}>{emailError}</div>}
                </div>

                <div id="InputFieldBG">
                    <div id="InputFieldLabel">Token</div>
                    <input id="InputField" type="text" placeholder="Enter token" value={token} onChange={(e) => settoken(e.target.value)} />
                    {tokenError && <div className="error-message" style={{ color: 'red' }}>{tokenError}</div>}
                </div>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        width: '100%',
                        paddingX: { xs: 2, sm: 4 }, // Add padding for smaller screens
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#000000', // Custom background color
                            color: '#FFF',
                            '&:hover': {
                                backgroundColor: '#000000',
                                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
                            },
                            boxShadow: 'none',
                            textTransform: 'none',
                        }}
                        onClick={handleResetPasswordRequest} // Call the request token method
                        disabled={isLoading} // Disable the button while loading
                    >
                        {isLoading ? 'Requesting...' : 'Request token'} {/* Change button text based on loading state */}
                    </Button>
                </Box>

                <div id="InputFieldBG">
                    <div id="InputFieldLabel">New Password</div>
                    <input id="InputField" type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {passwordError && <div className="error-message" style={{ color: 'red' }}>{passwordError}</div>}
                </div>

                <div id="InputFieldBG">
                    <div id="InputFieldLabel">Retype Password</div>
                    <input id="InputField" type="password" placeholder="Confirm password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                    {passwordConfirmationError && <div className="error-message" style={{ color: 'red' }}>{passwordConfirmationError}</div>}
                </div>

                <div id="SubmitText" onClick={handleResetPassword}>
                    <span>{isLoading2 ? 'Resetting...' : 'Reset Password'}</span>
                </div>
                {generalError && <div className="error-message" style={{ color: 'red' }}>{generalError}</div>}
            </div>
        </Box>
    )
}