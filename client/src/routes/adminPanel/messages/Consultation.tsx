import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import Chat from "../../common/Chat";
import { Message, User } from "../../common/types";

type ConsultationProps = {
    selectedClient: User | undefined
}

function Consultation({ selectedClient }: ConsultationProps) {

    const [body, setBody] = useState("");
    const { user } = useAppSelector(selectAuth);
    const socketUrl = `ws://localhost:8080/chat?client_id=${selectedClient?.id}&token=${user?.token}`;
    const [messages, setMessages] = useState<Message[]>([]);

    const { sendJsonMessage } = useWebSocket(socketUrl, {
        onOpen: () => console.log('opened'),
        //Will attempt to reconnect on all close events, such as server shutting down
        shouldReconnect: (closeEvent) => true,
        onClose: () => console.log('closed'),
        onMessage: (event) => {
            const message: Message = JSON.parse(event.data);
            messages?.unshift(message);
        }
    });

    useEffect(() => {
        if (selectedClient) {
            const apiUrl = `/api/consultation/clients/${selectedClient.id}/messages`;
            const config = {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            };

            axios.get(apiUrl, config).then((resp) => {
                const messages: Message[] = resp.data;
                messages.sort((a, b) => b.sentTime - a.sentTime);
                setMessages(messages);
            });
        }
    }, [selectedClient])

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
        <Chat isClient={false} messages={messages} body={body} onChange={onChange} handleSend={handleSend} className="h-[300px]" />
    );
}

export default Consultation;