import ProfileImg from '../images/ProfileImg.png';
import ChatProfileContent from './ChatProfileContent';
import Documents from '../images/Documents.png'
import Photos from '../images/Photos.png'
import Videos from '../images/Videos.png'
import Links from '../images/Links.png'

export default function ChatProfile(props) {
    return (
        <>
            <div className="ChatProfileContainer">
                <div className='CPUserProfile'>
                    <img className="CPProfileImg" src={ProfileImg} alt="Profile" />
                    <div className="UserName">{props.name}</div>
                    <div className="Bio">{props.bio}</div>
                    <div className="tab-divider2"></div>
                </div>
                <div className="CPContentView">
                    <div className="CPContentHeaderText">File Type</div>
                    <ChatProfileContent
                        img={Documents}
                        content="Documents"
                        content2="126 Files, 944MB"
                    />
                    <ChatProfileContent
                        img={Photos}
                        content="Photos"
                        content2="323 Files, 150MB"
                    />
                    <ChatProfileContent
                        img={Videos}
                        content="Videos"
                        content2="12 Files, 360MB"
                    />
                    <ChatProfileContent
                        img={Links}
                        content="Links"
                        content2="123 Links"
                    />
                </div>
            </div>
        </>
    )
}