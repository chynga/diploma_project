import axios from "axios";
import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import Chat from "../../common/Chat";
import { Message } from "../../common/types";

function ConsultationPage() {
    const [body, setBody] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const { user } = useAppSelector(selectAuth);
    const socketUrl = `ws://localhost:8080/chat?client_id=${user?.id}&token=${user?.token}`;

    const { sendJsonMessage } = useWebSocket(socketUrl, {
        onOpen: () => console.log('opened'),
        //Will attempt to reconnect on all close events, such as server shutting down
        shouldReconnect: (closeEvent) => true,
        onClose: () => console.log('closed'),
        onMessage: (event) => {
            const message: Message = JSON.parse(event.data);
            messages?.push(message);
        }
    });

    useEffect(() => {
        const apiUrl = "/api/profile/messages";
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };

        axios.get(apiUrl, config).then((resp) => {
            let messages: Message[] = resp.data;
            messages.sort((a, b) => b.sentTime - a.sentTime);
            setMessages(messages);
        });
    }, [messages])

    const handleSend = (e: any) => {
        e.preventDefault();
        var json = {
            "body": body
        };
        setBody("");

        sendJsonMessage(json);
    }

    const onChange = (e: any) => {
        setBody(e.target.value);
    }

    return (
        <Chat messages={messages} body={body} onChange={onChange} handleSend={handleSend} className={"h-[500px]"} />
    );
}

export default ConsultationPage;