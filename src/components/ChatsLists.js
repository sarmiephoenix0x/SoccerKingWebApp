import SearchImg from '../images/Search.png'
import React, { useState } from 'react';
import ChatTile from './ChatTile';
import ProfileImg from '../images/ProfileImg.png'

export default function ChatsLists({ onSelectChat }) {
    const [activeTab, setActiveTab] = useState('Team Chat');

    const chatTiles = [
        { name: "Abubakar Abdul", content: "Vacation details...", timestamp: "11:26", hasNewMessage: true, bio: "UI/UX Designer", img: ProfileImg, online: true },
        { name: "Abiola Makinde", content: "Updates on project", timestamp: "09:45", hasNewMessage: false, bio: "Developer", img: ProfileImg, online: false },
        // Add other chat tiles here with unique information
    ];
    return (
        <>
            <div className="ChatsListsMain">
                <div className="CLSearchInput">
                    <img className="CLSearchImg" src={SearchImg} alt="SearchImg" />
                    <input className='CLTextField' type="text" placeholder="Search People/Group" />
                    <div className='CLPlusText'>+</div>
                </div>
                <div className="tab-container">
                    {/* Tabs */}
                    <div className="tab-header">
                        <div
                            className={`tab-item ${activeTab === 'Team Chat' ? 'active' : ''}`}
                            onClick={() => setActiveTab('Team Chat')}
                        >
                            Team Chat
                        </div>
                        <div
                            className={`tab-item ${activeTab === 'Archived' ? 'active' : ''}`}
                            onClick={() => setActiveTab('Archived')}
                        >
                            Archived
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="tab-divider"></div>

                    {/* Content Display Area */}
                    <div className="tab-content">
                        {activeTab === 'Team Chat' ? (
                            chatTiles.map((chat, index) => (
                                <ChatTile
                                    key={index}
                                    img={chat.img}
                                    name={chat.name}
                                    content={chat.content}
                                    timestamp={chat.timestamp}
                                    hasNewMessage={chat.hasNewMessage}
                                    onClick={() => onSelectChat(chat)}
                                />
                            ))
                        ) : (
                            <p>No Archived Chat</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}