package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.Notification;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class NotificationDAO extends GeneralDAO {
    private static NotificationDAO INSTANCE;

    private NotificationDAO() throws CustomException {
        super();
    }

    public static NotificationDAO getInstance() throws CustomException {
        if(INSTANCE == null) {
            INSTANCE = new NotificationDAO();
        }

        return INSTANCE;
    }

    public ArrayList<Notification> getClientNotifications(Long clientId) throws CustomException {
        String sqlScript = "SELECT * FROM notifications WHERE client_id = (?) " +
                "ORDER BY time DESC";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, clientId);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getNotificationsFromDb(resultSet);
    }

    public void saveNotification(Notification notification) throws CustomException {
        String sqlScript = "INSERT INTO notifications (client_id, type, is_viewed, message, time) " +
                "VALUES (?, ?, false, ?, ?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, notification);
        execute(preparedStatement);
    }

    public void saveNotificationWithShowTime(Notification notification) throws CustomException {
        String sqlScript = "INSERT INTO notifications (client_id, type, is_viewed, message, time, show_time) " +
                "VALUES (?, ?, false, ?, ?, ?)";

        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, notification);
        execute(preparedStatement);
    }

    public void markAsViewed(Long clientId, String type) throws CustomException {
        String sqlScript = "UPDATE notifications SET is_viewed = true WHERE client_id = (?) AND type = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, clientId, type);
        executeUpdate(preparedStatement);
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, Notification notification) throws CustomException {
        try {
            preparedStatement.setLong(1, notification.getClientId());
            preparedStatement.setString(2, notification.getType());
            preparedStatement.setString(3, notification.getMessage());
            preparedStatement.setTimestamp(4, notification.getTime());
            if (notification.getShowTime() != null) {
                preparedStatement.setTimestamp(5, notification.getShowTime());
            }
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, Long id) throws CustomException {
        try {
            preparedStatement.setLong(1, id);
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, Long clientId, String type) throws CustomException {
        try {
            preparedStatement.setLong(1, clientId);
            preparedStatement.setString(2, type);
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private ArrayList<Notification> getNotificationsFromDb(ResultSet resultSet) throws CustomException {
        try {
            ArrayList<Notification> notifications = new ArrayList<>();
            while (resultSet.next()) {
                Notification notification = new Notification();
                setNotificationFields(resultSet, notification);
                notifications.add(notification);
            }

            return notifications;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_NOTIFICATIONS);
        }
    }

    private void setNotificationFields(ResultSet resultSet, Notification notification) throws CustomException {
        try {
            notification.setId(resultSet.getLong("id"));
            notification.setClientId(resultSet.getLong("client_id"));
            notification.setType(resultSet.getString("type"));
            notification.setViewed(resultSet.getBoolean("is_viewed"));
            notification.setMessage(resultSet.getString("message"));
            notification.setTime(resultSet.getTimestamp("time"));
            notification.setShowTime(resultSet.getTimestamp("show_time"));
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_NOTIFICATION_FIELDS);
        }
    }
}
