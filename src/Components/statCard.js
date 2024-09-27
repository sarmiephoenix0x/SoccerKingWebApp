import StatForwardImg from '../images/ForwardButton.png'

export default function StatCard(props) {
    return (
        <>
            <div id="StatBG">
            <div id="SubStatBG">
                <img id="StatImg" src={props.img} alt="Stat" />
                <hr id="StatDivider" />
                <div id="StatView">
                        <div id="StatText">{props.title}</div>
                        <div id="StatText2">{props.content}</div>
                </div>
                    
                </div>
                <div id="StatForwardImgAligner">
                    <img id="StatForwardImg" src={StatForwardImg} alt="Stat" />
                    </div>
            </div>
        </>
    )
}