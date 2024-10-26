import ClockImg from '../images/ClockImg.png'
import LikeImg from '../images/LikeImg.png'
import CommentImg from '../images/CommentImg.png'

export default function HeadlineCard(props) {
    return (
        <>
            <div className="HeadlineCard">
                <img className="HeadlineImg" src={props.img} alt="HeadlineImg" />
                <div className="HeadlineCardSub">
                    <div className="HeadlineCardText">
                        {props.content}
                    </div>
                    <div className="HeadlineCardSub3">
                        <div className="IconsAlign">
                            <img className="LikeImg" src={LikeImg} alt="LikeImg" />
                            12k
                        </div>
                        <div className="IconsAlign">
                            <img className="CommentImg" src={CommentImg} alt="CommentImg" />
                            10.1k
                        </div>
                    </div>
                    <div className="HeadlineCardSub2">
                        <div className="HeadlineTag">
                            {props.Headlinetag}
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