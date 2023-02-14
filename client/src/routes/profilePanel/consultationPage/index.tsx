import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import { TextBase } from "../../common/TextElements";
import { timeFormat } from "../../common/types";

type Message = {
    id: number
    clientId: number
    consultantId?: number
    body: string
    sentTime: number
    isClient: boolean
}

function ConsultationPage() {
    const [body, setBody] = useState("");
    const [messages, setMessages] = useState<Message[]>();
    const { user } = useAppSelector(selectAuth);
    const socketUrl = `ws://localhost:8080/chat?client_id=${user?.id}&token=${user?.token}`;

    const { sendJsonMessage } = useWebSocket(socketUrl, {
        onOpen: () => console.log('opened'),
        //Will attempt to reconnect on all close events, such as server shutting down
        shouldReconnect: (closeEvent) => true,
        onClose: () => console.log('closed'),
        onMessage: (event) => {
            const message: Message = JSON.parse(event.data);
            console.log(message)
            messages?.push(message)
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

        sendJsonMessage(json);
    }

    const onChange = (e: any) => {
        setBody(e.target.value);
    }

    return (
        <div>
            <div className="w-full h-[400px] p-5 flex flex-col-reverse gap-5 bg-[#277ff240] rounded-xl overflow-auto">
                {messages?.map(message => {
                    const time = dayjs(message.sentTime).format(timeFormat);
                    return (
                        <div key={message.id}>
                            <TextBase className={`${message.isClient ? "text-right" : "text-left"}`}>
                                {/* dayjs(appointment.requestedTime).format(timeFormat) */}
                                {/* {console.log(dayjs())} */}
                                {!message.isClient ? time : ''}&emsp;{message.body}&emsp;{message.isClient ? time : ''}
                            </TextBase>
                        </div>);
                })}
            </div>
            <form onSubmit={handleSend}>
                <input value={body} onChange={onChange} type="text" placeholder="Отправить сообение ..." className="mt-5 px-6 py-2 bg-[#D9D9D9] rounded-full w-full" />

                <button className="mt-6 px-8 py-3 inline-block bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full">
                    Отправить
                </button>
            </form>
        </div>
    );
}

export default ConsultationPage;