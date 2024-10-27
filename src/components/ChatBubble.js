import React from 'react';

export default function ChatBubble({ message, sender }) {
    return (
        <div className={`ChatBubble ${sender === 'sender' ? 'right' : 'left'}`}>
            <p className="ChatBubbleText">{message}</p>
        </div>
    );
}
