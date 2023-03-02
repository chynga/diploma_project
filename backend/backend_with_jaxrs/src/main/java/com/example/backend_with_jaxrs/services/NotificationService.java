package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.NotificationDAO;
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

    public ArrayList<Notification> getClientNotifications(Long clientId) throws CustomException {
        return NotificationDAO.getInstance().getClientNotifications(clientId);
    }

    public void readNotifications(Long clientId, String type) throws CustomException {
        NotificationDAO.getInstance().markAsViewed(clientId, type);
    }
}
