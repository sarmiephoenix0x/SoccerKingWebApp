import UpArrowImg from '../images/UpArrow.png'
import DownArrowImg from '../images/DownArrow.png'

export default function BottomInfo(props) {
    return (
        <><div className="BottomInfo">
            {props.img != "" && (
                <>
                    {props.greenarrow != "none" && (
                        <>
                            <img className="ArrowImg" src={UpArrowImg} alt="ArrowImg" />
                        </>
                    )}
                    {props.redarrow != "none" && (
                        <>
                            <img className="ArrowImg" src={DownArrowImg} alt="ArrowImg" />
                        </>
                    )}
                </>
            )}
            <div><span className="greencontent">{props.content2}</span>{props.content}</div>
        </div>
        </>
    )
}