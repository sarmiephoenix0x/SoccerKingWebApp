import ChatsLists from "../components/ChatsLists";
import ChatView from "../components/ChatView";

export default function Chats() {
    return (
        <>
            <div id="ChatsMain">
                <ChatsLists />
                <ChatView/>
        </div>
        </>
    )
}