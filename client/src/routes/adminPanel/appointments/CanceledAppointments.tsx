import { TextBase } from "../../common/TextElements";

function CanceledAppointments() {
    return (
        <div>
            <table className="table-auto w-full">
                <thead>
                    <tr className="bg-blue-white dark:bg-blue-dark">
                        <th className="p-3"><TextBase>ФИО</TextBase></th>
                        <th className="p-3"><TextBase>Врач</TextBase></th>
                        <th className="p-3"><TextBase>Услуга</TextBase></th>
                        <th className="p-3"><TextBase>Время</TextBase></th>
                    </tr>
                </thead>
                <tbody className="text-center border-[1px]">
                    <tr>
                        <td className="p-3"><TextBase>Курмангазы Бекзат</TextBase></td>
                        <td className="p-3"><TextBase>Нысанбаева Айым</TextBase></td>
                        <td className="p-3"><TextBase>Чистка зубов</TextBase></td>
                        <td className="p-3"><TextBase>20.01.2022 15:00</TextBase></td>
                    </tr>
                    <tr>
                        <td className="p-3"><TextBase>Курмангазы Бекзат</TextBase></td>
                        <td className="p-3"><TextBase>Нысанбаева Айым</TextBase></td>
                        <td className="p-3"><TextBase>Чистка зубов</TextBase></td>
                        <td className="p-3"><TextBase>20.01.2022 15:00</TextBase></td>
                    </tr>
                    <tr>
                        <td className="p-3"><TextBase>Курмангазы Бекзат</TextBase></td>
                        <td className="p-3"><TextBase>Нысанбаева Айым</TextBase></td>
                        <td className="p-3"><TextBase>Чистка зубов</TextBase></td>
                        <td className="p-3"><TextBase>20.01.2022 15:00</TextBase></td>
                    </tr>
                    <tr>
                        <td className="p-3"><TextBase>Курмангазы Бекзат</TextBase></td>
                        <td className="p-3"><TextBase>Нысанбаева Айым</TextBase></td>
                        <td className="p-3"><TextBase>Чистка зубов</TextBase></td>
                        <td className="p-3"><TextBase>20.01.2022 15:00</TextBase></td>
                    </tr>
                    <tr>
                        <td className="p-3"><TextBase>Курмангазы Бекзат</TextBase></td>
                        <td className="p-3"><TextBase>Нысанбаева Айым</TextBase></td>
                        <td className="p-3"><TextBase>Чистка зубов</TextBase></td>
                        <td className="p-3"><TextBase>20.01.2022 15:00</TextBase></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CanceledAppointments;