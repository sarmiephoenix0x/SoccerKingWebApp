import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import { useSnackbar } from 'notistack';

export default function ChangePassword() {
    const navigate = useNavigate();
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        document.body.style.overflowY = 'auto';
    }, []);

    const GoToDashBoard = () => {
        document.body.style.overflowY = 'auto';
        navigate("/DashBoard");
        document.getElementById("DashBoardText2").innerHTML = "Dashboard";
        document.getElementById("CurrentNavText2").innerHTML = "Home - Dashboard";
    };

    const handleChangePassword = async () => {
        if (!currentPassword || !newPassword || !confirmPassword) {
            enqueueSnackbar('All fields are required.', { variant: 'error' });
            return;
        }

        if (currentPassword.length < 6) {
            enqueueSnackbar('Current Password must be at least 6 characters.', { variant: 'error' });
            return;
        }

        if (newPassword.length < 6) {
            enqueueSnackbar('New Password must be at least 6 characters.', { variant: 'error' });
            return;
        }

        if (newPassword !== confirmPassword) {
            enqueueSnackbar('Passwords do not match.', { variant: 'error' });
            return;
        }

        setIsLoading(true);
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await axios.post('https://signal.payguru.com.ng/api/change-password', {
                current_password: currentPassword,
                new_password: newPassword,
                new_password_confirmation: confirmPassword,
            }, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                enqueueSnackbar('Password reset successful.', { variant: 'success' });
                GoToDashBoard();
            } else {
                const errorResponse = response.data;
                enqueueSnackbar(`Error: ${errorResponse.error}`, { variant: 'error' });
            }
        } catch (error) {
            enqueueSnackbar('Something went wrong. Please try again.', { variant: 'error' });
            console.error('Error changing password:', error);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <>
            <div id="ChangePasswordAuthPageBG">
                <div id="ChangePasswordBG">
                    <div id="FormTitle">Change Password</div>
                    <div id="InputFieldBG">
                        <div id="InputFieldLabel">Current Password</div>
                        <input
                            id="InputField"
                            type="password"
                            placeholder="Current Password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                    </div>

                    <div id="InputFieldBG">
                        <div id="InputFieldLabel">New Password</div>
                        <input
                            id="InputField"
                            type="password"
                            placeholder="Enter New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>

                    <div id="InputFieldBG">
                        <div id="InputFieldLabel">Confirm Password</div>
                        <input id="InputField"
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <div id="SubmitText" onClick={handleChangePassword}>
                        <span>{isLoading ? 'Submitting...' : 'Submit'}</span>
                    </div>
                </div>
            </div>
        </>
    );
}