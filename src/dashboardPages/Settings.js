import PlayerProfileImg from '../images/ProfileImg.png'
import EditImg from '../images/EditImg.png'

export default function Settings() {
    return (
        <>
            <div id="SettingsMain">
                <div id="SettingsSpacer">
                <div id="SettingsHeader">
                    Your Profile
                </div>
                <div id="SettingsAshText">
                    Joined 2/6/23
                    </div>
                    </div>
                <img id="PlayerProfileImg2" src={PlayerProfileImg} alt="PlayerProfileImg" />
                <div id="SettingsSpacer">
                <div id="SettingsColumnizer">
                <div id="SettingsHeader">
                Soccer, Kingdom
                </div>
                <div id="SettingsAshText">
                +234 1234567890
                </div>
                </div>
                {/* <div id="ReduceSize"> */}
                <div id="SettingsCurvedColoredItem">
                <img id="EditImg" src={EditImg} alt="EditImg" />
                Edit
                    </div>
                    {/* </div> */}
                    </div>
            </div>
        </>
    )
}