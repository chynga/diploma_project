package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.AppointmentDAO;
import com.example.backend_with_jaxrs.dao.NotificationDAO;
import com.example.backend_with_jaxrs.models.Appointment;
import com.example.backend_with_jaxrs.models.Notification;
import com.example.backend_with_jaxrs.utils.CustomException;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;

public class NotificationService {
    private static NotificationService INSTANCE;

    private NotificationService() {}

    public static NotificationService getInstance() {
        if(INSTANCE == null) {
            INSTANCE = new NotificationService();
        }

        return INSTANCE;
    }

    public void sendNotification(Notification notification) throws CustomException {
        Date date = new Date();
        Timestamp ts = new Timestamp(date.getTime());
        notification.setTime(ts);
        NotificationDAO.getInstance().saveNotification(notification);
    }

    public void sendNotificationAsClient(Notification notification) throws CustomException {
        Date date = new Date();
        Timestamp ts = new Timestamp(date.getTime());
        notification.setTime(ts);
        notification.setMessage("Вы успешно записаны!");
        notification.setType("appointment");
        NotificationDAO.getInstance().saveNotification(notification);
        Appointment appointment = AppointmentDAO.getInstance().getAppointment(notification.getAppointmentId());

        Timestamp showTime = new Timestamp(appointment.getTime().getTime() - 1 * 24 * 60 * 60 * 1000);
        showTime.setHours(1);
        showTime.setMinutes(0);
        showTime.setSeconds(0);
        if (showTime.getTime() < new Date().getTime()) {
            return;
        }
        notification.setTime(showTime);
        notification.setShowTime(showTime);
        notification.setMessage("Завтра у вас запись в " +
                appointment.getTime().getHours() + ":" + appointment.getTime().getMinutes() +
                ", не забудьте!");
        NotificationDAO.getInstance().saveNotificationWithShowTime(notification);
    }

    public ArrayList<Notification> getClientNotifications(Long clientId) throws CustomException {
        return NotificationDAO.getInstance().getClientNotifications(clientId);
    }

    public void readNotifications(Long clientId, String type) throws CustomException {
        NotificationDAO.getInstance().markAsViewed(clientId, type);
    }
}
