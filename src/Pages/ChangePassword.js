import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

export default function ChangePassword() {

    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflowY = 'auto';
    }, []);

    const GoToDashBoard = () => {
        document.body.style.overflowY = 'auto';
        navigate("/DashBoard");
        document.getElementById("DashBoardText2").innerHTML = "Dashboard";
        document.getElementById("CurrentNavText2").innerHTML = "Home - Dashboard";
    };

    return (
        <>
            <div id="ChangePasswordAuthPageBG">
                <div id="ChangePasswordBG">
                    <div id="FormTitle">
                        Change Password
                    </div>
                    <div id="InputFieldBG">
                        <div id="InputFieldLabel">
                            Current Password
                        </div>
                        <input id="InputField" type="password" placeholder="Current Password" />
                    </div>

                    <div id="InputFieldBG">
                        <div id="InputFieldLabel">
                            Password
                        </div>
                        <input id="InputField" type="password" placeholder="Enter New Password" />
                    </div>

                    <div id="InputFieldBG">
                        <div id="InputFieldLabel">
                            Confirm Password
                        </div>
                        <input id="InputField" type="password" placeholder="Confirm Password" />
                    </div>

                    <div id="SubmitText" onClick={GoToDashBoard}>
                        <span>Submit</span>
                    </div>
                </div>
            </div>
        </>
    )
}