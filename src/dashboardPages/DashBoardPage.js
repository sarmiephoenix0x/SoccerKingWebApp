import PlayerProfileImg from '../images/ProfileImg.png'
import StarImg from '../images/Star.png'
import UsersImg from '../images/UsersImg.png'

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
                <div id="UsersMainSub1">
                    <div id="UsersText">
                        Users
                    </div>
                        <img id="UsersImg" src={UsersImg} alt="UsersImg" />
                        </div>
                    <div id="UsersMain">
                        <div id="UsersMainSub">
                            <div id="UsersText2">
                                #1
                            </div>

                            <div id="UsersText3">
                                Your Rank
                            </div>
                        </div>


                        <div id="UsersMainSub">
                            <div id="UsersText4">
                                #100
                            </div>

                            <div id="UsersText5">
                                Players
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}