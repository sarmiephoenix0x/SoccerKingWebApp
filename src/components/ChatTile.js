export default function ChatTile({ img, name, content, timestamp, hasNewMessage }) {
    return (
        <div className="chat-tile-main">
            <div className="profile-img-container">
                <img className="profile-img" src={img} alt="Profile" />
                {hasNewMessage=="true" && <div className="new-message-dot" />}
            </div>
            <div className="chat-info">
                <div className="chat-header">
                    <div className="chat-name">{name}</div>
                    <div className="chat-timestamp">{timestamp}</div>
                </div>
                <div className="chat-content">{content}</div>
            </div>
        </div>
    );
}
