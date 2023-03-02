import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import { AppNotification, AppNotificationType, dateFormat, timeFormat } from "../types";

function NotificationList() {
    const [notifications, setNotifications] = useState<AppNotification[]>();

    const { user } = useAppSelector(selectAuth);
    const navigate = useNavigate();

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };

        axios.get("/api/notifications", config).then((resp) => {
            const notifications: AppNotification[] = resp.data;
            setNotifications(notifications);
        });
    }, [])

    const onClick = (type: AppNotificationType) => {
        const to = type === "appointment" ? "profile-panel/appointments" : "profile-panel/consultation";
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };
        axios.patch(`/api/notifications/types/${type}`, {}, config).then(_ => {
            navigate(to);
        });
    }

    return (
        <div className="flex flex-col gap-7">
            {
                notifications?.slice(0, 5).map(notification => {
                    return (
                        <div key={notification.id} className={`text-sm ${notification.viewed ? "font-extralight" : "font-bold"}`} onClick={() => onClick(notification.type)}>
                            {dayjs(notification.time).format(dateFormat + " " + timeFormat)} <br />
                            <p>{notification.message}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default NotificationList;