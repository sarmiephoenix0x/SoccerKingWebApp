import PlayerProfileImg from '../images/ProfileImg.png'
import StarImg from '../images/Star.png'

export default function DashBoardPage() {
    return (
        <>
            <div id="DashboardMain">
            <div id="PlayerOfTheWeek">
                <img id="PlayerProfileImg" src={PlayerProfileImg} alt="PlayerProfileImg" />
                <img id="StarImg" src={StarImg} alt="StarImg" />
                <div id="POWText">
Soccer, Kingdom
                </div>
                <div id="POWText2">
Top Player of the Week
                </div>
            </div>


            <div id="Users">
                <div id="UsersText">
                    Users
                </div>

                <div id="UsersText2">
                    #1
                </div>

                <div id="UsersText3">
                    Your Rank
                </div>



                <div id="UsersText4">
                    #100
                </div>

                <div id="UsersText5">
                    Players
                </div>
                </div>
                </div>
        </>
    )
}