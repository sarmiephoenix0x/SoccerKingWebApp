import ClockImg from '../images/ClockImg.png'

export default function NewsCard(props) {
    return (
        <>
            <div id="NewsCard">
                <img id="NewsImg" src={props.img} alt="NewsImg" />
                <div id="NewsCardSub">
                    <div id="NewsCardText">
                        This place here is the headline of the news related to SK.
                    </div>
                    <div id="NewsCardSub2">
                        <div id="NewsTag">
                            Fox News
                        </div>
                        <div id="Time">
                            <img id="ClockImg" src={ClockImg} alt="ClockImg" />
                            <div>2:00 PM</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}