import ChatBubble from "./ChatBubble";
import ProfileImg from '../images/ProfileImg.png';
import React from 'react';

export default function ChatView(props) {
    return (
        <div className="ChatViewContainer">
            {/* Header with Profile Info */}
            <div className="ChatViewHeader">
                <img className="ProfileImg" src={ProfileImg} alt="Profile" />
                <div className="UserInfo">
                    <span className="UserName">{props.name}</span>
                    {props.online=="true" ?
                        <span className="UserStatus">Online</span>
                        :
                        <span className="UserStatus">Last seen, 12:00</span>
                    }
                </div>
            </div>

            {/* Chat Messages Area */}
            <div className="ChatMessages">
                <ChatBubble message="Hello! How are you?" sender="receiver" />
                <ChatBubble message="I'm doing well, thanks!" sender="sender" />
                <ChatBubble message="Hello! How are you?" sender="receiver" />
                <ChatBubble message="I'm doing well, thanks!" sender="sender" />
                <ChatBubble message="Hello! How are you?" sender="receiver" />
                <ChatBubble message="I'm doing well, thanks!" sender="sender" />
                <ChatBubble message="Hello! How are you?" sender="receiver" />
                <ChatBubble message="I'm doing well, thanks!" sender="sender" />
                <ChatBubble message="Hello! How are you?" sender="receiver" />
                <ChatBubble message="I'm doing well, thanks!" sender="sender" />
                <ChatBubble message="Hello! How are you?" sender="receiver" />
                <ChatBubble message="I'm doing well, thanks!" sender="sender" />
            </div>
        </div>
    );
}
