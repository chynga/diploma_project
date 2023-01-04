package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.Client;
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

    public void insertClientFields(Long id) throws CustomException {
        String sqlScript = "INSERT INTO clients (id, email_verified) " +
                "VALUES (?, false)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setClientFields(preparedStatement, new Client(id));
        executeUpdate(preparedStatement);
    }

    public Client getClientById(Long id) throws CustomException {
        String sqlScript = "SELECT * FROM users u JOIN clients c on u.id = c.id WHERE c.id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setClientFields(preparedStatement, new Client(id));
        ResultSet resultSet = executeQuery(preparedStatement);

        return getClientFromDb(resultSet);
    }

    public void setVerificationCode(Long id, String verificationCode, Timestamp timestamp) throws CustomException {
        String sqlScript = "UPDATE clients SET verification_code = (?), verification_code_sent_time = (?) WHERE id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setFieldsForVerification(preparedStatement, id, verificationCode, timestamp);
        executeUpdate(preparedStatement);
    }

    public String getVerificationCode(Long id) throws CustomException {
        String sqlScript = "SELECT * FROM clients c JOIN users u ON c.id = u.id WHERE c.id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setClientFields(preparedStatement, new Client(id));
        ResultSet resultSet = executeQuery(preparedStatement);

        return getClientFromDb(resultSet).getVerificationCode();
    }

    public void removeVerificationCode(Long id) throws CustomException {
        String sqlScript = "UPDATE clients SET verification_code = NULL, verification_code_sent_time = NULL, email_verified = true WHERE id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setClientFields(preparedStatement, new Client(id));
        execute(preparedStatement);
    }

    private void setClientFields(PreparedStatement preparedStatement, Client client) throws CustomException {
        try {
            preparedStatement.setLong(1, client.getId());
        } catch (SQLException e) {
            throw new CustomException(ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private void setFieldsForVerification(PreparedStatement preparedStatement,
                                          Long id,
                                          String verificationCode,
                                          Timestamp timestamp) throws CustomException {
        try {
            preparedStatement.setString(1, verificationCode);
            preparedStatement.setTimestamp(2, timestamp);
            preparedStatement.setLong(3, id);
        } catch (SQLException e) {
            throw new CustomException(ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private Client getClientFromDb(ResultSet resultSet) throws CustomException {
        try {
            Client client = new Client();
            if (resultSet.next()) {
                setClientFields(resultSet, client);
            } else {
                throw new CustomException(ErrorCode.SQL_CLIENT_NOT_FOUND);
            }

            return client;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_CLIENT);
        }
    }

    private void setClientFields(ResultSet resultSet, Client client) throws CustomException {
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
