package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.message.Message;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;
import com.example.backend_with_jaxrs.utils.enums.daoActions.MessageAction;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.ArrayList;

public class MessageDAO extends GeneralDAO {
    private static MessageDAO INSTANCE;

    private MessageDAO() throws CustomException {
        super();
    }

    public static MessageDAO getInstance() throws CustomException {
        if(INSTANCE == null) {
            INSTANCE = new MessageDAO();
        }

        return INSTANCE;
    }

    public ArrayList<Message> getMessages(Message message) throws CustomException {
        String sqlScript = "SELECT * FROM consultation WHERE client_id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, message, MessageAction.GET_MESSAGES);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getMessagesFromDb(resultSet);
    }

    public Message saveMessage(Message message) throws CustomException {
        String sqlScript = "INSERT INTO consultation (client_id, consultant_id, body, sent_time, is_client) " +
                "VALUES (?, ?, ?, ?, ?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, message, MessageAction.SAVE_MESSAGE);
        executeUpdate(preparedStatement);
        ResultSet resultSet = getResultSet(preparedStatement);

        return getMessageFromDb(resultSet);
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, Message message, MessageAction messageAction) throws CustomException {
        try {
            switch (messageAction) {
                case SAVE_MESSAGE:
                    preparedStatement.setLong(1, message.getClientId());
                    preparedStatement.setObject(2, message.getConsultantId(), Types.INTEGER);
                    preparedStatement.setString(3, message.getBody());
                    preparedStatement.setTimestamp(4, message.getSentTime());
                    preparedStatement.setBoolean(5, message.isClient());
                    break;
                case GET_MESSAGES:
                    preparedStatement.setLong(1, message.getClientId());
                    break;
            }
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private ArrayList<Message> getMessagesFromDb(ResultSet resultSet) throws CustomException {
        try {
            ArrayList<Message> messages = new ArrayList<>();
            while (resultSet.next()) {
                Message message = new Message();
                setMessageFields(resultSet, message);
                messages.add(message);
            }

            return messages;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_MESSAGES);
        }
    }

    private Message getMessageFromDb(ResultSet resultSet) throws CustomException {
        try {
            if (resultSet.next()) {
                Message message = new Message();
                setMessageFields(resultSet, message);
                return message;
            } else {
                throw new CustomException(ErrorCode.SQL_MESSAGE_NOT_FOUND);
            }
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_MESSAGES);
        }
    }

    private void setMessageFields(ResultSet resultSet, Message message) throws CustomException {
        try {
            message.setId(resultSet.getLong("id"));
            message.setClientId(resultSet.getLong("client_id"));
            message.setBody(resultSet.getString("body"));
            message.setSentTime(resultSet.getTimestamp("sent_time"));
            message.setIsClient(resultSet.getBoolean("is_client"));
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_MESSAGE_FIELDS);
        }
    }
}
