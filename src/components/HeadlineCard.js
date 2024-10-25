import ClockImg from '../images/ClockImg.png'
import LikeImg from '../images/LikeImg.png'
import CommentImg from '../images/CommentImg.png'

export default function HeadlineCard(props) {
    return (
        <>
            <div id="HeadlineCard">
                <img id="HeadlineImg" src={props.img} alt="HeadlineImg" />
                <div id="HeadlineCardSub">
                    <div id="HeadlineCardText">
                        {props.content}
                    </div>
                    <div id="HeadlineCardSub3">
                        <div id="IconsAlign">
                            <img id="LikeImg" src={LikeImg} alt="LikeImg" />
                            12k
                        </div>
                        <div id="IconsAlign">
                            <img id="CommentImg" src={CommentImg} alt="CommentImg" />
                            10.1k
                        </div>
                    </div>
                    <div id="HeadlineCardSub2">
                        <div id="HeadlineTag">
                            {props.Headlinetag}
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