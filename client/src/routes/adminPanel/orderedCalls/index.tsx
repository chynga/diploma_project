import axios from "axios";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import { TrashBin } from "../../common/SvgImages";
import { TextBase } from "../../common/TextElements";
import { User } from "../../common/types";

type OrderedCall = {
    id: number
    clientId: number
    client: User
}

function OrderedCallsPage() {
    const { user } = useAppSelector(selectAuth);
    const [orderedCalls, setOrderedCalls] = useState<OrderedCall[]>([]);

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

    return (
        <div className="h-[70vh] p-10 overflow-auto shadow-lg rounded-lg">
            <table className="table-auto w-full">
                <thead>
                    <tr className="bg-blue-white dark:bg-blue-dark">
                        <th className="p-3"><TextBase>ФИО</TextBase></th>
                        <th className="p-3"><TextBase>Номер телефона</TextBase></th>
                    </tr>
                </thead>
                <tbody className="text-center border-[1px]">
                    {orderedCalls.map(orderedCall => {
                        return (
                            <tr key={orderedCall.id}>
                                <td className="p-3"><TextBase>{orderedCall.client.fullName}</TextBase></td>
                                <td className="p-3"><TextBase>{orderedCall.client.phone}</TextBase></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    );
}

export default OrderedCallsPage;