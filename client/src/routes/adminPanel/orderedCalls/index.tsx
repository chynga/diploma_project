import axios from "axios";
import { SetStateAction, useEffect, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import { TextBase } from "../../common/TextElements";
import { TrashBin } from "../../common/SvgImages";
import { useNavigate } from "react-router-dom";
import { DeleteForm, DeleteTrashCanButton } from "../../common/DeleteConfirmation";

type OrderedCall = {
    id: string
    fullName: string
    phoneNumber: string
}

function OrderedCallsPage() {
    const { user } = useAppSelector(selectAuth);
    const [orderedCalls, setOrderedCalls] = useState<OrderedCall[]>([]);
    const [orderedCallId, setOrderedCallId] = useState<string>();
    const navigate = useNavigate();

    const [showDeleteForm, setShowDeleteForm] = useState(false);

    useEffect(() => {
        const apiUrl = `/api/ordered-calls`;
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };

        axios.get(apiUrl, config).then((resp) => {
            const orderedCalls: OrderedCall[] = resp.data;
            setOrderedCalls(orderedCalls);
        });
    }, [])

    const deleteOrderedCall = (id?: string) => {
        if (!id) {
            return;
        }
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };

        axios.delete(`/api/ordered-calls/${id}`, config)
            .then(_ => {
                navigate(0);
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="h-[70vh] p-10 overflow-auto shadow-lg rounded-lg">
            <table className="table-auto w-full">
                <thead>
                    <tr className="bg-blue-white dark:bg-blue-dark">
                        <th className="p-3"><TextBase><span className="text-primary-dark">ФИО</span></TextBase></th>
                        <th className="p-3"><TextBase><span className="text-primary-dark">Номер телефона</span></TextBase></th>
                        <th className="p-3"></th>
                    </tr>
                </thead>
                <tbody className="text-center border-[1px]">
                    {orderedCalls.map(orderedCall => {
                        return (
                            <tr key={orderedCall.id}>
                                <td className="p-3"><TextBase>{orderedCall.fullName}</TextBase></td>
                                <td className="p-3"><TextBase>{orderedCall.phoneNumber}</TextBase></td>
                                <td className="p-3 pr-5 flex justify-end">
                                    <div className="hover:cursor-pointer"
                                        onClick={() => setOrderedCallId(orderedCall.id)}>
                                        <DeleteTrashCanButton setShow={setShowDeleteForm} />
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <DeleteForm title={"Вы действительно хотите удалить запрос?"} setShow={setShowDeleteForm} show={showDeleteForm} onDelete={() => deleteOrderedCall(orderedCallId)} />
        </div>
    );
}

export default OrderedCallsPage;