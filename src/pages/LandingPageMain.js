import LearnMoreImg from '../images/ExternalLinkOutline.png';
import ScrabbleImg from '../images/Vector(exported).png';
import PlayerImg from '../images/1 2.png';
import ServicesCardImg from '../images/carbon_play-filled.png'

export default function LandingPageMain() {
    return (
        <>
            <div id="Sec1Main">
                <div id="Sec1MainSub">
                    <div id="Sec1MainText1">
                        <span id="WelcomeText">Welcome</span>  to Soccer Kingdom
                    </div>
                    <img id="ScrabbleImg" src={ScrabbleImg} alt="ScrabbleImg" />
                    <div id="Sec1MainText2">
                        Step into Soccer Kingdom: Where Legends Rise and Goals Soar! Experience the pulse of the pitch like never before. Are you ready for the game-changing adventure?
                    </div>
                    <div id="LearnMoreText">
                        <img id="LearnMoreImg" src={LearnMoreImg} alt="LearnMoreImg" />
                        <span>Learn More</span>
                    </div>

                </div>
                <img id="PlayerImg" src={PlayerImg} alt="PlayerImg" />
            </div>

            <div id="Sec2Main">
                <div id="Sec2MainText1">
                    Our Services
                </div>
                <div id="Sec1MainSub">
                    <div id="ServicesCard">
                        <div id="ServicesCardHeaderText">Live Match Streaming</div>
                        <div id="ServicesCardBody">
                            Providing live streaming services for soccer matches, allowing users to watch their favorite teams, and players in action.
                        </div>
                        <img id="ServicesCardImg" src={ServicesCardImg} alt="ServicesCardImg" />
                    </div>
                </div>
            </div>
        </>
    )
}