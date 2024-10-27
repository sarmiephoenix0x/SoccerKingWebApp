import SearchImg from '../images/Search.png'
import React, { useState } from 'react';
import ChatTile from './ChatTile';
import ProfileImg from '../images/ProfileImg.png'

export default function ChatsLists() {
    const [activeTab, setActiveTab] = useState('Team Chat');
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
                            <>
                                <ChatTile
                                    img={ProfileImg}
                                    name="Abubakar Abdul"
                                    content="We have lake-front vacation"
                                    timestamp="11:26"
                                    hasNewMessage="true"
                                />
                                <ChatTile
                                    img={ProfileImg}
                                    name="Abubakar Abdul"
                                    content="We have lake-front vacation"
                                    timestamp="11:26"
                                    hasNewMessage="true"
                                />
                                <ChatTile
                                    img={ProfileImg}
                                    name="Abubakar Abdul"
                                    content="We have lake-front vacation"
                                    timestamp="11:26"
                                    hasNewMessage="true"
                                />
                                <ChatTile
                                    img={ProfileImg}
                                    name="Abubakar Abdul"
                                    content="We have lake-front vacation"
                                    timestamp="11:26"
                                    hasNewMessage="true"
                                />
                                <ChatTile
                                    img={ProfileImg}
                                    name="Abubakar Abdul"
                                    content="We have lake-front vacation"
                                    timestamp="11:26"
                                    hasNewMessage="true"
                                />
                                <ChatTile
                                    img={ProfileImg}
                                    name="Abubakar Abdul"
                                    content="We have lake-front vacation"
                                    timestamp="11:26"
                                    hasNewMessage="false"
                                />

<ChatTile
                                    img={ProfileImg}
                                    name="Abubakar Abdul"
                                    content="We have lake-front vacation"
                                    timestamp="11:26"
                                    hasNewMessage="false"
                                />

<ChatTile
                                    img={ProfileImg}
                                    name="Abubakar Abdul"
                                    content="We have lake-front vacation"
                                    timestamp="11:26"
                                    hasNewMessage="false"
                                />

<ChatTile
                                    img={ProfileImg}
                                    name="Abubakar Abdul"
                                    content="We have lake-front vacation"
                                    timestamp="11:26"
                                    hasNewMessage="false"
                                />
                            </>
                        ) : (
                            <>
                                <p>No Archived Chat</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}