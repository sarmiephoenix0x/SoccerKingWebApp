import ViewMoreImg from '../images/MoreImg.png'

export default function ChatProfileContent(props) {
    return (
        <>
            <div className='ChatProfileContent'>
                <div className='CPContentSub'>
                    <img className="CPImg" src={props.img} alt="FileType" />
                    <div className='CPContent'>
                        <div className='CPContentHeader'>{props.content}</div>
                        <div className='CPContentSubHeader'>{props.content2}</div>
                    </div>
                </div>
                <img className="ViewMoreImg" src={ViewMoreImg} alt="View More" />
            </div>
        </>
    )
}