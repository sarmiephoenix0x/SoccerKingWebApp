import LearnMoreImg from '../images/ExternalLinkOutline.png';
import ScrabbleImg from '../images/Vector(exported).png';
import PlayerImg from '../images/1 2.png';
import PlayerImg2 from '../images/5 2.png';
import ServicesCardImg from '../images/carbon_play-filled.png'
import ServicesCardImg2 from '../images/material-symbols_card-membership.png'
import ServicesCardImg3 from '../images/material-symbols_interactive-space.png'
import ServicesCardImg4 from '../images/icons8_news.png'
import ServicesCardImg5 from '../images/iconoir_community.png'
import ServicesCard from '../components/ServicesCard';
import Number1Img from '../images/Number1.png';
import Number2Img from '../images/Number2.png';
import QuestionsCard from '../components/QuestionsCard'
import GeneralQuestionImg from '../images/material-symbols_general-device.png'
import MoreQuestionsCardImg from '../images/Vector2.png'
import FAQCard from '../components/FAQCard';
import FAQCardImg from '../images/material-symbols_arrow-drop-down-circle-outline.png';
import FbImg from '../images/Fb.png';
import InstaImg from '../images/Insta.png';


export default function LandingPageMain() {
    return (
        <>
            <div id="LandingPageBG">
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
                    <div id="Sec2MainSub">
                        <ServicesCard
                            header="Live Match Streaming"
                            content="Providing live streaming services for soccer matches, allowing users to watch their favorite teams, and players in action."
                            img={ServicesCardImg}
                        />

                        <ServicesCard
                            header="Membership & Fan Club"
                            content="Creating membership plans and fan clubs for users to engage with exclusive content, behind-the-scenes access, and special perks."
                            img={ServicesCardImg2}
                        />

                        <ServicesCard
                            header="Interactive Challenges"
                            content=" Hosting online challenges, contests, and fantasy leagues for users to participate in and compete against each other."
                            img={ServicesCardImg3}
                        />

                        <ServicesCard
                            header="Soccer News & Updates"
                            content="Providing regular news updates, match analyses, and exclusive content to keep users informed and engaged."
                            img={ServicesCardImg4}
                        />

                        <ServicesCard
                            header="Community & Forum"
                            content="Building a community platform where soccer fans can connect, discuss matches, share insights, and participate in forums."
                            img={ServicesCardImg5}
                        />
                    </div>
                </div>

                <div id="Sec3Main">
                    <img id="PlayerImg2" src={PlayerImg2} alt="PlayerImg" />
                    <div id="Sec3MainSub">
                        <div id="Sec3MainText1">Why choose <span id="SoccerKingdomText">Soccer Kingdom?</span>
                        </div>
                        <div id="Sec3MainText2">
                            <img id="Number1" src={Number1Img} alt="Number1Img" />
                            <div id="Spacer">
                                <div id="Sec3MainText2Sub">
                                    Comprehensive Coverage
                                </div>
                                <div id="Sec3MainText2Sub2">
                                    Soccer Kingdom offers a one-stop destination for all things soccer,
                                    providing comprehensive coverage of matches,
                                    player interviews, behind-the-scenes content, and more.

                                </div>
                            </div>
                        </div>

                        <div id="Sec3MainText3">
                            <img id="Number2" src={Number2Img} alt="Number2Img" />
                            <div id="Spacer">
                                <div id="Sec3MainText3Sub">
                                    Reliable News Source
                                </div>
                                <div id="Sec3MainText3Sub2">
                                    Users can rely on Soccer Kingdom for up-to-date and reliable soccer news, match analyses, and insightful commentary, keeping them well-informed about the latest developments in the soccer world.

                                </div>
                            </div>
                        </div>
                        <div id="GetTheAppText">
                            Get The App
                        </div>
                    </div>
                </div>

                <div id="Sec4Main">
                    <div id="Sec4MainText1">
                        Checkout our <span id="FAQText">FAQ</span>
                    </div>
                    <div id="Sec4MainText2">
                        Have a question about our services? Our FAQ section has got you covered with helpful information on all of our offerings.
                    </div>
                    <div id="QuestionsAlign">
                        <div id="Sec4MainSub">
                            <QuestionsCard
                                content="General Questions"
                                img={GeneralQuestionImg}
                            />
                            <QuestionsCard
                                content="Live Match Streaming Questions"
                                img={ServicesCardImg}
                            />
                            <QuestionsCard
                                content="Membership & Fan Club Questions"
                                img={ServicesCardImg2}
                            />
                            <QuestionsCard
                                content="Interactive Challenges Questions"
                                img={ServicesCardImg3}
                            />
                            <QuestionsCard
                                content="Soccer News & Updates Questions"
                                img={ServicesCardImg4}
                            />

                            <div id="MoreQuestionsCard">
                                <div id="MoreQuestionsCardBody">
                                    Still have Questions? Contact us
                                </div>
                                <img id="MoreQuestionsCardImg" src={MoreQuestionsCardImg} alt="MoreQuestionsCardImg" />
                            </div>
                        </div>
                        <div id="FAQAlign">
                            <FAQCard
                                content="What is Soccer Kingdom?"
                                img={FAQCardImg}
                            />
                            <FAQCard
                                content="Where can I find the latest soccer news on Soccer Kingdom?"
                                img={FAQCardImg}
                            />
                            <FAQCard
                                content="How often is the content updated?"
                                img={FAQCardImg}
                            />
                            <FAQCard
                                content="Can I find information about specific players on Soccer Kingdom?"
                                img={FAQCardImg}
                            />
                        </div>
                    </div>
                </div>


                <div id="Sec5Main">
                    <div id="FooterAlign">
                        <div id="Sec5Sub">
                            <div id="Sec5SubHeader">Quick Links</div>
                            <div>About Us</div>
                            <div>Contact Us</div>
                            <div>Privacy Policy</div>
                            <div>Terms & Conditions</div>
                        </div>
                        <div id="Sec5Sub2">
                            <div id="Sec5Sub2Header">Services</div>
                            <div>Soccer News & Updates</div>
                            <div>Membership & Fan Club</div>
                            <div>Interactive Challenges</div>
                            <div>Community & Forum</div>
                        </div>
                        <div id="Sec5Sub3">
                            <div id="Sec5Sub3Header">Contact Us</div>
                            <div>contact@email.com</div>
                            <div id="SocialIcons">
                                <img id="FbImg" src={FbImg} alt="Facebook" />
                                <img id="InstaImg" src={InstaImg} alt="Instagram" />
                            </div>
                            <div id="SubscribeInputBG">
                                <input id="SubscribeInput" type="text" placeholder='Email Address'/>
                                <div id="SubscribeBut">Subscibe</div>
                            </div>
                        </div>
                    </div>
                    <div id="Sec5MainText1">
                        © 2024
                    </div>

                </div>
            </div>
        </>
    )
}
