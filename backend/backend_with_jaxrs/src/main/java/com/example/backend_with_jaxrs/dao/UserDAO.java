package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.User;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;

import java.sql.*;

public class UserDAO extends GeneralDAO {
    private static UserDAO INSTANCE;

    private UserDAO() throws CustomException {
        super();
    }

    public static UserDAO getInstance() throws CustomException {
        if(INSTANCE == null) {
            INSTANCE = new UserDAO();
        }

        return INSTANCE;
    }

    public Long register(User userCredentials) throws CustomException {
        String sqlScript = "INSERT INTO users (full_name, email, phone, password) " +
                "VALUES (?, ?, ?, ?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setRegistrationCredentialsForSqlScript(preparedStatement, userCredentials);
        executeUpdate(preparedStatement);
        ResultSet resultSet = getResultSet(preparedStatement);

        return getUserFromDb(resultSet).getId();
    }

    public User getUserById(Long id) throws CustomException {
        String sqlScript = "SELECT * FROM users WHERE id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setIdForSqlScript(preparedStatement, id);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getUserFromDb(resultSet);
    }

    public User getUserByEmail(String email) throws CustomException {
        String sqlScript = "SELECT * FROM users WHERE email = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setEmailForSqlScript(preparedStatement, email);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getUserFromDb(resultSet);
    }

    public void setRecoveryCode(Long id, String recoveryCode, Timestamp timestamp) throws CustomException {
        String sqlScript = "UPDATE users SET recovery_code = (?), recovery_code_sent_time = (?) WHERE id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setFieldsForPasswordRecovery(preparedStatement, id, recoveryCode, timestamp);
        executeUpdate(preparedStatement);
    }

    public String getRecoveryCode(Long id) throws CustomException {
        String sqlScript = "SELECT * FROM users WHERE id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setIdForSqlScript(preparedStatement, id);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getUserFromDb(resultSet).getRecoveryCode();
    }

    public void removeRecoveryCode(Long id) throws CustomException {
        String sqlScript = "UPDATE users SET recovery_code = NULL, recovery_code_sent_time = NULL WHERE id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setIdForSqlScript(preparedStatement, id);
        execute(preparedStatement);
    }

    public void updatePassword(User user) throws CustomException {
        String sqlScript = "UPDATE users SET password = (?) WHERE id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        setPasswordAndIdForSqlScript(preparedStatement, user.getPassword(), user.getId());
        execute(preparedStatement);
    }

    private User getUserFromDb(ResultSet resultSet) throws CustomException {
        try {
            User user = new User();
            if (resultSet.next()) {
                setUserFields(resultSet, user);
            } else {
                throw new CustomException(ErrorCode.SQL_USER_NOT_FOUND);
            }

            return user;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_USER);
        }
    }

    private void setRegistrationCredentialsForSqlScript(PreparedStatement preparedStatement, User user) throws CustomException {
        try {
            preparedStatement.setString(1, user.getFullName());
            preparedStatement.setString(2, user.getEmail());
            preparedStatement.setString(3, user.getPhone());
            preparedStatement.setString(4, user.getPassword());
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private void setIdForSqlScript(PreparedStatement preparedStatement, Long id) throws CustomException {
        try {
            preparedStatement.setLong(1, id);
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private void setEmailForSqlScript(PreparedStatement preparedStatement, String email) throws CustomException {
        try {
            preparedStatement.setString(1, email);
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private void setPasswordAndIdForSqlScript(PreparedStatement preparedStatement, String password, Long id) throws CustomException {
        try {
            preparedStatement.setString(1, password);
            preparedStatement.setLong(2, id);
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private void setFieldsForPasswordRecovery(PreparedStatement preparedStatement,
                                              Long id,
                                              String recoveryCode,
                                              Timestamp timestamp) throws CustomException {
        try {
            preparedStatement.setString(1, recoveryCode);
            preparedStatement.setTimestamp(2, timestamp);
            preparedStatement.setLong(3, id);
        } catch (SQLException e) {
            throw new CustomException(ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    static void setUserFields(ResultSet resultSet, User user) throws CustomException {
        try {
            user.setId(resultSet.getLong("id"));
            user.setFullName(resultSet.getString("full_name"));
            user.setEmail(resultSet.getString("email"));
            user.setPhone(resultSet.getString("phone"));
            user.setPassword(resultSet.getString("password"));
            user.setRecoveryCode(resultSet.getString("recovery_code"));
            user.setRecoveryCodeSentTime(resultSet.getDate("recovery_code_sent_time"));
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_USER_FIELDS);
        }
    }
}
