import PlayerProfileImg from '../images/ProfileImg.png'
import EditImg from '../images/EditImg.png'
import VertDots from '../images/VertDots.png'
import MoreDown from '../images/MoreDown.png'

export default function Settings() {
    return (
        <>
            <div id="SettingsMain">
                <div id="ProfileSettings">
                    <div className="SettingsSpacer">
                        <div className="SettingsHeader">
                            Your Profile
                        </div>
                        <div className="SettingsAshText">
                            Joined 2/6/23
                        </div>
                    </div>
                    <img id="PlayerProfileImg2" src={PlayerProfileImg} alt="PlayerProfileImg" />
                    <div className="SettingsSpacer">
                        <div className="SettingsColumnizer">
                            <div className="SettingsHeader">
                                Soccer, Kingdom
                            </div>
                            <div className="SettingsAshText">
                                +234 1234567890
                            </div>
                        </div>
                        {/* <div id="ReduceSize"> */}
                        <div className="SettingsCurvedColoredItem">
                            <img id="EditImg" src={EditImg} alt="EditImg" />
                            Edit
                        </div>
                        {/* </div> */}
                    </div>
                </div>

                <div id="EmailSettings">
                    <div className="SettingsHeader">
                        Emails
                    </div>
                    <div className="SettingsSpacer2">
                    <div className="SettingsCurvedColoredItem">
                        <span className="Primary">Primary</span>
                        </div>
                        </div>
                    <div className="SettingsColumnizer">
                    <div className="SettingsSpacer">
                        <div className="SettingsBodyText">
                            soccerkingdom@gmail.com
                        </div>
                        <img className="VertDots" src={VertDots} alt="VertDots" />
                    </div>
                    <div className="SettingsSpacer">
                        <div className="SettingsBodyText">
                            soccerkingdom@gmail1.com
                        </div>
                        <img className="VertDots" src={VertDots} alt="VertDots" />
                    </div>
                    </div>
                    <div className="SettingsSpacer2">
                        <div className="SettingsCurvedColoredItem">
                            See all emails (4)
                        </div>

                        <div className="SettingsCurvedTransparentItem">
                            Add Email
                        </div>
                    </div>
                </div>

                <div id="PhoneNumberSettings">
                    <div className="SettingsHeader">
                        Phone Number
                    </div>
                    <div className="SettingsSpacer2">
                    <div className="SettingsCurvedColoredItem">
                        <span className="Primary">Primary</span>
                        </div>
                        </div>
                    <div className="SettingsColumnizer">
                    <div className="SettingsSpacer">
                        <div className="SettingsBodyText">
                            +234 123456789
                        </div>
                        <img className="VertDots" src={VertDots} alt="VertDots" />
                    </div>
                    <div className="SettingsSpacer">
                        <div className="SettingsBodyText">
                            +234 123456789
                        </div>
                        <img className="VertDots" src={VertDots} alt="VertDots" />
                        </div>
                        </div>
                    <div className="SettingsSpacer2">
                        <div className="SettingsCurvedColoredItem">
                            See all
                        </div>

                        <div className="SettingsCurvedTransparentItem">
                            Add Phone Number
                        </div>
                    </div>
                </div>


                <div id="AddressSettings">
                    <div className="SettingsHeader">
                        Address
                    </div>
                    <div className="SettingsSpacer2">
                    <div className="SettingsCurvedColoredItem">
                        <span className="Primary">Primary</span>
                        </div>
                        </div>
                    <div className="SettingsColumnizer">
                    <div className="SettingsSpacer">
                        <div className="SettingsBodyText">
                            1234 Place, Along Some-where.
                            State, Nigeria
                        </div>
                        <img className="VertDots" src={VertDots} alt="VertDots" />
                    </div>
                    <div className="SettingsSpacer">
                        <div className="SettingsBodyText">
                            1234 Place, Along Some-where.
                            State, Nigeria
                        </div>
                        <img className="VertDots" src={VertDots} alt="VertDots" />
                        </div>
                        </div>
                </div>

                <div id="AccountOptionsSettings">
                    <div className="SettingsHeader">
                        Account Options
                    </div>
                    <div className="SettingsSpacer">
                        <div className="SettingsColumnizer">
                            <div className="SettingsAshText">
                                Language
                            </div>
                            <div className="SettingsBodyText">
                                English
                            </div>
                        </div>
                        <img className="MoreDown" src={MoreDown} alt="MoreDown" />
                    </div>

                    <div className="SettingsSpacer">
                        <div className="SettingsColumnizer">
                            <div className="SettingsAshText">
                                Time Zone
                            </div>
                            <div className="SettingsBodyText">
                                (UTC + 1:00) West Central Africa
                            </div>
                        </div>
                        <img className="MoreDown" src={MoreDown} alt="MoreDown" />
                    </div>

                    <div className="SettingsSpacer">
                        <div className="SettingsColumnizer">
                            <div className="SettingsAshText">
                                Nationality
                            </div>
                            <div className="SettingsBodyText">
                                Nigeria
                            </div>
                        </div>
                        <img className="MoreDown" src={MoreDown} alt="MoreDown" />
                    </div>

                    <div className="SettingsSpacer">
                        <div className="SettingsColumnizer">
                            <div className="SettingsAshText">
                                Club of Choice
                            </div>
                            <div className="SettingsBodyText">
                                Soccer Kingdom
                            </div>
                        </div>
                        <img className="MoreDown" src={MoreDown} alt="MoreDown" />
                    </div>
                </div>
            </div>
        </>
    )
}