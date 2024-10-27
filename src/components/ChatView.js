import React, { useState } from 'react';
import ChatBubble from "../components/ChatBubble";
import ProfileImg from '../images/ProfileImg.png';
import Emoji from '../images/Emoji.png';
import Pin from '../images/Pin.png';
import SendImg from '../images/SendImg.png';

export default function ChatView(props) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    // Handle sending a message
    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { message: newMessage, sender: "sender" }]);
            setNewMessage("");
        }
    };

    return (
        <div className="ChatViewContainer">
            {/* Header with Profile Info */}
            <div className="ChatViewHeader">
                <img className="ProfileImg" src={ProfileImg} alt="Profile" />
                <div className="UserInfo">
                    <span className="UserName">{props.name}</span>
                    {props.online === "true" ? (
                        <span className="UserStatus">Online</span>
                    ) : (
                        <span className="UserStatus">Last seen, 12:00</span>
                    )}
                </div>
            </div>

            {/* Chat Messages Area */}
            <div className="ChatMessages">
                {messages.length > 0 ? (
                    messages.map((msg, index) => (
                        <ChatBubble key={index} message={msg.message} sender={msg.sender} />
                    ))
                ) : (
                    <div className="EmptyChatMessage">This is your first chat, say something nice!</div>
                )}
            </div>

            {/* Message Input Box */}
            <div className="MessageBoxContainer">
                <input
                    className="MessageBoxField"
                    type="text"
                    placeholder="Message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} // Send on Enter key press
                />
                <img className="MessageBoxEmoji" src={Emoji} alt="Emoji" />
                <img className="MessageBoxPin" src={Pin} alt="Pin" />
                <img
                    className="MessageBoxSendImg"
                    src={SendImg}
                    alt="Send"
                    onClick={handleSendMessage}
                />
            </div>
        </div>
    );
}
