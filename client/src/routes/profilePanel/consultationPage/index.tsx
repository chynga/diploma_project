import { TextBase } from "../../common/TextElements";

function ConsultationPage() {
    const messages = [
        {
            isClient: false,
            time: '14:23',
            text: 'Приходите в понедельник по записи !',
        },
        {
            isClient: true,
            time: '14:21',
            text: 'Приходите в понедельник по записи !',
        },
        {
            isClient: true,
            time: '14:13',
            text: 'Приходите в понедельник по записи !',
        },
        {
            isClient: false,
            time: '14:10',
            text: 'Приходите в понедельник по записи !',
        },
        {
            isClient: false,
            time: '14:10',
            text: 'Приходите в понедельник по записи !',
        },
        {
            isClient: false,
            time: '14:10',
            text: 'Приходите в понедельник по записи !',
        },
        {
            isClient: false,
            time: '14:10',
            text: 'Приходите в понедельник по записи !',
        },
        {
            isClient: false,
            time: '14:10',
            text: 'Приходите в понедельник по записи !',
        },
        {
            isClient: false,
            time: '14:10',
            text: 'Приходите в понедельник по записи !',
        },
        {
            isClient: false,
            time: '14:10',
            text: 'Приходите в понедельник по записи !',
        },
        {
            isClient: false,
            time: '14:10',
            text: 'Приходите в понедельник по записи !',
        },
        {
            isClient: false,
            time: '14:10',
            text: 'Приходите в понедельник по записи !',
        },
        {
            isClient: false,
            time: '14:10',
            text: 'Приходите в понедельник по записи !',
        },
    ];

    return (
        <div>
            <div className="w-full h-[400px] p-5 flex flex-col-reverse gap-5 bg-[#277ff240] rounded-xl overflow-auto">
                {messages.map(message => {
                    return (
                        <div>
                            <TextBase className={`${message.isClient ? "text-right" : "text-left"}`}>
                                {!message.isClient ? message.time : ''}&emsp;{message.text}&emsp;{message.isClient ? message.time : ''}
                            </TextBase>
                        </div>);
                })}
            </div>
            <input type="text" placeholder="Отправить сообение ..." className="mt-5 px-6 py-2 bg-[#D9D9D9] rounded-full w-full" />

            <button className="mt-6 px-8 py-3 inline-block bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full">
                Отправить
            </button>
        </div>
    );
}

export default ConsultationPage;