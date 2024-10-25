import PlayerProfileImg from '../images/ProfileImg.png'
import StarImg from '../images/Star.png'
import UsersImg from '../images/UsersImg.png'
import TopNewsImg from '../images/TopNewsImg.png'
import TopNewsCard from '../components/TopNewsCard'

export default function DashBoardPage() {
    return (
        <>
            <div id="Welcome">
                <div id="WelcomeText">
                    <span id="Greetings">Welcome,</span> User 1
                </div>
                <div id="WelcomeText2">
                    You can have a lot at the current stat
                </div>
            </div>
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




                <div id="Balance">
                    <div id="BalanceMainSub1">
                        <div id="BalanceText">
                            Balance
                        </div>
                        <img id="UsersImg" src={UsersImg} alt="UsersImg" />
                    </div>
                    <div id="BalanceMainSub">
                        <div id="BalanceText2">
                            $500
                        </div>

                        <div id="BalanceText3">
                            Income
                        </div>
                    </div>
                </div>


                <div id="TopLeaders">
                    <div id="TLText">
                        Top Leaders
                    </div>
                    <div id="TLSubAlign">
                        <div id="TLSub">
                            <div id="SubHeader">Rank</div>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                        </div>


                        <div id="TLSub2">
                            <div id="SubHeader">Name</div>
                            <div>Abdul</div>
                            <div>Philip</div>
                            <div>Sarmie</div>
                            <div>Ivy</div>
                            <div>Vicks</div>
                        </div>


                        <div id="TLSub3">
                            <div id="SubHeader">Points</div>
                            <div>25</div>
                            <div>20</div>
                            <div>15</div>
                            <div>10</div>
                            <div>5</div>
                        </div>
                    </div>
                </div>



                <div id="TopNews">
                    <div id="TopNewsText">
                        Top News
                    </div>
                    <TopNewsCard
                        header="How to win effortlessly?"
                        content="Winning effortlessly is easy Soccer Kingdom, but are you prepared?"
                        img={TopNewsImg}
                    />

                    <TopNewsCard
                        header="What are our followers saying?"
                        content="Have you been keeping tabs on what the Soccer Kingdom fans are saying?"
                        img={TopNewsImg}
                    />


                    <TopNewsCard
                        header="Here’s how to compete on Soccer Kingdom"
                        content="A comprehensive guide on how to top teh table on Soccer Kingdom"
                        img={TopNewsImg}
                    />
                </div>
            </div>
        </>
    )
}