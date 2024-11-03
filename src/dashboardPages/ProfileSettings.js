import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

export default function ProfileSettings() {

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
            <div id="ProfileSettingsAuthPageBG">
                <div id="ProfileSettingsBG">
                    <div id="FormTitle">
                        Profile Settings
                    </div>
                    <div id="Row">
                        <div id="ProfileSettingsInputFieldBG">
                            <div id="ProfileSettingsInputFieldLabel">
                                First Name
                            </div>
                            <input id="ProfileSettingsInputField" type="text" placeholder="Enter Your First Name" />
                        </div>


                        <div id="ProfileSettingsInputFieldBG">
                            <div id="ProfileSettingsInputFieldLabel">
                                Last Name
                            </div>
                            <input id="ProfileSettingsInputField" type="text" placeholder="Enter Your Last Name" />
                        </div>
                    </div>
                    <div id="Row">
                        <div id="ProfileSettingsInputFieldBG">
                            <div id="ProfileSettingsInputFieldLabel">
                                Email Address
                            </div>
                            <input id="ProfileSettingsInputField" type="email" placeholder="Enter Your Email Address" />
                        </div>
                        <div id="ProfileSettingsInputFieldBG">
                            <div id="ProfileSettingsInputFieldLabel">
                                Mobile Number
                            </div>
                            <input id="ProfileSettingsInputField" type="number" placeholder="Enter Your Mobile Number" />
                        </div>
                    </div>

                    <div id="Row">
                        <div id="ProfileSettingsInputFieldBG">
                            <div id="ProfileSettingsInputFieldLabel">
                                Address
                            </div>
                            <input id="ProfileSettingsInputField" type="text" placeholder="Enter Your Address" />
                        </div>
                        <div id="ProfileSettingsInputFieldBG">
                            <div id="ProfileSettingsInputFieldLabel">
                                Country
                            </div>
                            <input id="ProfileSettingsInputField" type="text" placeholder="Enter Your Country" />
                        </div>
                    </div>

                    <div id="Row">
                        <div id="ProfileSettingsInputFieldBG">
                            <div id="ProfileSettingsInputFieldLabel">
                                Zip Code
                            </div>
                            <input id="ProfileSettingsInputField" type="number" placeholder="Enter Your Zip Code" />
                        </div>

                        <div id="ProfileSettingsInputFieldBG">
                            <div id="ProfileSettingsInputFieldLabel">
                                City
                            </div>
                            <input id="ProfileSettingsInputField" type="text" placeholder="Enter Your City" />
                        </div>
                        <div id="ProfileSettingsInputFieldBG">
                            <div id="ProfileSettingsInputFieldLabel">
                                State
                            </div>
                            <input id="ProfileSettingsInputField" type="text" placeholder="Enter Your State" />
                        </div>
                    </div>

                    <div id="SubmitText" onClick={GoToDashBoard}>
                        <span>Submit</span>
                    </div>
                </div>
            </div>
        </>
    )
}