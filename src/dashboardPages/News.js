import NewsImg from '../images/NewsImg.png'
import NewsCard from '../components/NewsCard'
import InfoImg from '../images/ep_info-filled.png'
import BottomInfo from '../components/BottomInfo'
import FireImg from '../images/Fire.png'
import HeadlineCard from '../components/HeadlineCard'

export default function News() {
    return (
        <>
            <div id="NewsMain">
                <div id="NewsMainSub">
                    <div id="NewsMainSubText">
                        Featured News
                    </div>
                    <div id="NewsMainSub2">
                        <NewsCard
                            content="This place here is the headline of the news related to SK."
                            newstag="Fox News"
                            time="2:00 PM"
                            img={NewsImg}
                        />
                        <NewsCard
                            content="This place here is the headline of the news related to SK."
                            newstag="CNN News"
                            time="2:00 PM"
                            img={NewsImg}
                        />
                        <NewsCard
                            content="This place here is the headline of the news related to SK."
                            newstag="BBC News"
                            time="2:00 PM"
                            img={NewsImg}
                        />
                    </div>
                    </div>
                    <div id="NewsSubAlign">
                    <div id="NewsSubAlign2">
                        <div id="NewsMainSubText">
                            Today’s Headlines
                        </div>
                        <div id="NewsMainSub3">
                            <HeadlineCard
                                content="Another News Headline"
                                Headlinetag="BBC News"
                                time="2:00 PM"
                                img={NewsImg}
                            />
                            </div>
                            </div>
                        <div id="TopLeadersNews">
                            <div id="TLMainSub">
                                <div id="TLText">
                                    Top Leaders
                                    <img id="FireImg" src={FireImg} alt="FireImg" />
                                    <img id="InfoImg" src={InfoImg} alt="InfoImg" />
                                </div>
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
                            <div id="TLMainSub">
                                <BottomInfo content="This Week" redarrow="none" />
                            </div>
                        </div>

                    </div>
                
            </div>
        </>
    )
}