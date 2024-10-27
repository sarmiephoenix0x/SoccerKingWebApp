import ChatProfile from "../components/ChatProfile";
import ChatsLists from "../components/ChatsLists";
import ChatView from "../components/ChatView";

export default function Chats() {
    return (
        <>
            <div id="ChatsMain">
                <ChatsLists />
                <ChatView
                    name="Abubakar Abdul"
                    online="true"
                />
                <ChatProfile
                    name="Abubakar Abdul"
                    bio="UI/UX Designer"
                />
        </div>
        </>
    )
}