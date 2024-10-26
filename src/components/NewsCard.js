import ClockImg from '../images/ClockImg.png'

export default function NewsCard(props) {
    return (
        <>
            <div className="NewsCard">
                <img className="NewsImg" src={props.img} alt="NewsImg" />
                <div className="NewsCardSub">
                    <div className="NewsCardText">
                        {props.content}
                    </div>
                    <div className="NewsCardSub2">
                        <div className="NewsTag">
                            {props.newstag}
                        </div>

                        <div className="Time">
                            <img className="ClockImg" src={ClockImg} alt="ClockImg" />
                            <div>{props.time}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}