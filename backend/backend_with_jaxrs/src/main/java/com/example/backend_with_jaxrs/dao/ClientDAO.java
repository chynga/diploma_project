package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.UserWithAdditionalFields;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;

import java.sql.*;

public class ClientDAO extends GeneralDAO {
    private static ClientDAO INSTANCE;

    private ClientDAO() throws CustomException {
        super();
    }

    public static ClientDAO getInstance() throws CustomException {
        if(INSTANCE == null) {
            INSTANCE = new ClientDAO();
        }

        return INSTANCE;
    }

    public void insertClientFields(UserWithAdditionalFields client) throws CustomException {
        String sqlScript = "INSERT INTO clients (id, email_verified) " +
                "VALUES (?, false)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, client);
        executeUpdate(preparedStatement);
    }

    public UserWithAdditionalFields getClientById(UserWithAdditionalFields client) throws CustomException {
        String sqlScript = "SELECT * FROM users u JOIN clients c on u.id = c.id WHERE c.id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setSqlScriptData(preparedStatement, client);
        executeQuery(preparedStatement);
        ResultSet resultSet = getResultSet(preparedStatement);
        return getClientFromDb(resultSet);
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, UserWithAdditionalFields client) throws CustomException {
        try {
            preparedStatement.setInt(1, client.getId());
        } catch (SQLException e) {
            throw new CustomException(ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private UserWithAdditionalFields getClientFromDb(ResultSet resultSet) throws CustomException {
        try {
            UserWithAdditionalFields client = new UserWithAdditionalFields();
            if (resultSet.next()) {
                setClientFields(resultSet, client);
            }
            return client;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_CLIENT);
        }
    }

    private void setClientFields(ResultSet resultSet, UserWithAdditionalFields client) throws CustomException {
        UserDAO.setUserFields(resultSet, client);
        try {
            client.setVerificationCode(resultSet.getString("verification_code"));
            client.setVerificationCodeSentTime(resultSet.getDate("verification_code_sent_time"));
            client.setEmailVerified(resultSet.getBoolean("email_verified"));
            client.setPatientDescription(resultSet.getString("patient_description"));
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_CLIENT_FIELDS);
        }
    }
}
