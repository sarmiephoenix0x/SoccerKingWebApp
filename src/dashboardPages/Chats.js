import ChatProfile from "../components/ChatProfile";
import ChatsLists from "../components/ChatsLists";
import ChatView from "../components/ChatView";
import { useState } from "react";
import ProfileImg from '../images/ProfileImg.png';

export default function Chats() {
    // State to track the selected chat
    const [selectedChat, setSelectedChat] = useState({
        name: "Abubakar Abdul",
        bio: "UI/UX Designer",
        img: ProfileImg,
        online: true
    });

    // Function to handle selecting a chat from the list
    const handleSelectChat = (chat) => {
        setSelectedChat(chat);
    };

    return (
        <div id="ChatsMain">
            <ChatsLists onSelectChat={handleSelectChat} />
            <ChatView
                name={selectedChat.name}
                online={selectedChat.online}
            />
            <ChatProfile
                name={selectedChat.name}
                bio={selectedChat.bio}
                img={selectedChat.img}
            />
        </div>
    );
}
