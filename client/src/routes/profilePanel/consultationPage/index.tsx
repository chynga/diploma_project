import axios from "axios";
import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import Chat from "../../common/Chat";
import { Message } from "../../common/types";
import dayjs from "dayjs";

function ConsultationPage() {
    const [body, setBody] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const { user } = useAppSelector(selectAuth);
    const socketUrl = `ws://localhost:5001/chat?token=${user?.token}`;

    const { sendJsonMessage } = useWebSocket(socketUrl, {
        onOpen: () => console.log('opened'),

        shouldReconnect: (closeEvent) => true,
        onClose: () => console.log('closed'),
        onMessage: (event) => {
            const message: Message = JSON.parse(event.data);
            messages?.unshift(message);
        }
    });

    useEffect(() => {
        const apiUrl = "/api/consultation/my";
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };

        axios.get(apiUrl, config).then((resp) => {
            let messages: Message[] = resp.data.data.messages;
            messages = messages.sort((a, b) => dayjs(b.createdAt).unix() - dayjs(a.createdAt).unix());
            setMessages(messages);
        }).catch(err => {
            console.log(err)
        })
    }, [])

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