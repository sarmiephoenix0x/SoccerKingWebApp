import SearchImg from '../images/Search.png'
import NotificationImg from '../images/Notification.png'
import ProfileImg from '../images/ProfileImg.png'

export default function DashBoardTab() {
    return (
        <>
            <div id="DashboardTab">
                <div id="DashboardTabHeader">
                    Homepage
                </div>
                <div id="DashboardTabSub">
                    <img id="Search" src={SearchImg} alt="Search" />
                    <img id="Notification" src={NotificationImg} alt="Notification" />
                    <div id="ProfileBG">
                        <img id="ProfileImg" src={ProfileImg} alt="ProfileImg" />
                        <div id="ProfileName">
                            Onwubalili Philip Nzube
                            <div id="ProfileRole">
                            Admin
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}