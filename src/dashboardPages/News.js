import NewsImg from '../images/NewsImg.png'
import NewsCard from '../components/NewsCard'

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
            </div>
        </>
    )
}