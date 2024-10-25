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
                    <NewsCard img={NewsImg} />
                    </div>
            </div>
        </>
    )
}