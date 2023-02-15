import dayjs from "dayjs";
import { TextBase } from "./TextElements";
import { dateFormat, Message, timeFormat } from "./types";

type ChatProps = {
    isClient?: boolean
    messages: Message[]
    body: string
    onChange: (e: any) => void
    handleSend: (e: any) => void
    className?: string
}

function Chat({ isClient = true, messages, body, onChange, handleSend, className = "" }: ChatProps) {
    return (
        <div>
            <div className={`w-full p-5 flex flex-col-reverse gap-5 bg-[#277ff240] rounded-xl overflow-auto ${className}`}>
                {messages?.map(message => {
                    const time = dayjs(message.sentTime).format("DD/MM " + timeFormat);
                    return (
                        <div key={message.id}>
                            <TextBase className={`flex gap-3 ${(message.isClient && !isClient) || (!message.isClient && isClient) ? "justify-start" : "justify-end"}`}>
                                <div className={`${(message.isClient && !isClient) || (!message.isClient && isClient) ? "" : "order-2"}`}>
                                    {time}
                                </div>
                                <div>
                                    {message.body}
                                </div>
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
    )
}

export default Chat;