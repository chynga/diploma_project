import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import { Bell } from "../SvgImages";
import { TextBase, TextSm } from "../TextElements";
import { AppNotification, AppNotificationType, dateFormat, timeFormat } from "../types";

function Notification() {
    const [notifications, setNotifications] = useState<AppNotification[]>();
    const { user } = useAppSelector(selectAuth);

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

    return (
        <div className="group relative hover:cursor-pointer">
            <Bell className="w-[20px] md:w-auto" />
            {notifications?.filter(notification => !notification.viewed).length !== 0 ?
                <div className="absolute -top-1 right-1 w-[14px] h-[14px] bg-red-500 rounded-full"></div>
                :
                <></>
            }
            <div className="hidden group-hover:block py-10 px-7 w-[276px] flex flex-col items-center justify-around gap-3 group-hover:flex absolute bg-background-white dark:bg-background-dark top-[100%] right-0 rounded-b-2xl drop-shadow-lg">
                <NotificationList notifications={notifications} />
            </div>
        </div>
    );
}

type NotificationListParams = {
    notifications: AppNotification[] | undefined
}

function NotificationList({ notifications }: NotificationListParams) {
    const { user } = useAppSelector(selectAuth);
    const navigate = useNavigate();

    const onClick = (type: AppNotificationType) => {
        const to = type === "appointment" ? "profile-panel/appointments/future" : "profile-panel/consultation";
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
                notifications?.filter(notification => notification.showTime ? notification.showTime < dayjs().unix() * 1000 : true)
                    .slice(0, 5).map(notification => {
                        return (
                            <TextSm key={notification.id}>
                                <div className={`${notification.viewed ? "font-extralight" : "font-bold"}`} onClick={() => onClick(notification.type)}>
                                    {dayjs(notification.time).format(dateFormat + " " + timeFormat)} <br />
                                    <p>{notification.message}</p>
                                </div>
                            </TextSm>
                        )
                    })
            }
        </div>
    );
}

export default Notification;