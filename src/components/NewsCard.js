import ClockImg from '../images/ClockImg.png'

export default function NewsCard(props) {
    return (
        <>
            <div id="NewsCard">
                <img id="NewsImg" src={props.img} alt="NewsImg" />
                <div id="NewsCardSub">
                    <div id="NewsCardText">
                        {props.content}
                    </div>
                    <div id="NewsCardSub2">
                        <div id="NewsTag">
                            {props.newstag}
                        </div>

                        <div id="Time">
                            <img id="ClockImg" src={ClockImg} alt="ClockImg" />
                            <div>{props.time}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}