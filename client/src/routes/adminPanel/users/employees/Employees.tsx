import { useNavigate } from "react-router-dom"
import { TrashBin } from "../../../common/SvgImages"
import { TextBase } from "../../../common/TextElements"

function Employees() {
    const navigate = useNavigate();
    return (
        <>
            <table className="table-auto w-full">
                <thead>
                    <tr className="bg-blue-white dark:bg-blue-dark">
                        <th className="p-3"><TextBase>ФИО</TextBase></th>
                        <th className="p-3"><TextBase>Врач</TextBase></th>
                        <th className="p-3"><TextBase>Услуга</TextBase></th>
                        <th className="p-3"><TextBase>Время</TextBase></th>
                        <th className="p-3"> </th>
                    </tr>
                </thead>
                <tbody className="text-center border-[1px]">
                    <tr>
                        <td className="p-3" onClick={() => { console.log(1) }}><TextBase>Курмангазы Бекзат</TextBase></td>
                        <td className="p-3" onClick={() => { console.log(1) }}><TextBase>Нысанбаева Айым</TextBase></td>
                        <td className="p-3" onClick={() => { console.log(1) }}><TextBase>Чистка зубов</TextBase></td>
                        <td className="p-3" onClick={() => { console.log(1) }}><TextBase>20.01.2022 15:00</TextBase></td>
                        <td className="p-3" onClick={() => { console.log(2) }}><TrashBin /></td>
                    </tr>
                </tbody>
            </table>

            <div className="mt-10 flex justify-center">
                <button onClick={() => navigate("/admin/employees/new")} className="px-8 py-3 bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full">
                    Добавить работника
                </button>
            </div>
        </>
    )
}

export default Employees;