import UpArrowImg from '../images/UpArrow.png'
import DownArrowImg from '../images/DownArrow.png'

export default function BottomInfo(props) {
    return (
        <><div id="BottomInfo">
            {props.img != "" && (
                <>
                    <img id="ArrowImg" src={UpArrowImg} alt="ArrowImg" />
                    {props.redarrow != "none" && (
                        <>
                            <img id="ArrowImg" src={DownArrowImg} alt="ArrowImg" />
                        </>
                    )}
                </>
            )}
            <div><span id="greencontent">{props.content2}</span>{props.content}</div>
        </div>
        </>
    )
}